const glob = require('glob');
const path = require('path');

module.exports = {
    register: app => {
        glob.sync(path.join(__dirname, '!(index.js)')).forEach(f => {
            require(path.resolve(f))(app);
        });
    }
};

