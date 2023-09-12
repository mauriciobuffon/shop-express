import { DataTypes } from 'sequelize';
import sequelize from '../util/database.js';

const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DOUBLE, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.STRING
});

export default Product;

/*
class Product {

    constructor(other) {
        this.id = +other.id || undefined;
        this.title = other.title;
        this.price = other.price;
        this.description = other.description;
        this.imageUrl = other.imageUrl;
    }

    static findAll() {
        return database.execute('SELECT * FROM products')
            .then(([rows, meta]) => rows);
    }

    static find(id) {
        return database.execute('SELECT * FROM products WHERE id = ?', [id])
            .then(([[row], meta]) => row);
    }

    static put(product) {
        if (!product.id) {
            database.execute(
                'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
                [product.title, product.price, product.description, product.imageUrl]
            )
                .then(res => console.log('insert', res));
        } else {
            database.execute(
                'UPDATE products SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?',
                [product.title, product.price, product.description, product.imageUrl, product.id]
            )
                .then(res => console.log('update', res))
        }
    }

    static remove(product) {
        const id = +product?.id;
        database.execute('DELETE FROM products WHERE id = ?', [id])
            .then(res => console.log('delete', res));
    }
}
*/
