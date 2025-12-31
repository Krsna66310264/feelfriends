const path = require('path');
const express = require('express');
const hbs = require('hbs');
const generalRouter = require('./routers/general')
const postsRouter = require('./routers/posts')
const dayjs = require('dayjs');

const { request } = require('http');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.use('/static', express.static('static'));

app.use('/', generalRouter);
app.use('/p', postsRouter );



app.listen(9753, () => {
    console.log('มาค่ะ http://localhost:9753')
});