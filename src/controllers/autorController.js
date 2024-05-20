import { autor } from "../models/Autor.js";

class AutorController {

    static async listar (req, res) {
        try {
            const lista = await autor.find({});
            res.status(200).json(lista);
        } catch (error) {
            res.status(500).json({
                message : error.message
            });
        }
    };

    static async listarPorId (req, res) {
        try {
            const id = req.params.id;
            const encontrado = await autor.findById(id);
            res.status(200).json(encontrado);
        } catch (error) {
            res.status(500).json({
                message : error.message
            });
        }
    };

    static async atualizar (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Atualizado com sucesso"});
        } catch (error) {
            res.status(500).json({
                message : error.message
            });
        }
    };

    static async excluir (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Deletado com sucesso"});
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    };
    
    static async cadastrar(req, res) { 
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message : "criado com sucesso",
                autor : novoAutor
            });

        } catch (error) {
            res.status(500).json({
                message : error.message
            });
        }
    };
};

export default AutorController;