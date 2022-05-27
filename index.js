const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const { 
    getContacts, 
    addContact, 
    getContactsById, 
    setContactById, 
    deleteContact 
} = require('./controllers/contactsApiController');
const { getAllQuotes } = require('./controllers/quotesApiController');

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(morgan('dev'));
app.use(methodOverride('_method'));

app.get('/', getAllQuotes);

app.get('/about', (req, res) => {
    res.render('about', { 
        layout: 'layouts/main-layout', 
        nama: "Fazri Ridwan", 
        title: 'About' 
    })
});

app.post('/contact/addContact', addContact);
app.get('/contacts', getContacts);
app.get('/contacts/:id', getContactsById);
app.patch('/contact/setContact/:id', setContactById);
app.delete('/contact/delete/:id', deleteContact);


app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Not Found 404 !</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});