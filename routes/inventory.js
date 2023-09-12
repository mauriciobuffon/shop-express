import express from 'express';

import controller from '../controllers/inventory.js';

const router = express.Router();

router.get('/list', controller.getAll, (req, res) => {
    res.render('inventory/list', { pageTitle: 'Products list', path: 'inventory/list', products: res.locals?.products });
});

router.get('/edit/:id(\\d+)', controller.get, (req, res) => {
    res.render('inventory/edit', { pageTitle: 'Edit product', path: 'inventory/edit', product: res.locals?.product || {} });
});

router.get('/edit', (req, res) => {
    res.render('inventory/edit', { pageTitle: 'Edit product', path: 'inventory/edit', product: res.locals?.product || {} });
});

router.post('/', express.urlencoded({ extended: false }), controller.save, (req, res) => {
    res.redirect('/');
});

router.post('/delete/:id(\\d+)', controller.remove, (req, res) => {
    res.redirect('/');
});

export default router;
