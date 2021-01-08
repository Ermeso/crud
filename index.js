// requires
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const moment = require('moment');
const routes = require('./routes/routes');

const app = express();
const port = 8000;

// config handlebars
app.engine('handlebars', handlebars({
    defaultLayout: 'main', 
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', 'handlebars');

// config bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.use('/', routes);

// Config Public
app.use(
    express.static(path.join(__dirname , "public"))
);

// config server
app.listen(port, () => {
    console.log('Server ON!');
});