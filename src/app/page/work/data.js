/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
	isSelectedMenuItemContactWork : true,
        settings: {
            hideHeader: false
        },
		mediaList: [{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/explore1_thumb.jpg',
                full: 'https://www.youtube.com/watch?v=21E-NmIulFo'
            },
            title: 'Nature',
            videoId: 'M7lc1UVf-VE'
		},{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/IMG_6898_thumb.jpg',
                full: 'https://www.youtube.com/watch?v=3ZrU4D8w-18'
            },
            title: 'n/a',
           videoId: '21E-NmIulFo'
        },
		{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/explore1_thumb.jpg',
                full: 'https://www.youtube.com/watch?v=21E-NmIulFo'
            },
            title: 'Nature',
            videoId: 'M7lc1UVf-VE'
		},
		{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/explore1_thumb.jpg',
                full: 'https://www.youtube.com/watch?v=21E-NmIulFo'
            },
            title: 'Nature',
            videoId: '21E-NmIulFo'
		}
		]
    }, response);
};
