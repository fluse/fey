/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
	isSelectedMenuItemContactWork : true,
        settings: {
            hideHeader: false
        }
    }, response);
};
