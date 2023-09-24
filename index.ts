import express from "express";
import router from "./src/routes";

// app.use(express.json());

// app.get("/", (req: Request, res: Response): Response => {
//   return res.status(200).json({ message: "Gagal biasa menyerah jangan" });
// });

// app.get("/todos", (req: Request, res: Response): Response => {
//   return res.status(200).json({ data: Todos });
// });

// app.get("/todos/:id", (req: Request, res: Response): Response => {
//   const { id } = req.params;
//   const data = Todos.find((data) => data.id === parseInt(id));

//   return res.status(200).json(data);
// });

// app.post("/todos", (req: Request, res: Response): Response => {
//   const data: ITodos = req.body;
//   Todos.push(data);

//   return res.status(200).json(data);
// });

// app.delete("/todo/:id", (req: Request, res: Response): Response => {
//   const { id } = req.params;
//   const data: ITodos[] = Todos.filter((todo) => todo.id !== parseInt(id));

//   return res.status(200).json(data);
// });

async function start(): Promise<void> {
  try {
    const app = express();
    const PORT = 5000;

    app.use(express.json());
    app.use("/api/v1", router);

    app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

void start();
