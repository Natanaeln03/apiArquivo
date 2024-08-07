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
        'INSERT INTO products (name, description, category, price, stock, expiry_date) VALUES (?,?,?,?,?,?)',
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

const updateProductPut = (req, res) => {
    const {id} = req.params;
    const {name, description, category, price, stock, expiry_date} = req.body;
    db.query(
        'UPDATE products SET name=?, description=?, category=?, price=?, stock=?, expiry_date=? WHERE id=?',
        [name, description, category, price, stock, expiry_date, id],
        (err, results) => {
            if(err) {
                console.error('erro ao adicionar produto', err);
                res.status(500).send('erro ao adiconar produto');
                return;
            }
            res.send('produto atualizado com sucesso')
        }
    );
};

const updateProductPatch = (req, res) => {
    const{id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];

    for(const[key,value] of Object.entries(fields)) {
        query.push (`${key} = ?`);
        values.push(value);
    }
    values.push(id);

    db.query(
        `UPDATE products set ${query.join(',')} WHERE id = ?`,
        values,
        (err, results) => {
            if(err) {
                console.error('erro ao adicionar produto', err);
                res.status(500).send('erro ao adicionar produto');
                return;
            }
            res.send('produtos atualizado com sucesso');
        }
        
    );
};

const deleteProduct = (req,res) => {
    const{id} = req.params;
    db.query('DELETE FROM Products WHERE id = ?',[id],
        (err, results) => {
            if(err) {
                console.error('erro ao adicionar produto', err);
                res.status(500).send('erro ao deletar produto');
                return;
            }
            res.send('produto deletado com sucesso');
        }
    );
};

module.exports = {
    getAllProducts,
    addProduct,
    updateProductPut,
    updateProductPatch,
    deleteProduct
};