import express from 'express';
import * as boardService from './boardService.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        clothes: clothes.getClothes()
    });
});


router.post('/clothes/new', (req, res) => {
    let { title, img, price, description, sizes, colors } = req.body;

    res.render('saved_clothes');
});

router.get('/clothes/:id', (req, res) => {

    let clothes = clothes.getClothes(req.params.id);

    res.render('show_clothes', { clothes });
});

router.get('/clothes/:id/delete', (req, res) => {

    clothes.deleteClothes(req.params.id);

    res.render('deleted_clothes');
});

export default router;