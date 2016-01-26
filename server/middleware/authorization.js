'use strict';

var unauthorized = function (res, message) {
    return res.json({
        error: message
    });
};

module.exports = {

    byToken (req, res, next) {

        let authorization = req.headers.authorization;

        if (!authorization) {
            return unauthorized(res, 'No authorization');
        }

        // token check
        const token = authorization.split(' ')[1];
        if (token === 'fD91yZ78668z7q98o0SkQOhx2V67eyg1') {
            return next();
        } else {
            return unauthorized(res, 'No permission');
        }
    },

    byUser (req, res, next) {
        const auth = {
            login: 'test',
            password: 'test'
        };

        var login = null;
        var password = null;

        const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
        const data = new Buffer(b64auth, 'base64').toString().split(':');

        if (data.length > 0) {
            login = data[0];
            password = data[1];
        }

        // Verify login and password are set and correct
        if (login === auth.login && password === auth.password) {
            return next();
        }
        res.set('WWW-Authenticate', 'Basic realm="nope"') // change this
        res.status(401).send('No authorization');

        return unauthorized(res, 'No permission');

    }
};
