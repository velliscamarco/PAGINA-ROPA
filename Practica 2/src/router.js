import express from 'express';
import clothes from './clothesService.js';
import * as router from './router.js';
//import * as clothes from './clothes.js';
//import * as clothes from './clothesService.js';

const router = express.Router();

router.get('/', (_req, res) => { //Pagina inicio
    res.render('index_clothes', { //pagina a renderizar
        clothes: clothes.getClothes()
    });
});


router.clothes('/new', (req, res) => {
    let { title, img, price, description, sizes, colors } = req.body;
    clothesService.addClothes(title, img, price, description, sizes, colors);
    res.render('saved_clothes', {
        title: req.body.title,
        img: req.body.img,
        price: req.body.price,
        description: req.body.description,
        sizes: req.body.sizes,
        colors: req.body.colors,
    });
});

//Obtener la prenda
router.get('/clothes/:id', (req, res) => {
    let clothes = clothes.getClothes(req.params.id);
    res.render('show_clothes', { clothes });
});

//Borrar la prenda
router.get('/clothes/:id/delete', (req, res) => {
    clothes.deleteClothes(req.params.id);
    res.render('delete_Clothes');
});

router.get('/clothes/:id/edit', (req, res) => {
    let clothes = clothes.getClothes(req.params.id);
    res.render('paginaNuevoElemento', { clothes });
});

router.get('/clothes/:id/modify', (req, res) => {
    let { title, img, price, description, sizes, colors } = req.body;
    clothesService.editClothes(title, img, price, description, sizes, colors);
    clothes.addClothes(title, img, price, description, sizes, colors);
    res.render('saved_clothes');
});

console.log(clothes.getClothes()); //Compruebo que se ha añadido correctamente
export default router;