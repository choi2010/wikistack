const express = require ('express');
const router = express.Router(); 
const addPage = require('../views/addPage.js')

router.get('/', async ( req, res, next )=>{
    res.send("got to GET /wiki/")

})

router.post('/', async ( req, res, next )=>{
    res.send("got to POST /wiki/")

})

router.get('/add',  ( req, res )=>{
    res.send(addPage());

})
module.exports = router; 