/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
        settings: {
            hideHeader: false
        }
    }, response);
};
