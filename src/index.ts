import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoute";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(express.json()); // Middleware para parsear JSON
app.use(cors());

// Rutas
app.get("/", (req, res) => {
  const htmlResponse = `
      <html>
        <head>
          <title>NodeJs y Express en Vercel</title>
        </head>
        <body>
          <h1>Art Gallery Elena BackEnd</h1>
        </body>
      </html>
    `;
  res.send(htmlResponse);
});
app.use("/api/payments", paymentRoutes);

app.options("*", cors());

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
