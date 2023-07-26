const express = require('express');
const app = express();
require('./database/db.js');
const userRouter = require('./routers/user.router');
const env = require('dotenv');
const bodyParser = require('body-parser');


env.config();
const port = process.env.PORT || 3000;
const userMiddleware = userRouter();

// Middlewares
app.use(
  bodyParser.json({
    limit: '50mb'
  })
);
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
  })
);
app.use(express.json());
app.use(express.urlencoded());
app.use('/user', userMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
