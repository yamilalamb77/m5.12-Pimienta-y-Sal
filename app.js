const express = require('express');
const app = express();
const port = 3030;

app.listen(port, () => {
    console.log(`Servidor corriendo por puerto ${port}`);
})

app.use(express.static("public"));
app.set('view engine', 'ejs');

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter)