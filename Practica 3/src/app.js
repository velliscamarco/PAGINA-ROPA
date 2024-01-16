import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import router from './router.js';

const app = express();

//Configuración de mustache como template engine
app.engine('.mustache', mustacheExpress()); //Extension .mustache
app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), "html");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.get('/', router); //Asociamos el router a la aplicación
app.get('/new-element', router);
app.get('/clothes/:id', router);
app.get('/clothes/:id/modify', router);
app.get('/clothes/:id/delete', router);
app.get('/error', router);


app.post('/new', router);
app.post('/:id/modify', router);

app.listen(3000, () => console.log('Listening on port 3000!')); //Confirma que funciona

