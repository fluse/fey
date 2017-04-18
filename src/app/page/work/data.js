/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
	isSelectedMenuItemContactWork : true,
        settings: {
            hideHeader: false
        },
		mediaList: [{
            layout: null,
            type: 'ytvideo',
            url: {
                thumb: '/public/image/explore1_thumb.jpg',
                full: 'https://www.youtube.com/watch?v=21E-NmIulFo'
            },
            title: 'Nature',
            description: '',
            camSettings: {
                name: 'Canon 6D',
                focal: '14mm',
                aperture: 'f/6.3',
                exposure_time: '1/500',
                iso: 'Iso 100'
            }
		},{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/IMG_6898_thumb.jpg',
                full: 'https://www.youtube.com/watch?v=3ZrU4D8w-18'
            },
            title: 'n/a',
            description: '',
            camSettings: {
                name: 'Snapshot',
                focal: 'n/a',
                aperture: 'n/a',
                exposure_time: 'n/a',
                iso: 'n/a'
            }
        }]
    }, response);
};
