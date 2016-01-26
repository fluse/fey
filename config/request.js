module.exports = {
    api: {
        version: 'v1',
        token: 'fD91yZ78668z7q98o0SkQOhx2V67eyg1'
    },
    environment: {
        port: (typeof process.env.PORT !== 'undefined') ? process.env.PORT : 3687,
        production: (process.env.NODE_ENV !== 'dev')
    }
};
