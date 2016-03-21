var nodemailer = require('nodemailer'),
    extend = require('extend');

module.exports = (app) => {

    var smtpConfig = {
        host: 'smtp.udag.de',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'feynsinn-design-0001',
            pass: 'feynsinn!design!2016'
        }
    };

    var transporter = nodemailer.createTransport(smtpConfig);

    return {

        send(data, cb) {

            data = extend({
                to: 'holger.schauf@gmail.com'//'photography@feynsinn.design'
            }, data);

            // send mail with defined transport object
            transporter.sendMail(data, cb);
        }

    };
};
