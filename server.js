const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection configuration
const dbConfig = {
  host: 'jdbc:oracle:thin:@172.17.9.63:1521:xe',
  user: 'das21011',
  password: 'goodluck',
  database: 'mlms',
};

// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle form submissions
app.post('/submitForm', (req, res) => {
  try {
    // Parse form data (assuming you are using a form POST request)
    // Access form fields using req.body.fieldName
    const username = req.body.Username;
    const email = req.body.Email;
    const password = req.body.Password;

    // Use the connection pool to execute a SQL INSERT statement
    pool.query(
      'INSERT INTO UserDetails (Username, Email, Password) VALUES (?, ?, ?)',
      [username, email, password],
      (error, results) => {
        if (error) {
          console.error('Error:', error.message);
          res.status(500).send('Internal Server Error');
        } else {
          // Send a success response
          res.status(200).send('Information entered successfully!');
        }
      }
    );
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
