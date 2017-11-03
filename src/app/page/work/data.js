/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
	isSelectedMenuItemContactWork : true,
      current: {},
        settings: {
            hideHeader: false
        },
		mediaList: [

      {
          type: 'vimeo',
          url: {
              thumb: 'https://i.vimeocdn.com/video/23766985_1280x720.jpg',
          },
          title: 'Testmovie',
    description: 'Af',
         videoId: 'https://player.vimeo.com/video/' + '6370469' + '?portrait=0&byline=0&badge=0&title=0&autoplay=1'
      },
      {
                type: 'ytvideo',
                url: {
                    thumb: '/public/image/scMasterclass.jpg',
                },
                title: 'Masterclass Lichtstraße',
    			description: 'Short Teaser I made for die-Contra in Cologne at Studiolichtstrasse.',
                videoId: '3ZrU4D8w-18'
    		},
        {
            type: 'ytvideo',
            url: {
                thumb: 'http://i.ytimg.com/vi/vFygdG2KvCY/maxresdefault.jpg',
            },
            title: 'Contra 2017',
			description: 'Aftermovie of the marketing conference Contra 2017 in Duesseldorf.',
           videoId: 'vFygdG2KvCY'
        },
         {
              type: 'ytvideo',
              url: {
                  thumb: '/public/image/scKGK.jpg',
              },
              title: 'KGK lawfirm',
  			description: 'Image video for the law firm KGK Rechtsanwälte based in Cologne.',
             videoId: '21E-NmIulFo'
          },
		{
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scEuropaService.jpg',
            },
            title: 'Europaservice AG',
			description: 'We transformed the yearly Annual Report of the year 2016 into a movie which was displayed to the shareholders.',
            videoId: 'czhuRMrR4tU'
		},
    {
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scFriedrichshafen.jpg',
            },
            title: 'ZF Friedrichshaven AG',
			description: 'Image film for the car parts producer ZF Friedrichshafen AG to show the production circle of a new product.',
            videoId: 'Zkh1wXHTmOY'
		},
    {
          type: 'ytvideo',
          url: {
              thumb: '/public/image/scFlakesCornerjpeg.jpg',
          },
          title: 'Flakes Corner',
    description: 'Short clip about the opening day for FlakesCorner in Cologne.',
          videoId: 'TRhE4nde1vU'
  },
    {
            type: 'ytvideo',
            url: {
                thumb: '/public/image/scGipfelTreffen.jpg',
            },
            title: 'Gipfeltreffen',
      description: 'Short after movie of the marketing event Gipfeltreffen 2016 in cologne.',
            videoId: 'c7dJu-RttY4'
    },
    {
        type: 'vimeo',
        url: {
            thumb: 'https://i.vimeocdn.com/video/23766985_1280x720.jpg',
        },
        title: 'Testmovie',
  description: 'Af',
       videoId: 'https://player.vimeo.com/video/' + '6370469' + '?portrait=0&byline=0&badge=0&title=0&autoplay=1'
    },
		]
    }, response);
};
