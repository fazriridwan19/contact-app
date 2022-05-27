const { readAllQuotes } = require("../models/quotesApi")

const BASE_URL = 'http://192.168.137.128:3000/api/v1/quotes'

module.exports = {
    getAllQuotes: (req, res) => {
        readAllQuotes(`${BASE_URL}/`, (err, result) => {
            if (err) {
                throw err;
            }
            return res.render('index', { 
                quotes: result.data[Math.floor(Math.random() * result.data.length)],
                layout: 'layouts/main-layout',
                title: 'Home' 
            });
        });
    }
}