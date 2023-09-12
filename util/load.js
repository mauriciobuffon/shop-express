import sequelize from './database.js';

import Product from '../models/product.js';
import User from '../models/user.js';

const productsLoad = [
    { id: undefined, title: "Book 1", price: "9.99", description: "A fabulous book", imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19" },
    { id: undefined, title: "Book 2", price: "19.99", description: "An incredible book", imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f" }
];

sequelize
    .sync({ force: true })
    .then(_ => User.findByPk('buffon'))
    .then(user => {
        if (!user) {
            return User.create({
                login: 'buffon',
                name: 'Mauricio'
            });
        }
        return Promise.resolve(user);
    })
    .then(_ => {
        productsLoad.forEach(p => {
            Product.create({ ...p }, { fields: ['title', 'price', 'imageUrl', 'description'] });
        });
    });
