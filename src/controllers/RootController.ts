import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Access Denied");
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    console.log("req.session", req.session);
    if (req.session && req.session.loggedIn) {
      return res.send(`
            <div>
                <div>You are logged in </div>
                <a href="/auth/logout">Logout</a>
            </div>
          `);
    } else {
      return res.send(`
            <div>
              <div>You are logged out </div>
              <a href="/auth/login">Login</a>
            </div>
          `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Welcome to Protected Route Logged in User");
  }
}
