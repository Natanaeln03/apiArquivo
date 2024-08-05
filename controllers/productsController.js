const db = require('../config/db');


const getAllProducts = (req, res) => {
    db.query('select * from products', (err, results) => {
        if(err){
            console.error('Erro ao obter produtos:', err)
            res.status(500).send('Erro ao obter produtos');
            return;
        }
        res.json(results);
    });
};

const addProduct = (req, res) => {
    const {name, description, category, price, stock, expiry_date} = req.body;
    db.query(
        'INSERT INTO products (name, description, category, price, stock, expiry_date) VALUES',
        [name, description, category, price, stock, expiry_date],
        (err,results) => {
            if(err) {
                console.error('erro ao adicionar produtos', err);
                res.status(500).send('erro ao adicionar produtos');
                return;
            }
            res.status(201).send('produtos adicionar com sucesso');
        }
    );
};

module.exports = {
    getAllProducts,
    addProduct
};