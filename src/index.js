import mysql from 'mysql';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MVEHC_SQL_PASSWORD
});

db.connect(async function(err) {
    if (err) throw err;
    console.log("Connected!");
    await db.query("CREATE DATABASE users");
});