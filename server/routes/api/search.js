'use strict';
var async = require('async');

module.exports = (app) => {

    app.post('/api/v1/search/', (req, res) => {



        async.parallel({
            
        }, (err, data) => {

            res.json({
                error: err,
                result: data.status
            });

        });

    });

};
