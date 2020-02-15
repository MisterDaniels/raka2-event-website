require('dotenv').config({
    path: '.env'
})

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'expo',
    define: {
        timestamps: true,
        uderscored: true,
    },

}