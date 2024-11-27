const database = require('../database/connection')

class UserController {
    novoUsuario(request, response) {

        const {nome} = request.body;

        const date = new Date();
        let data_criacao = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

        database.insert({nome, data_criacao}).table("usuario").then(data=>{
            console.log(data);
            response.json({message: "Usuario criado com sucesso"})
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
        console.log("ID "+id);
        const {nome} = request.body;
        console.log("NOME "+nome);

        database.where({id:id}).update({nome:nome}).table("usuario").then(data=>{
            response.json({message:"Usuário atualizado com sucesso"})
        }).catch(error=>{
            response.json(error);
        })
    }

    removerTarefa(request, response){
        const id = request.params;
        //O ERRO É NO SEGUNDO ID
        //ele nao consegue verificar porque o id é um objeto
        database.where({id:id}).del().table("usuario").then(data=>{
            response.json({message:"Usuario removido com sucesso"})
        }).catch(error=>{
            response.json(error);
        })
    }
}

module.exports = new UserController();