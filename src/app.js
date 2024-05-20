import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./rotas/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (error) => {
    console.error("Erro ao conectar na database", error);
});

conexao.once("open", () => {
    console.log("Conectado na database");
});

const app = express();
routes(app);

export default app;

