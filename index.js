const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static('public'))
app.use('/api', routes.router);
app.use('/public', express.static('public'));



app.listen(process.env.PORT || 3000);

module.exports = app;