/* globals response, tinymce, confirm */
  var menuItem = document.getElementById('menuContact');
		menuItem.style.color = '#1784c7';
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
            // When the window has finished loading create our google map below
	  
            google.maps.event.addDomListener(window, 'load', this.init);
        },
        computed: {

        },
        methods: {

            sendMail() {

                if (this.mail.from.length === 0 || this.mail.text.length === 0 || this.mail.name.length === 0 || this.mail.subject.length === 0) {
                    this.error = true;
                    return;
                }

                return api('post', '/mail/', {}, this.mail, (err, result) => {
                    this.removeError();
                    if (!err) {
                        this.success = true;
                    }
                });
            },

            removeError () {
                this.error = false;
            },

            init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(50.94128, 6.95827), // New York

                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
                };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(50.94128, 6.95827),
                    map: map,
                    title: 'Snazzy!'
                });
            }
        }

    });
};
