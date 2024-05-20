import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/" : "Curso de Node.js",
    "/livros" : "",
    "/autores" : "",
};

app.listen(PORT, () => {
   console.log("Servidor Escutando");
});

