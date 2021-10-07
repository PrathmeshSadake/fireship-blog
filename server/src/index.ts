import express from "express";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
