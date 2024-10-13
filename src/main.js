const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars')
const morgan = require('morgan');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

//Template Engine
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))