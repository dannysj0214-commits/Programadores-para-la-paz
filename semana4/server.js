const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('<h1>Servidor funcionando correctamente</h1>');
    console.log('Alguien visitó el servidor');
});

app.listen(port, () => {
    console.log(`✅ Servidor ejecutándose en http://localhost:${port}`);
});