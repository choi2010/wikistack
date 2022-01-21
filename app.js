const express = require("express");
const morgan = require ("morgan");
const path = require ("path");
const layout = require ("./views/layout"); 
const { db, Page, User } = require('./models');
const userRoutes = require ("./routes/users.js");
const wikiRoutes = require ("./routes/wiki.js");

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const app = express(); 


const init = async()=>{
    await db.sync({force: true})

    // await Page.sync();
    // await User.sync(); 
   
    app.listen(3000)
}

app.use(morgan("dev"));
app.use (express.static(path.join(__dirname, "public")))


// app.use('/users', userRoutes);
app.use('/wiki', wikiRoutes);

app.get("/", (req, res)=>{
    res.send(layout("hello")); 
})

init();