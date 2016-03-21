/* globals response */

var extend = require('extend');

module.exports = function () {

    return extend({
        current: {},
        settings: {
            hideHeader: false
        },
        mediaList: [{
            layout: null,
            type: 'image',
            url: {
                thumb: '/public/image/explore1_thumb.jpg',
                full: '/public/image/explore1.jpg'
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
            type: 'image',
            url: {
                thumb: '/public/image/explore2_thumb.jpg',
                full: '/public/image/explore2.jpg'
            },
            title: 'Circle of Life',
            description: '',
            camSettings: {
                name: 'Canon 6D',
                focal: '14mm',
                aperture: 'f/18',
                exposure_time: '1/125',
                iso: 'Iso 100'
            }
        },{
            type: 'image',
            url: {
                thumb: '/public/image/explore3_thumb.jpg',
                full: '/public/image/explore3.jpg'
            },
            title: 'Frozen Water',
            description: '',
            camSettings: {
                name: 'Canon 6D',
                focal: '200mm',
                aperture: 'f/14',
                exposure_time: '13 s',
                iso: 'Iso 160'
            }
        },{
            type: 'image',
            url: {
                thumb: '/public/image/explore4_thumb.jpg',
                full: '/public/image/explore4.jpg'
            },
            title: 'Auenland',
            description: '',
            camSettings: {
                name: 'Canon 6D',
                focal: '45mm',
                aperture: 'f/20',
                exposure_time: '1/100',
                iso: 'Iso 8000'
            }
        },{
            type: 'image',
            url: {
                thumb: '/public/image/explore5_thumb.jpg',
                full: '/public/image/explore5.jpg'
            },
            title: 'Beach',
            description: '',
            camSettings: {
                name: 'Smartphone',
                focal: 'n/a',
                aperture: 'n/a',
                exposure_time: 'n/a',
                iso: 'n/a'
            }
        },{
            type: 'image',
            url: {
                thumb: '/public/image/explore6_thumb.jpg',
                full: '/public/image/explore6.jpg'
            },
            title: 'Farbenspiel',
            description: '',
            camSettings: {
                name: 'Canon 6D',
                focal: '200mm',
                aperture: 'f/10',
                exposure_time: '6s',
                iso: 'Iso 160'
            }
        },{
            type: 'image',
            url: {
                thumb: '/public/image/explore7_thumb.jpg',
                full: '/public/image/explore7.jpg'
            },
            title: 'Mirror',
            description: '',
            camSettings: {
                name: 'Canon 6D',
                focal: '28mm',
                aperture: 'f/22',
                exposure_time: '1/8',
                iso: 'Iso 320'
            }
        },{
            type: 'image',
            url: {
                thumb: '/public/image/explore8_thumb.jpg',
                full: '/public/image/explore8.jpg'
            },
            title: 'Sundancer',
            description: '',
            camSettings: {
                name: 'Canon 6D',
                focal: '24mm',
                aperture: 'f/5',
                exposure_time: '1/320',
                iso: 'Iso 160'
            }
        },{
            type: 'image',
            url: {
                thumb: '/public/image/explore9_thumb.jpg',
                full: '/public/image/explore9.jpg'
            },
            title: 'Triangle',
            description: '',
            camSettings: {
                name: 'Canon 6D',
                focal: '28mm',
                aperture: 'f/2.8',
                exposure_time: '1/320',
                iso: 'Iso 160'
            }
        },{
            type: 'image',
            url: {
                thumb: '/public/image/explore10_thumb.jpg',
                full: '/public/image/explore10.jpg'
            },
            title: 'Power',
            description: '',
            camSettings: {
                name: 'Canon 6D',
                focal: '65mm',
                aperture: 'f/16',
                exposure_time: '1/1000',
                iso: 'Iso 1600'
            }
        }]
    }, response);
};
