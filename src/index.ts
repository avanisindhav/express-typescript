import express, { Request, Response } from "express";
// import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

// import { router as controllerRouter } from './controllers/decorators/controller';
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //body property
app.use(cookieSession({ keys: ["laskdfg"] }));
//

// app.use(router);
app.use(AppRouter.getInstance());

app.listen(1234, () => {
  console.log("Listing On port 1234");
});
