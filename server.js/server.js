const cors = require('cors');
const express = require('express');
const app = express();
const database = require('nedb');
const movieDb = new database({filename: 'database/movie.db', autoload:true});
const path = require('path');


app.use(express.json())

app.post("/sendata",(req,res )=>{
    console.log(req.body)
    res.send("Data has been entered into database")
  
  })

app.get("/Database",(req,res )=>{
    console.log('Database')
    res.send("Data has been entered into database")
  
  })

  
app.use(express.static(path.join(__dirname, "./static")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(
      __dirname,
      "static",
      "index.html"
    ));
  });


app.use(cors({
    origin:['*']
}))

 

app.listen(1337,()=>{
console.log('Node server is responding')

})

