var argv = require('yargs').argv;

module.exports = {
    env: process.env.NODE_ENV || 'development',
    server: {
        port: argv.port || 3000
    },
    api: {
        version: '/api/v1'
    },
    aws: {
        metadata: 'http://169.254.169.254/latest/meta-data/'
    }
};
