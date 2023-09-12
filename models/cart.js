import { DataTypes } from 'sequelize';
import sequelize from '../util/database.js';

const Entity = sequelize.define('Cart', {});

import Product from './product.js';

class Cart {

    constructor() {
        this.products = [];
    }

    addProduct(obj) {
        Product.find(obj.id)
            .then(product => {
                if (!product) {
                    return;
                }

                const alreadyInCart = this.products.find(p => p.id === obj.id);
                if (alreadyInCart) {
                    alreadyInCart.qty++;
                } else {
                    product.qty = 1;
                    this.products.push(product);
                }
            });
    }

    removeProduct(obj) {
        const index = this.products.findIndex(p => p.id === obj.id);
        if (index === -1) {
            return;
        }

        const product = this.products[index];

        if (product.qty > 1) {
            product.qty--;
        } else {
            this.products.splice(index, 1);
        }
    }

    getTotalPrice() {
        return this.products.map(v => v.price).reduce((acc, cur) => acc + cur);
    }
}

const cart = new Cart();

export default cart;
