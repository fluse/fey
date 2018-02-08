var extend = require('extend');

module.exports = (app) => {
    var mailgun = require('mailgun-js')({
        apiKey: app.config.service.mailgun.api_key,
        domain: app.config.service.mailgun.domain
    });

    return {

        send(data, cb) {

           /*  data = extend({
                to: 'chris.kremer5@web.de, '
            }, data);

            data.from = data.name + '<' + data.from + '>';
            data.subject = 'feynsinn.design: ' + data.subject; */
            // var x = JSON.stringify(data);
			// var vars = x.split("##");
			data.text = JSON.stringify(data);
			 data.to = 'chris.kremer5@web.de';
			// data.from = vars[0];
			// /* varsvars = vars[0].split('@');
			// data.from = varsvars[0] + varsvars[1].replace('_','.'); */
			// data.subject = vars[1];
			// data.text = vars[2];
			data.from = "FeynSinn@Kontaktformular.de";
			
			data.subject = "Neue Anfrage";
        
		 
		 
            mailgun.messages().send(data, cb);
        }

    };
};
