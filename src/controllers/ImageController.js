const database = require('../database/connection')

class ImageController {
    novaImagem(request, response) {

        const {referencia, titulo} = request.body;

        const date = new Date();
        let data_criacao = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

        database.insert({referencia, titulo, data_criacao}).table("imagem").then(data => {
            response.json({message: "Imagem criada com sucesso"});
        }).catch(error=> {
            response.send(400);
        })
    }

    listarImagem(request, response) {
        database.select("*").table("imagem").then(usuarios =>{
            response.json(usuarios);
        }).catch(error => {
            response.send(400);
        })
    }

    buscarImagemPeloID(request, response) {
        const id = request.params
        database.select("*").table("imagem").where({id:id.id}).then(data => {
            response.json(data);
        }).catch(error => {
            response.send(400);
        })
    }

    atualizarImagem(request, response){
        const id = request.params;
        const {referencia, titulo} = request.body;
        
        database.where({id:id.id}).update({referencia:referencia, titulo:titulo}).table("imagem").then(data=>{
            response.json({message:"Imagem atualizado com sucesso"})
        }).catch(error=>{
            response.json(error);
        })
    }
    
    removerImagem(request, response) {
        const id = request.params;

        database.where({id:id.id}).del().table("imagem").then(data=>{
            response.json({message:"Imagem deletada com sucesso"})
        }).catch(error=>{
            response.json(error);
        })
    }
}

module.exports = new ImageController();