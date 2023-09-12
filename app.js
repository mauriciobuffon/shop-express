import express from 'express';

import sequelize from './util/database.js';
import {} from './util/load.js';
import User from './models/user.js';

import inventoryRoutes from './routes/inventory.js';
import shoppingRoutes from './routes/shopping.js';

const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use((req, res, next) => {
    return User.findByPk('buffon')
        .then(user => {
            req.locals = { ...req.locals, user };
            next();
        })
});

app.use('/inventory', inventoryRoutes);
app.use('/shopping', shoppingRoutes);

app.get('/', (req, res) => {
    res.render('index', { pageTitle: "Awsome bookstore" });
});

sequelize
    .authenticate()
    .then(_ => {
        app.listen(port, () => console.log(`Server listening on port ${port}`));
    });
