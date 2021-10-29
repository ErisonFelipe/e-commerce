import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/produtos', (req, res)=>{
    res.send(data.produtos);
});

app.get('/', (req, res) => {
    res.send("Servidor ligado!");
});

const port = process.env.PORT || 3030;

app.listen(port, ()=>{
    console.log(`Servidor na porta http://localhost:${port}`);
});