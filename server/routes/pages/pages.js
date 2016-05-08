var async = require('async'),
    routeCache = require('route-cache');

module.exports = function (app) {

    app.get('/', routeCache.cacheSeconds(app.config.cache.pages), (req, res) => {

        // get data from services
        async.parallel({

        }, (err, data) => {

            res.renderPage({
                page: 'welcome'
            }, {
                settings: {
                    showHeader: false
                }
            });
        });

    });

    app.get('/discover', routeCache.cacheSeconds(app.config.cache.pages), (req, res) => {

        // get data from services
        async.parallel({

        }, (err, data) => {

            res.renderPage({
                page: 'discover'
            }, {
                settings: {
                    showHeader: true
                }
            });
        });

    });

    app.get('/work', routeCache.cacheSeconds(app.config.cache.pages), (req, res) => {

        // get data from services
        async.parallel({

        }, (err, data) => {

            res.renderPage({
                page: 'work'
            }, {
                settings: {
                    showHeader: true
                }
            });
        });

    });

    app.get('/contact', routeCache.cacheSeconds(app.config.cache.pages), (req, res) => {

        // get data from services
        async.parallel({

        }, (err, data) => {

            res.renderPage({
                page: 'contact'
            }, {
                settings: {
                    showHeader: true
                }
            });
        });

    });

    app.get('/imprint', routeCache.cacheSeconds(app.config.cache.pages), (req, res) => {

        // get data from services
        async.parallel({

        }, (err, data) => {

            res.renderPage({
                page: 'imprint'
            }, {
                settings: {
                    showHeader: true
                }
            });
        });

    });

};
