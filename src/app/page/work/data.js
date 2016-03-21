/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
        mail: {
            from: '',
            name: '',
            subject: '',
            text: ''
        },
        settings: {
            hideHeader: false
        }
    }, response);
};
