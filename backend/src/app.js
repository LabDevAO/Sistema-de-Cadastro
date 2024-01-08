import express from 'express';
const app = express();
const port = 8080;

///configuracoes do express///
app.use(express.json());    

//servidor/////
////////////
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});/////////
//servidor//



//rotas get e post
app.get("/", (req, res)=>{
    res.send("olla mundo!")
})
app.get("/teste", (req, res)=>{
    const data = {
        nome: "Moises",
        idade: 22,
        morada: "Avenida Brasil Luanda..."

    }
    res.status(200).send(data)
})


app.post("/teste", (req, res)=>{
   let data = req.body;
   res.status(201).send("olla mundo");
})
