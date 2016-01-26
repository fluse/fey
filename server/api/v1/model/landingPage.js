var mongoose = require('mongoose');
var deepExtend = require('deep-extend');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

/*
 * Schema
 */
var schema = new mongoose.Schema({
    meta: {
        category: {
            type: String,
            enum: ['sem', 'seo', 'list', 'index'],
            default: 'sem'
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        keyword: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        },
        isActive: {
            type: Number,
            default: 0
        },
        noIndex: {
            type: Number,
            default: 0
        },
        redirect: {
            status: {
                type: Number,
                default: 200
            },
            url: {
                type: String,
                default: ''
            }
        }
    },
    landingGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LandingGroup'
    },
    feedbacks: {
        isActive: {
            type: Number,
            default: 1
        }
    },
    search: {
        headline: {
            title: {
                type: String,
                default: ''
            },
            tagName: {
                type: String,
                default: 'h1'
            }
        },
        country: {
            type: String,
            default: ''
        },
        countryCode: {
            type: String,
            default: ''
        }
    },
    hero: {
        showTrust: {
            type: Number,
            default: 1
        },
        image: {
            type: String,
            default: false
        },
        video: {
            type: String,
            default: false
        }
    },
    gallery: [{
        image: String,
        grid: String,
        title: String,
        url: String
    }],
    slider: [{
        image: String,
        title: String
    }],
    blogArticle: {
        category: {
            type: String,
            default: ''
        },
        maxItems: {
            type: Number,
            default: 2,
            validate: {
                validator: function(v) {
                    return v > 0 && v < 12;
                },
                message: '{VALUE} is to low or to hight!'
            }
        }
    },
    contentBox: [{
        isActive: {
            type: Number,
            default: 1
        },
        description: {
            type: String,
            default: 'Default Contentbox'
        },
        html: {
            type: String,
            default: ''
        }
    }],
    video: {
        headline: {
            title: {
                type: String,
                default: ''
            },
            tagName: {
                type: String,
                default: 'h3'
            }
        },
        videoId: {
            type: String,
            default: null
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    helper: {
        isCurrent: {
            type: String,
            default: ''
        }
    }
});

schema.plugin(deepPopulate, {
    populate: {
        'landingGroup': {
            select: 'meta'
        }
    }
});

schema.pre('save', function (next) {
    this.meta.url = this.meta.url.replace(/[^A-Z0-9]/ig, '-').toLowerCase();
    this.updatedAt = new Date();
    this.helper.isCurrent = '';
    next();
});

schema.statics.update = function (pageId, data, cb) {
    this.findOne({
        _id: pageId,
    }).exec((err, page) => {
        // error or empty
        if (err || page === null) {
            cb('page not found', pageId);
        } else {
            page = deepExtend(page, data);
            page.save(cb);
        }
    });
};

schema.statics.single = function (pageId, cb) {
    this.findOne({
        _id: pageId
    }).deepPopulate('landingGroup.list').exec(cb);
};

schema.statics.search = function (searchString, cb) {
    this.find({
        'meta.keyword': RegExp(searchString, 'i')
    }).deepPopulate('landingGroup.list').exec(cb);
};

schema.statics.all = function (cb) {
    this.find({}).deepPopulate('landingGroup.list').exec(cb);
};

module.exports = mongoose.model('LandingPage', schema);
