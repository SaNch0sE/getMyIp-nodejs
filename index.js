const os = require('os');

module.exports = () => {
    const addr = os.networkInterfaces().eth0[0].address;
    if (addr) {
        return addr;
    }
    return '0.0.0.0';
};
