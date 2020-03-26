const mysql = require("mysql");
const databaseConfig = require("../config/db.config.js");

// Create connection to the database.
const connection = mysql.createConnection({
    host: databaseConfig.HOST,
    user: databaseConfig.USER,
    password: databaseConfig.PASSWORD,
    database: databaseConfig.CATALOGUE
});

// Open the MySQL Connection.
connection.connect(error => {
    if (error) return console.error(`Error Opening Database Connection: ${error.message}`);
    console.info(`Successfully Connected to Database.`);
});

// Export Connection.
module.exports = connection;