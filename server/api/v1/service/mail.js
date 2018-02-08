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
            var  = JSON.stringify(data);
			var vars = x.split("##");
			data.to = 'chris.kremer5@web.de';
			data.from = vars[0].replace(/_([^_]*)$/,'.');
			data.subject = vars[1];
			data.text = vars[2];
        
            mailgun.messages().send(data, cb);
        }

    };
};
