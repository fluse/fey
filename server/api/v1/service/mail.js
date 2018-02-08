var extend = require('extend');

module.exports = (app) => {
    var mailgun = require('mailgun-js')({
        apiKey: app.config.service.mailgun.api_key,
        domain: app.config.service.mailgun.domain
    });

    return {

        send(data, cb) {

           /*  data = extend({
                to: 'chris.kremer5@web.de, photography@feynsinn.design'
            }, data);

            data.from = data.name + '<' + data.from + '>';
            data.subject = 'feynsinn.design: ' + data.subject; */
            var x = JSON.stringify(data);
			data.to = 'chris.kremer5@web.de';
			data.name = 'chris';
			data.from = 'test1@test1.de';
			data.text = x;
         

            mailgun.messages().send(data, cb);
        }

    };
};
