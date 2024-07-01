import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import UserRoutes from "./routes/user.routes";

AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(bodyParser.json());

    // Mount the user routes at /users
    app.use("/users", UserRoutes);

    app.use("*", (req, res) => {
        res.send("404 Page Not Found");
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Express server has started on port ${port}. Open http://localhost:${port}/users to see results`);
    });
}).catch(error => console.log(error));