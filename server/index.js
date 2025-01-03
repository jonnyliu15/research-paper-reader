import express from "express";
import users from "./routes/users";
import documents from "./routes/documents";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/users", users);

app.use("/documents", documents);
