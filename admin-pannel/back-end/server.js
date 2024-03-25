require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const contactRoute = require('./router/contact-router');
const authRoute = require('./router/auth-router');
const serviceRoute = require('./router/service-router');
const adminRoute = require('./router/admin-router');
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

//handling cors policy
const corsOptions = {
  origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  credentials: true,
};
app.use(cors(corsOptions));

//middleware
app.use(express.json());

//router

app.use('/api/auth', authRoute);

app.use('/api/form', contactRoute);
app.use('/api/data', serviceRoute);

//admin pannel
app.use('/api/admin', adminRoute);

app.use(errorMiddleware);
//server
const PORT = 8080;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listinig at ${PORT}`);
  });
});

//48 sakeyo
