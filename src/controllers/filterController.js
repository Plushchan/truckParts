const Filter = require("../database/models/Filter");

module.exports = {
    createG: (req, res) => {
        res.render('filterCreate', {
            title: 'Cadastro de Filtro',
            script: '/js/filterCreate.js'
        })
    },
    createP: (req, res) => {
        const name = req.body.name;
        
        Filter.create({
            name: name,
        })
            .then(() => {
                console.log('Filter criado com sucesso!');
            })
            .catch(err => {
                console.error(err);
            });
    }
};