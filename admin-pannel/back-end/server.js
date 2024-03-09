require('dotenv').config();
const express = require('express');
const app = express();
const authRouter = require('./router/auth-router');
const connectDb = require('./utils/db');

//middleware
app.use(express.json());

//router
app.use('/api/auth', authRouter);

//server
const PORT = 3030;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listinig at ${PORT}`);
  });
});
