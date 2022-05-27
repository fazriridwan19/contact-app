const { 
    readAll, 
    create, 
    readById, 
    update, 
    deleteData 
} = require('../models/contactsApi')

const BASE_URL = 'http://192.168.137.128:3000/api/v1/contacts'

const getContacts = (req, res) => {
    readAll(`${BASE_URL}/`, (err, result) => {
        if (err) {
            throw err;
        }
        return res.render('contacts', { 
            contacts: result.data, 
            layout: 'layouts/main-layout', 
            title: 'Contacts' 
        });
    });
}

const addContact = (req, res) => {
    create(`${BASE_URL}/`, req.body, (err, result) => {
        console.log(result.message);
        if (err) {
            console.log(err);
            return;
        }
        return res.redirect('/contacts');
    })
}

const getContactsById = (req, res) => {
    const id = req.params.id;
    readById(`${BASE_URL}/${id}`, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.render('edit', { 
            contact: result.data[0], 
            layout: 'layouts/main-layout', 
            title: 'Edit Contact' 
        });
    });
}

const setContactById = (req, res) => {
    update(`${BASE_URL}/`, req.body, (err, result) => {
        console.log(result);
        if (err) {
            console.log(err);
            return;
        }
        return res.redirect('/contacts')
    });
}

const deleteContact = (req, res) => {
    const id = req.params.id;
    deleteData(`${BASE_URL}/${id}`, (err, result) => {
        console.log(result);
        if (err) {
            console.log(err);
            return;
        }
        return res.redirect('/contacts')
    });
}

module.exports = { 
    getContacts, 
    addContact, 
    getContactsById, 
    setContactById, 
    deleteContact 
}