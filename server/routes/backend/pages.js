module.exports = (app) => {

    app.get('/backend/pages/', (req, res) => {
        res.renderPage({
            page: 'backend/pages',
            layout: 'backend'
        }, {
        });
    });

};
