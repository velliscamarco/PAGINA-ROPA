import express from 'express';
import {
    clothes, getClothe, getClothes, deleteClothes, addClothes,
    addcoment, colors, loadSampleData,
} from './clothesService.js';
import { loadMore } from './public/app.js';
import checkForm from './src/checkForm.js';
import e from 'express';

const router = express.Router();
let errors = [];

router.get('/', (_req, res) => { //Pagina inici
    const clothesValues = getClothes(0, 3);
    errors = [];
    res.render('index', { //pagina a renderizar
        clothes: clothesValues
    });
});

router.get('/error', (_req, res) => {
    res.render('error', { errors });
});

router.get('/new-element', (_req, res) => {
    const route = '/new';
    res.render('paginaNuevoElemento', { route, colors });
});

router.post('/new', (req, res) => {

    let colors = [];

    errors = checkForm(req.body);

    if (errors.length > 0) res.redirect('/error')
    else {
        const id = clothes.size;
        if (req.body.Rojo) colors.push('Rojo');
        if (req.body.Azul) colors.push('Azul');
        if (req.body.Verde) colors.push('Verde');
        if (req.body.Amarillo) colors.push('Amarillo');
        if (req.body.Gris) colors.push('Gris');
        if (req.body.Rosa) colors.push('Rosa');
        if (req.body.Morado) colors.push('Morado');

        // const colors = req.body.
        clothes.set(`${id}`, { ...req.body, id, colors });

        res.redirect(`/clothes/${id}`)
    }

});

router.post('/:id/modify', (req, res) => {

    errors = checkForm(req.body);

    if (errors.length > 0) res.redirect('/error')
    else {
        const id = req.params.id;
        clothes.set(`${id}`, { ...req.body, id });

        res.redirect(`/clothes/${id}`)

    }
});

//Obtener la prenda
router.get('/clothes/:id', (req, res) => {
    const id = req.params.id;
    let clothe = clothes.get(id);
    res.render('show_clothes', { ...clothe });
});

//Borrar la prenda
router.get('/clothes/:id/delete', (req, res) => {
    const id = req.params.id;
    clothes.delete(id);
    res.redirect('/');
});

router.get('/clothes/:id/modify', (req, res) => {
    const id = req.params.id;
    const route = `/${id}/modify`;
    let clothe = clothes.get(id);

    colors.forEach(color => {
        if (clothe.colors.includes(color.color)) {
            color.checked = "checked";
        }
    });

    res.render('paginaNuevoElemento', { ...clothe, id, route, colors });
});


//ruta para añadir comentarios
router.get('/clothes/:id/comments', (req, res) => {
    const id = req.params.id;
    let clothe = getClothes(id);
    res.render('comments', { ...clothe });
});

export default router;