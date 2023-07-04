var express = require('express');
var app = express();
const hbs = require('hbs')


require('dotenv').config()
const port = process.env.PORT
//Middlewares
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')



app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('Home', {
        nombre: "Oscar Baeza",
        titulo: "potos grandes"
    })
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: "Oscar Baeza",
        titulo: "potos grandes"
    })
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: "Oscar Baeza",
        titulo: "potos grandes"
    })
});
/* app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', function (req, res) {

    res.sendFile(__dirname + '/public/error.html')
}); */

app.listen(port,()=>{

    console.log("Aplicacion corriendo en puerto:" , port)
})