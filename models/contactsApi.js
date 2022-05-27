const axios = require('axios');

const create = (url, body,  callback) => {
    axios
    .post(url, {
        id: body.id,
        name: body.name,
        number: body.number,
        provider: body.provider,
        region: body.region
    })
    .then(res => {
        return callback(null, res.data);
    })
    .catch(error => {
        return callback(error);
    });
}

const readAll = (url, callback) => {
    axios
    .get(url)
    .then(res => {
        return callback(null, res.data);
    })
    .catch(error => {
        return callback(error);
    });
}

const readById = (url, callback) => {
    axios
    .get(url)
    .then(res => {
        return callback(null, res.data);
    }).catch(error => {
        return callback(error);
    });
}

const update = (url, body, callback) => {
    axios
    .patch(url, {
        id: body.id,
        name: body.name,
        number: body.number,
        provider: body.provider,
        region: body.region
    })
    .then(res => {
        return callback(null, res.message)
    })
    .catch(error => {
        return callback(error);
    });
}

const deleteData = (url, callback) => {
    axios
    .delete(url)
    .then(res => {
        return callback(null, res.message);
    })
    .catch(error => {
        return callback(error)
    });
}

module.exports = { 
    readAll, 
    create, 
    readById,
    update, 
    deleteData 
}