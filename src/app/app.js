/* globals request */

'use strict';

var Api = require('client-api');

var api = window.api = new Api(request.api);

var controller = {
    discover: require('./page/discover/controller.js'),
    welcome: require('./page/welcome/controller.js'),
    work: require('./page/work/controller.js'),
    contact: require('./page/contact/controller.js')
};

//highlight current page in menu

var currentLinkArray = window.location.href.split("/");
if(currentLinkArray.length > 0)
{
	var currentLink = currentLinkArray[currentLinkArray.length-1];
	var currentMenuLink = document.querySelectorAll("a[href='/" + currentLink + "']")[0].parentElement;
	currentMenuLink.className += "selectedMenuItem";
}


// initialize page controller
if (controller.hasOwnProperty(request.controller)) {
    window.loaded = new controller[request.controller](api);
} else {
    console.info('no page controller defined');
}
