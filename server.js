const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Server start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
