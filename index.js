const express = require('express');
const app = express();

const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');
const Score = require('./models/scores');
//const url =`mongodb://localhost/Score`;
const url="mongodb+srv://arjun:graphqldb@score.bl9ed.mongodb.net/Score?retryWrites=true&w=majority";
const uri = process.env.MONGODB_URI;
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
let port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server Up") );