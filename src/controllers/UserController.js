const database = require('../database/connection')

class UserController {
    novoUsuario(request, response) {

        const {nome} = request.body;

        const date = new Date();
        let data_criacao = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

        database.insert({nome, data_criacao}).table("usuario").then(data=>{
            console.log(data);
            response.send(201);
        }).catch(error=>{
            console.log(error)
            response.send(400);
        })
    }

    listarUsuarios(request, response) {
        database.select("*").table("usuario").then(usuarios=>{
            console.log(usuarios);
            response.json(usuarios);
        }).catch(error => {
            console.log(error);
        })
    }

    atualizarUsuario(request, response) {
        const id = request.params;
        const {nome} = request.body;
        database.where({id:id.id}).update({nome:nome}).table("usuario").then(data=>{
            response.json({message:"Usuário atualizado com sucesso"})
        }).catch(error=>{
            response.json(error);
        })
    }

    removerTarefa(request, response){
        const id = request.params;

        database.where({id:id.id}).del().table("usuario").then(data=>{
            response.json({message:"Usuario removido com sucesso"})
        }).catch(error=>{
            response.json(error);
        })
    }
}

module.exports = new UserController();