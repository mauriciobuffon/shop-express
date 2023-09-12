import Product from '../models/product.js';
import cart from '../models/cart.js';

const getAll = (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.locals.products = products;
            next();
        })
};

const get = (req, res, next) => {
    Product.find(+req.params.id)
        .then(product => {
            res.locals.product = product;
            next();
        });
};

const getCart = (req, res, next) => {
    res.render('shopping/cart', { pageTitle: 'Your cart', cart });
    next();
};

const addCart = (req, res, next) => {
    const productId = +req.body.productId;
    Product.find(productId)
        .then(product => {
            if (product) {
                cart.addProduct(product);
            }
            next();

        });
};

export default { getAll, get, addCart };
