// import mysql from 'mysql2';

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'app',
//     database: 'shop',
//     password: 'app-secret'
// });

// export default pool.promise();

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('shop', 'app', 'app-secret', {
    host: 'localhost',
    dialect: 'mariadb',
    define: {
        freezeTableName: true,
        timestamps: false
    }
});

export default sequelize;
