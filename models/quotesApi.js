const axios = require('axios');

module.exports = {
    readAllQuotes: (url, callback) => {
        axios
        .get(url)
        .then((result) => {
            return callback(null, result.data);
        }).catch((err) => {
            return callback(err);
        });
    }
}