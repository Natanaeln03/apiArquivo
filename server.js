const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./config/db');

const transactionsRoutes = require('./routes/transactions');

const app = express();

