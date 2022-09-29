import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


app.get("/main",(req, res)=>{
    return(
        res.send("Hello")
    )

});

app.get("/software", (req,res)=> {
    return(
        res.send("Here's some software i've worked on")
    )
})

app.get("/photography", (req,res)=> {
    return(
        res.send("Look at these pictures of Norway I took")
    )
})

app.get("/music", (req,res)=> {
    return(
        res.send("Music will be uploaded soon")
    )
})


export const api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
