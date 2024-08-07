const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./config/db');

const productsRoutes = require('./routes/products');

const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 


app.use('/api/products', productsRoutes);


app.get('/', (req, res) => {
    res.send(`Servidor está rodando na porta ${PORT}`); 
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`); 
});