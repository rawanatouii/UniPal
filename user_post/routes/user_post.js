import * as controller from "../controllers/user_post.js";

export function register(app) {
    app.post("/create", controller.Create);
    app.delete("/delete", controller.Delete);
};