const express = require('express');
const app = express();

const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');
const Score = require('./models/scores');
const url =`mongodb://localhost/Score`;
// const url="mongodb://arjun:Asdf@1234!@cluster1-shard-00-00.tu2jy.mongodb.net:27017,cluster1-shard-00-01.tu2jy.mongodb.net:27017,cluster1-shard-00-02.tu2jy.mongodb.net:27017/Score?ssl=true&replicaSet=atlas-ei2m0b-shard-0&authSource=admin&retryWrites=true&w=majority";

app.use(express.static(__dirname+"/public"));

app.use(express.urlencoded({extended: true}));


mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,})

app.set("view engine", "ejs");

app.get('/', (req, res)=>{ 
  
    // The render method takes the name of the HTML 
    // page to be rendered as input 
    // This page should be in the views folder 
    // in the root directory. 
    res.render('Color'); 
      
    }); 
app.post("/score", function( req,res){
    var score = req.body.score
    var newScore = {score:score}
    console.log(score)
    Score.create(newScore, function(err,scoreSaved)
    {
        if(err){
            console.log(err)
        }else{
            res.redirect("/")
        }
    })
})
app.get("/submitScore",function(req,res){
    res.render("form")
})
// app.post('/',async(req, res) => 
// {
//     const ress = new ress({
//         content: req.body.content
//         });
//         try {
//         await ress.save();
//         res.redirect("/");
//         } catch (err) {
//         res.redirect("/");
//         }
// });

app.listen(3000, () => console.log("Server Up") );