/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
        mail: {
            from: '',
            subject: '',
            text: ''
        },
        settings: {
            hideHeader: false
        }
    }, response);
};
