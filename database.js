const mysql = require("mysql");

const con=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"anand",
    database:"axis"
});
con.connect((err)=>{
    if(err)
    {
        console.warn("error")
    }
    else
    {
        console.warn("connected")
    }
});