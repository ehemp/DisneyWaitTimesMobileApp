require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');  // PostgreSQL client
var https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');
//const fs = require('node:fs');

const app = express();
const port = process.env.PORT;

// Middleware
/*app.use(cors({
  origin: 'http://10.0.2.2:8081',
  credentials: true,
}));*/
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
/*const options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
};*/

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.PGADMIN,     
  host: 'localhost',
  database: process.env.USERDB,        
  password: process.env.DBPW,   
  port: process.env.PGPORT              
});

// POST: Register new user
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [username, password]);
    res.send(`User created: ${result.rows[0].username}`);
  } catch (error) {
    console.error('Server.js Error registering user:', error, error.code);
    res.status(500).send(error);
    //return error.code;
  }
});

app.post('/api/signin', async (req, res) => {
  try {

    const checkUser = req.body.username;
    const query = `SELECT * FROM users WHERE username='${checkUser}'`;
    const result = await pool.query(query);
    //console.log("SERVER", result.rows)
    if (result.rows.length === 0) {
        res.send(result.rows)
    }
    else {
        res.json(result.rows);
    }

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send(error);
    //return error;
  }
});

// GET: Fetch all users
app.get('/api/users', async (req, res) => {
  try {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Server error');
  }
});

app.get('/api/test', async (req, res) => {
  try {
    res.json("Hello there");
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/*https.createServer(app).listen(port, () => {
                                          console.log(`Server running on port ${port}`);
                                        });*/
