require('dotenv').config();
const express = require('express');
const app = express();
const contactRoute = require('./router/contact-router');
const authRoute = require('./router/auth-router');
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

//middleware
app.use(express.json());

//router

app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);

app.use(errorMiddleware);
//server
const PORT = 3030;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listinig at ${PORT}`);
  });
});
