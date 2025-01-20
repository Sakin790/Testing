import express from "express";
import { router } from "./routes/userRouter";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/api/v1", router);

app.get("/hello", (req, res) => {
  res.status(200).send({ message: "Hello World!" });
});

app.listen(port, async () => console.info(`Server is listening on ${port}`));

export { app };
