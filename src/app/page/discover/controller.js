/* globals response, tinymce, confirm */
/* dependencies */
var Vue = require('vue');
var jQuery = require('jquery');
var Masonry = require('masonry-layout');

module.exports = function (api) {

    /* schemas
    var schema = require('./schema.js');

    /* configs
    var config = require('./config.js');

    /* data
    */
    var data = require('./data.js')();

    return new Vue({
        el: '#body',
        mixins: [],
        data: data,
        ready () {		
            // init with selector
            this.layout = new Masonry('.grid', {
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                percentPosition: true,
                transitionDuration: '0.2s'
            });
            Vue.nextTick(() => {

                setTimeout(() => {
                    this.layout.layout();
                }, 500);

                setTimeout(() => {
                    this.layout.layout();
                }, 2000);
            });

        },
        computed: {

        },
        methods: {

            openMedia(media) {
                console.log(media);
		this.isReady = true,
                this.current = media;
            },

            closeMedia() {
                this.current = null;
            }
        }
	

    });
};
