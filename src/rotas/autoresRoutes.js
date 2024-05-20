import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listar);
routes.get("/autores/:id", AutorController.listarPorId);
routes.post("/autores", AutorController.cadastrar);
routes.put("/autores/:id", AutorController.atualizar);
routes.delete("/autores/:id", AutorController.excluir);

export default routes;