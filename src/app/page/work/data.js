/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
	isSelectedMenuItemContactWork : true,
      current: {},
        settings: {
            hideHeader: false
        },
		mediaList: [{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scFlakesCorner.png',
                full: 'https://www.youtube.com/watch?v=21E-NmIulFo'
            },
            title: 'Flakes Corner Opening',
			description: 'Short clip about the opening day for FlakesCorner in Cologne.',
            videoId: 'TRhE4nde1vU'
		},{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scFlakesCorner.jpg',
                full: 'https://www.youtube.com/watch?v=3ZrU4D8w-18'
            },
            title: 'Imagefilm KGK',
			description: 'Description to be added soon.',
           videoId: '21E-NmIulFo'
        },
		{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/explore1_thumb.jpg',
                full: 'https://www.youtube.com/watch?v=21E-NmIulFo'
            },
            title: 'Masterclass Lichtstraße Short Teaser',
			description: 'Short Teaser I made for die-Contra in Cologne at Studiolichtstrasse. Tried my new Came-TV Gimbal for the first time.',
            videoId: '3ZrU4D8w-18'
		}
		]
    }, response);
};
