const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const port = 9000;

// Routes
const routerUserCreate = require('./routes/user/create.js');
const routerUserRead = require('./routes/user/read.js');
const routerUserUpdate = require('./routes/user/update.js');
const routerUserDelete = require('./routes/user/delete.js');
const routerEventCreate = require('./routes/event/create.js');
const routerEventRead = require('./routes/event/read.js');
const routerEventUpdate = require('./routes/event/update.js');
const routerEventDelete = require('./routes/event/delete.js');

app.use(routerUserCreate);
app.use(routerUserRead);
app.use(routerUserUpdate);
app.use(routerUserDelete);
app.use(routerEventCreate);
app.use(routerEventRead);
app.use(routerEventUpdate);
app.use(routerEventDelete);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});