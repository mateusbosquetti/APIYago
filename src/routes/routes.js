const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/novoUsuario', UserController.novoUsuario)
router.get('/usuarios', UserController.listarUsuarios)
router.put('/atualizar/usuario/:id', UserController.atualizarUsuario)
router.delete('/deletar/usuario/:id', UserController.removerTarefa)

module.exports = router