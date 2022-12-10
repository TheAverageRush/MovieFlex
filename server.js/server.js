const cors = require('cors');
const { response } = require('express');
const express = require('express');
const app = express();
const database = require('nedb');
const movieDb = new database({filename: 'database/movie.db', autoload:true});
const path = require('path');


app.use(express.json())

app.post("/sendata",(req,res )=>{
    console.log(req.body)
    const data=req.body
    
    movieDb.insert(data,(err,data)=>{
    console.log('Data has been inserted')
        res.send("Data has been entered into database")
    })
  })

  app.get("/getdata",(req,res )=>{
    res.json({
        movies:movieDb.getAllData()
    })
    
  })
app.delete("/deletedata",(req,res)=>{
    const id = req.body.UserName
    movieDb.remove({UserName:id},(err,success)=>{
        console.log('Data has been deleted')
        movieDb.persistence.compactDatafile()
        res.send("Data has been deleted from database")
    })


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

