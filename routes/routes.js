// requires
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const Create = require('../models/create');
const { each } = require('jquery');

// config bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rotas
router.get('/', (req, res) => {
    res.render('index');
})

// inserção de dados
router.post('/create', (req, res) => {
    Create.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }).then(() => {
        res.redirect('/read');
    }).catch((erro) => {
        res.render('index');
        console.log('Erro ao executar a query!');
        console.log(erro);
    });
});

router.get('/read', (req, res) => {
    Create.findAll().then((dados) => {
        res.render('read', {dados: dados});
    });
});

router.get('/delete/:id', (req, res) => {
    Create.destroy({
        where: {
            'id': req.params.id
        }
    }).then(() => {
        res.redirect('/read');
        console.log('Destroy executado com sucesso');
    }).catch((erro) => {
        console.log('Destroy não pode ser executado: ' + erro);
    });
});

router.post('/update', (req, res) => {
    let campo = req.body.campo;
    let mudanca = req.body.mudanca;
    let id = req.body.id;
    if(campo == 'nome') {
        Create.update(
            { nome: mudanca},
            { return : true, where: {id: id }}
        ).then(() => {
            res.redirect('/read')
        }).catch((erro) => {
            res.redirect('/read')
        });
    } else if (campo == 'email') {
        Create.update(
            { email: mudanca},
            { return : true, where: {id: id }}
        ).then(() => {
            res.redirect('/read')
        }).catch((erro) => {
            res.redirect('/read')
        });
    }
});

module.exports = router;