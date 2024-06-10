const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./lib/db');
const users = require('./routes/usersRoutes');
const path = require('path');
const pdfRoutes = require('./routes/pdfRoutes');
const {logger} = require('./middlewares/logger');


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

app.use('/api/users', users);
app.use('/api/pdf', pdfRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const port = process.env.PORT || 8000;

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})