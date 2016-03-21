var extend = require('extend');

module.exports = (app) => {

    var mailgun = require('mailgun-js')({
        apiKey: app.config.service.mailgun.api_key,
        domain: app.config.service.mailgun.domain
    });

    return {

        send(data, cb) {

            data = extend({
                to: 'holger.schauf@gmail.com'//'photography@feynsinn.design'
            }, data);
            /*
            var data = {
              from: 'Excited User <me@samples.mailgun.org>',
              to: 'serobnic@mail.ru',
              subject: 'Hello',
              text: 'Testing some Mailgun awesomness!'
          };*/

            mailgun.messages().send(data, cb);
        }

    };
};
