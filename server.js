/* eslint-disable no-undef */
/********************************************************************************
*  WEB322 – Assignment 03
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: ___________Bhuwan Bhusal___________ Student ID: ____147355234__________ Date: ___2024/10/11___________
*
********************************************************************************/



const legoData = require("./modules/legoSets");

const express = require('express');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.send('Assignment 2:  Bhuwan Bhusal - 147355234');
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/lego/sets', (req, res) => {

  const theme = req.query.theme;
  if(theme){


    legoData.getSetsByTheme(theme)
    .then(sets => {
      res.json(sets);
    })
    .catch(error => {
      res.status(404).send('Error: Failed to get all sets.');
    });

  }
  else {
  legoData.getAllSets()
    .then(sets => {
      res.json(sets);
    })
    .catch(error => {
      res.status(404).send('Error: Failed to get all sets.');
    });
  }
});

app.get('/lego/sets/:set_num', (req, res) => {
  
  let num = req.params.set_num;

  legoData.getSetByNum(num)
    .then(sets => {
      res.json(sets);
    })
    .catch(error => {
      res.status(404).send('Error: Failed to get all sets.');
    });
});

app.use((req, res, next) => {
  res.sendFile(__dirname + '/views/404.html');
});

legoData.initialize().then(()=>{
  app.listen(HTTP_PORT, () => { console.log(`server listening on: ${HTTP_PORT}`) });
});