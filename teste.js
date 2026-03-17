const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    const conteudo = ` <h1>Vai também html</h1>
    <p>mais texto</p>
    <ul><li>item 1</li>
    <li>item 1 </li></ul>
   
    `
     res.send(conteudo);
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});