const express = require('express');
const path = require('path');
const nts = require('./notes');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',nts);

app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'/public/index.html')));
app.get('/notes', (req,res )=>res.sendFile(path.join(__dirname,'./public/notes.html')));

app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'/public/404.html')));


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
