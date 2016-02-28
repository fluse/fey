/* globals response, tinymce, confirm */

/* dependencies */
var Vue = require('vue');
var jQuery = require('jquery');
var parallax = require('parallax/deploy/parallax.min.js');

module.exports = function (api) {

    /* schemas
    var schema = require('./schema.js');

    /* configs
    var config = require('./config.js');

    /* data

    var data = require('./data.js')(config, schema);
    */

    return new Vue({
        el: '#body',
        mixins: [],
        data: {
            settings: {
                hideHeader: true
            }
        },
        ready () {

            var scene = document.getElementById('page');
            var parallax = new Parallax(scene);
            parallax.calibrate(true, true);
            parallax.invert(true, true);
            parallax.limit(20, 20);
            parallax.scalar(18, 18);
            parallax.friction(0.1, 0.1);
            parallax.origin(3.0, 3.0);

        },
        computed: {

        },
        methods: {

            initEditor() {

            }
        }

    });
};
