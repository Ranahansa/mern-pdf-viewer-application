const express = require('express');
const cors = require('cors');
const connectDB = require('./lib/db');
const users = require('./routes/users');
const {logger} = require('./middlewares/logger');


const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/users', users);

const port = process.env.PORT || 8000;

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})