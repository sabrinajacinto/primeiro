const express = require('express');
const app = express();
const PORT = 3001;

app.get ('/', (req,res)=>{
    res.send('Bem-vindo ao universo dos heróis da Marvel e da DC!');
});
app.get ('/marvel', (req,res)=>{
    res.send('Bem-vindo ao universo dos heróis da Marvel!');
});

app.get ('/dc', (req,res)=>{
    res.send('Bem-vindo ao universo dos heróis da DC!');
});




app.get ('/personagem/:nome', (req,res)=>{
    if(req.params.nome=='hulk'){
        res.send(req.params.nome+'é um herói das Marvel');
    }
    else if(req.params.nome=='Batman'){
        res.send(req.params.nome+' é um herói da dc');
    }
    else if(req.params.nome=="ultron"){
        res.send(req.params.nome+' é um vilão da marvel');
    }
    else if(req.params.nome=="coringa"){
        res.send(req.params.nome+' é um vilão da dc');
    }
    else if(req.params.nome=="wanda"){
        res.send(req.params.nome+' é um herói da marvel');
    }
    else if(req.params.nome=="Superman"){
        res.send(req.params.nome+' é um herói da dc');
    }
    });



app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

