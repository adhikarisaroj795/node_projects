const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
console.log(__dirname);

app.set('view engine', 'hbs');

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

//6sakeyo
