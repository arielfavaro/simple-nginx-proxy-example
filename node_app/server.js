const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}`);
})

app.listen(port, () => {
    console.log(`🚀 express app running on ${port}`);
});