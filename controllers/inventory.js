import Product from '../models/product.js';

const getAll = (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.locals.products = products;
            next();
        });
};

const get = (req, res, next) => {
    Product.findByPk(+req.params.id)
        .then(product => {
            res.locals.product = product;
            next();
        });
};

const save = (req, res, next) => {
    if (!req.body.id) {
        Product.create({ ...req.body }, { fields: ['title', 'price', 'imageUrl', 'description'] })
            .then(_ => next());
    } else {
        Product.update({ ...req.body }, { where: { id: +req.body.id }, fields: ['title', 'price', 'imageUrl', 'description'] })
            .then(_ => next());
    }
};

const remove = (req, res, next) => {
    Product.destroy({ where: { id: +req.params.id } }).then(_ => next());
};

export default { getAll, get, save, remove };
