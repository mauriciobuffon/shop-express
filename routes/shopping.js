import express from 'express';

import controller from '../controllers/shopping.js';

const router = express.Router();

router.get('/list', controller.getAll, (req, res) => {
    res.render('shopping/list', { pageTitle: 'Products list', path: 'shopping/list', products: res.locals.products });
});

router.get('/details/:id(\\d+)', controller.get, (req, res) => {
    res.render('shopping/detail', { pageTitle: 'Product detail', product: res.locals.product });
});

router.get('/cart', (req, res) => {
    res.render('shopping/cart', { pageTitle: 'Shopping cart', path: 'shopping/cart' });
});

router.post('/cart', express.urlencoded({ extended: false }), controller.addCart, (req, res) => {
    res.redirect('/cart');
});

export default router;
