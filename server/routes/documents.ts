import Router, { NextFunction, Request, Response } from "express";

const router = Router();

const timeLog = (_req: Request, _res: Response, next: NextFunction) => {
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

router.get("/:documentId", (req, res) => {
  res.send(req.params.documentId);
});

router.post("/upload", (_req, res) => {
  res.send("uploading document");
  // create a new document in db
  // create a new ocr task in rabbitmq
});

export default router;
