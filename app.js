const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
// link router
const homeRouter =  require('./server/routes/home');
const productRouter =  require('./server/routes/product');

const app = express()
const port = 5000
// express-handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
// config router
app.use('', homeRouter);
app.use('', productRouter);
// config path
app.set('views', path.join(__dirname, '/client/views/'));
app.use(express.static(__dirname + '/client/public/'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})