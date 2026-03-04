const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //res.send('funcionando');
  res.sendFile(__dirname + '/formulario.html');
});

app.post('/submit', (req, res) => {
   const datos = req.body
   console.log(datos);
 //   res.send('datos recibidos' + JSON.stringify(datos));
 res.redirect('/mostrar')   

});

app.get('/mostrar', (req, res) => {
    let html = 
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});