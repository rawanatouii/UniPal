import mysql from "mysql2/promise";
const database = await mysql.createConnection({
    host: "127.0.0.1",
    user: "user_post",
    password:"password",
    database: "user_post"
});

await database.ping((err) => {
    console.log("\x1b[31mError: couldn't ping database:", err);
    process.exit(1);
});

export default database;
