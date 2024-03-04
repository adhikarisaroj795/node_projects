require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const connectDb = require('./server/config/db');
const MongoStore = require('connect-mongo');
const app = express();

const PORT = 3000 || process.env.PORT;

//connect to DB
connectDb();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    Store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    //cookie: { maxAge: new Date (Date.now() + (3600000))}
    //Date.now() - 30 * 24 *60 *60 *1000
  })
);

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
