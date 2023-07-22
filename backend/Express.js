// backend/Express.js

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the AI agent talent agency platform!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});