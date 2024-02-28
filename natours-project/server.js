const dontenv = require('dotenv');
dontenv.config({ path: './config.env' });
const app = require('./app');

console.log(process.env);

const port = 3000;

app.listen(port, () => {
  console.log(`running on the port ${port}`);
});
