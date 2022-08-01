import express from 'express';
import dotenv  from "dotenv"
dotenv.config();


const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('/', (req,res,next) =>{
    res.send("hello");
});

//Listen Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on : " + PORT);
})