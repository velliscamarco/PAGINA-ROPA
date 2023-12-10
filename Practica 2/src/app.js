import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import router from './router.js';

const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

//Configuración de mustache como template engine
app.engine('.mustache', mustacheExpress()); //Extension .mustache
app.set('views', __dirname + '/../views', 'mustache');
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), "html");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));

app.use('/', router); //Asociamos el router a la aplicación

app.listen(3000, () => console.log('Listening on port 3000!'));