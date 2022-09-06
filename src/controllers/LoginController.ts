import { Request, Response } from "express";
import { get, controller, post, bodyValidator } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
            <form method="POST">
            <div>
                <label>Email<label>
                <input name="email" />
            </div>
            <div>
                <label>Password<label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
            </form>
        `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email && password && email === "hi@hi.com" && password === "password") {
      // mark this personas logged in
      req.session = { loggedIn: true };

      console.log("req.session", req.session);
      //redirect them
      res.redirect("/");
    } else {
      res.send("Invalid email or assword");
    }
  }

  @get("/logout")
  logout(req: Request, res: Response) {
    console.log("req.session", req.session);
    req.session = undefined;
    return res.redirect("/");
  }
}
