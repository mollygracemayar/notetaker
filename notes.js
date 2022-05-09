const nts = require('express').Router();
const { text } = require('express');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('./helpers/fsUtils');

nts.get('/notes', (req, res) => readFromFile('./db/db.json').then((data) => {
    console.log(data);
    res.json(JSON.parse(data))}));

nts.post('/notes', (req, res) => {
    const {
        title,
        text
    } = req.body;

    if (title && text) { 
       
       
       
       
       
        const newNotes = { title, text }
        readAndAppend(newNotes, './db/db.json');

        const response = {
            status: 'success',
            body: newNotes,
        };

        res.json(response);
    } else {
        res.json('error')
    }
});

module.exports = nts