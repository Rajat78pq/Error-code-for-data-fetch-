const express = require('express');
const app = express();
const port = 3000;

// app.get("/",(req, res)=>{
//     res.send("Hello Future!");
// })




const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Practice",
    password: "postgres",
    port: 5432,
});


// it don't working why?

const getStudent = (req, res) => {
    pool.query('SELECT * FROM students', (err, resl) => {
        if (err) {
            throw err;
        } else {
            res.staus(200).json(resl.rows);
        }
        pool.end();
    });
};
app.get('/row', getStudent);



// comment line is working 

// app.get('/row',(req, res)=>{
// pool.query('SELECT * FROM students', (err, resl)=>{
//     if(err){
//         throw err;
//     }else{
//         res.status(200).json(resl.rows);
//     }
// })
// })



app.get('/row/name', (req, res) => {
    res.send("Hello");
})

app.listen(port, () => {
    console.log("Port Listen is 3000");
})