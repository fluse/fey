/* globals response, tinymce, confirm */

/* dependencies */
var Vue = require('vue');

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

        },
        computed: {

        },
         methods: {

            openMedia(media) {
                console.log(media);
		document.getElementById("previewContainer").classList.remove("hiddenOnLoad");
                this.current = media;
            },

            closeMedia() {
                this.current = null;
            }
        }

    });
};
