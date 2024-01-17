import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './src/dirname.js';
import router from './router.js';

const app = express();

//Configuración de mustache como template engine
app.engine('.mustache', mustacheExpress()); //Extension .mustache
app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), "html");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));



app.use('/', router);
app.listen(3000, () => console.log('Listening on port 3000!')); //Confirma que funciona

