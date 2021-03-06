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
	isSelectedMenuItemContact : true,
        error: false,
        success: false,
        settings: {
            hideHeader: false
        }
    }, response);
};
