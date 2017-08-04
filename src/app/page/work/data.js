/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
	isSelectedMenuItemContactWork : true,
      current: {},
        settings: {
            hideHeader: false
        },
		mediaList: [		{
                type: 'ytvideo',
                url: {
                    thumb: '/public/image/scMasterclass.jpg',
                },
                title: 'Masterclass Lichtstraße Short Teaser',
    			description: 'Short Teaser I made for die-Contra in Cologne at Studiolichtstrasse. Tried my new Came-TV Gimbal for the first time.',
                videoId: '3ZrU4D8w-18'
    		},

      {
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scFlakesCornerjpeg.jpg',
            },
            title: 'Flakes Corner Opening',
			description: 'Short clip about the opening day for FlakesCorner in Cologne.',
            videoId: 'TRhE4nde1vU'
		},{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scKGK.jpg',
            },
            title: 'Imagefilm KGK',
			description: 'Description to be added soon.',
           videoId: '21E-NmIulFo'
        },
		{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scEuropaService.jpg',
            },
            title: 'Europaservice Car Rental Annual Report of 2016',
			description: '',
            videoId: 'czhuRMrR4tU'
		},
    {
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scFriedrichshafen.jpg',
            },
            title: 'Imagefilm ZF Friedrichshafen AG',
			description: '',
            videoId: 'Zkh1wXHTmOY'
		},
    {
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scGipfelTreffen.jpg',
            },
            title: 'Aftermovie Social Gipfel',
      description: '',
            videoId: 'c7dJu-RttY4'
    },
		]
    }, response);
};
