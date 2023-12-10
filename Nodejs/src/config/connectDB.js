const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('huuloi', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connect Successfully');
    } catch (error) {
        console.log('Connect failed', error);
    }
}

module.exports = connectDB;