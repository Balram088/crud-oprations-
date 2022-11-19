const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const mysql= require("mysql2");
const cors = require("cors");

 const db =  mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Root@123",
    database:"crud_contect"
 });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get ("/api/get", (req,res) =>{
    const sqlGet ="SELECT * FROM contact_db"
    db.query(sqlGet, (error,result) =>{
        res.send(result)
    });
});

app.get("/", (req,res) =>{
    // const sqlInsert =
    // "INSERT INTO contact_db (name, email) VALUES ('Balram', 'bp@gmail.com')";
    // db.query(sqlInsert, (error , result) => {
    //   console.log("error", error);
    //   console.log("result", result);
    //   res.send("hello react");
    // });
   
});

app.listen(5000, () => {
    console.log("server is running on port 5000");

})