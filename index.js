const express = require('express');
const app = express();

const middleWareOneFunction = (req, res, next) => {
    console.log('We are in first middleware');
    next();
}

const middleWareTwoFunction = (req, res, next) => {
    console.log('We are in second middleware')
    next();
}

// Since we are using it here for each route with the help of this app.use(middlewareFunction); code snippet, it will be called for each request
app.use(middleWareOneFunction);

app.get('/', middleWareTwoFunction, (req, res) => {
    console.log('inside route')
    res.send('inside the / route');
});

app.get('/first-no-middleware', middleWareOneFunction,(req, res) => {
    console.log('first no middleware route')
    res.send('inside the no middleware route')
})

app.get('/second-no-middleware', middleWareTwoFunction, (req, res) => {
    console.log('second no middleware route')
    res.send('inside the no middleware route')
})

app.listen(3000, () => {
    console.log('Server started')
})