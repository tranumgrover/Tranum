
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/projects.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.listen(PORT, () => {
  console.log(`🌐 Website running at: http://localhost:${PORT}`);
});
