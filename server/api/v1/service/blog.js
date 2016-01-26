var request = require('request');

module.exports = (app) => {

    return {

        getArticle(cb) {

            const options = {
                json: true,
                url: 'https://www.camperdays.de/blog/reiseplanung/',
                qs: {
                    json: 1,
                    count: 2
                }
            };

            request(options, (err, response, body) => {
                cb(err, body);
            });
        }

    };
};
