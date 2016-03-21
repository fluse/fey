module.exports = {
    api: {
        version: 'v1',
        token: Math.random().toString(36).substr(2)
    },
    environment: {
        port: (typeof process.env.PORT !== 'undefined') ? process.env.PORT : 3687,
        production: (process.env.NODE_ENV !== 'dev')
    }
};
