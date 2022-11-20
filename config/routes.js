const express = require('express');
const routes = express.Router();


let db = [
    {'1'  : { Nome : 'Joäo José da costa', Idade : '20'}}, 
    { '2' : { Nome : "Maria cavalcante de Oliveira", Idade : '42'}},
    { '3' : { Nome : "Francisco Januario Lima", Idade : '34'}},
    { '4' : { Nome : "Antonio Araujo de Barros", Idade : '51'}}, 
    { '5' : { Nome : 'Roberta Ferreira da Silva' , Idade : '28'}}
]

routes.get('/', (req, res) => {
    return res.json(db);
});

routes.get('/add', (req,res) => {
    const body = req.body ; 

    if(!body){
        return res.status(400).end()
    }

    db.push(body)

    return res.json(body);
});

routes.delete('/:id', (req, res) =>{
    const id = req.params.id; 

    let newDb = db.filter(item => {
        if(!item[id]){
            return item
        }
    })

    return res.send(newDb);
});

routes.put('/:id', (req, res) => {
    const id = req.params.id; 

    let personForUpdate = db[id];
    let newDataForUpdate = req.body; 

    try{

        personForUpdate.Nome = newDataForUpdate.Nome ; 
        personForUpdate.Idade = newDataForUpdate.Idade; 

        return res.status(200).json({message : "Usuário atualizado com sucesso!"})
    }
    catch(error){
        res.status(599).json({error: "Ocorreu algum tipo de problema no sistema!"})
    }


});
module.exports = routes; 