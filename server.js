const express = require('express');
const app = express();
const port = 3000;

const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Practice",
    password: "postgres",
    port: 5432,
});

const getStudent = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    } finally {
        pool.end();
    }
};

app.get('/row', getStudent);

app.get('/row/name', (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log("Port Listen is 3000");
});
