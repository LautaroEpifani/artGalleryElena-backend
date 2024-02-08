"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const paymentRoute_1 = __importDefault(require("./routes/paymentRoute"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json()); // Middleware para parsear JSON
app.use((0, cors_1.default)());
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
app.use("/api/payments", paymentRoute_1.default);
app.options("*", (0, cors_1.default)());
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map