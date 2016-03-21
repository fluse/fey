/* globals request */

'use strict';

var Api = require('client-api');

var api = window.api = new Api(request.api);

var controller = {
    discover: require('./page/discover/controller.js'),
    welcome: require('./page/welcome/controller.js'),
    work: require('./page/work/controller.js')
};

// initialize page controller
if (controller.hasOwnProperty(request.controller)) {
    window.loaded = new controller[request.controller](api);
} else {
    console.info('no page controller defined');
}
