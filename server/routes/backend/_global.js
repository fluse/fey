var authorization = require(__dirname + '/../../middleware/authorization');

module.exports = (app) => {

    app.all('/backend/*', authorization.byUser);

};
