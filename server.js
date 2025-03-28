const express = require('express');
const app = express();
const port = 3000;

// Addition
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);
  if (isNaN(result)) return res.status(400).json({ error: 'Invalid input' });
  res.json({ result });
});

// Subtraction
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) - parseFloat(num2);
  if (isNaN(result)) return res.status(400).json({ error: 'Invalid input' });
  res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) * parseFloat(num2);
  if (isNaN(result)) return res.status(400).json({ error: 'Invalid input' });
  res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (parseFloat(num2) === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
  const result = parseFloat(num1) / parseFloat(num2);
  if (isNaN(result)) return res.status(400).json({ error: 'Invalid input' });
  res.json({ result });
});

// Power (exponentiation)
app.get('/power', (req, res) => {
  const { num1, num2 } = req.query;
  const result = Math.pow(parseFloat(num1), parseFloat(num2));
  if (isNaN(result)) return res.status(400).json({ error: 'Invalid input' });
  res.json({ result });
});

// Square Root
app.get('/sqrt', (req, res) => {
  const { num } = req.query;
  const result = Math.sqrt(parseFloat(num));
  if (isNaN(result)) return res.status(400).json({ error: 'Invalid input' });
  res.json({ result });
});

// Modulo
app.get('/modulo', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) % parseFloat(num2);
  if (isNaN(result)) return res.status(400).json({ error: 'Invalid input' });
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Calculator microservice is running at http://localhost:${port}`);
});
