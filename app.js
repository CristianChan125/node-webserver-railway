require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Cristian chan',
        titulo: 'Curso node'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Cristian chan',
        titulo: 'Curso node'
    });
})
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Cristian chan',
        titulo: 'Curso node'
    });
})
app.get('*', function (req, res) {
    res.sendfile(__dirname + '/public/404.html');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})