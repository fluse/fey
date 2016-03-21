/* globals response, tinymce, confirm */

/* dependencies */
var Vue = require('vue');

module.exports = function (api) {

    /* schemas
    var schema = require('./schema.js');

    /* configs
    var config = require('./config.js');

    /* data
    */
    var data = require('./data.js')();


    return new Vue({
        el: '#body',
        mixins: [],
        data: data,
        ready () {

        },
        computed: {

        },
        methods: {

            sendMail(media) {
                return api('post', '/mail/', {}, this.mail, (err, result) => {

                });
            }
        }

    });
};
