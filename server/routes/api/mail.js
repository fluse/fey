'use strict';

module.exports = (app) => {

    app.post('/api/v1/mail/', (req, res) => {
        app.api.service.mail.send(req.body, (err, result) => {
            res.json({
                error: err,
                result: result
            });
        });

    });

};
