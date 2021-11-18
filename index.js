const os = require('os');

module.exports = () => os.networkInterfaces().eth0[0].address;
