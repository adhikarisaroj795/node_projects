require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDb = require('./server/config/db');
const app = express();

const PORT = 3000 || process.env.PORT;

//connect to DB
connectDb();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

////Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));
app.listen(PORT, () => {
  console.log(`app is listining on port ${PORT}`);
});