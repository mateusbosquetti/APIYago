const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const ImageController = require('../controllers/ImageController')


router.post('/novoUsuario', UserController.novoUsuario)
router.get('/usuarios', UserController.listarUsuarios)
router.put('/atualizar/usuario/:id', UserController.atualizarUsuario)
router.delete('/deletar/usuario/:id', UserController.removerTarefa)

router.get('/imagens', ImageController.listarImagem);
router.post('/novaImagem', ImageController.novaImagem);
router.put('/atualizar/imagem/:id', ImageController.atualizarImagem);
router.delete('/deletar/imagem/:id', ImageController.removerImagem);

module.exports = router