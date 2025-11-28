require('dotenv').config();
const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const path = require('path');
const mainRouter = require('./routes/mainRouter');
const con = require('./database/db');
const app = express();

// Config

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressEjsLayouts);
app.set('layout', 'layouts/body');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Init
app.use('/', mainRouter);

con.authenticate()
    .then(() => {
        console.log('DB => OKAY');
    })  
    .catch(err => {
        console.error(err);
    });

app.listen(3000, () => {
    console.log('SERVER => OKAY');
});
