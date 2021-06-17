const axios = require('axios');
const config = require('../config');

const metadata = axios.create({
    baseURL: 'http://169.254.169.254/latest/meta-data',
    timeout: 1000
});

const dynamicdata = axios.create({
    baseURL: 'http://169.254.169.254/latest/dynamic/instance-identity',
    timeout: 1000
});

module.exports = { metadata, dynamicdata }