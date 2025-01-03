import Router, { NextFunction, Request, Response } from "express";

const router = Router();

const timeLog = (_req: Request, _res: Response, next: NextFunction) => {
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

router.get("/me", (_req, res) => {
  res.send("My profile");
});

router.post("/login", (_req, res) => {
  res.send("Login");
});

export default router;
