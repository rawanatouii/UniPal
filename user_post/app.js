import express from "express";
import * as userPostRoutes from "./routes/user_post.js";
const app = express();

import database from "./services/db.js";

userPostRoutes.register(app);

app.listen(80, () => {
    console.log("Service Started on port 80...")
});