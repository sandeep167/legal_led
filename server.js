const express = require('express');
const app = express();
const path = require('path');
const config = require('./config'); // Import the config file

app.get('/', (req, res) => {
  // Read your HTML file
  const htmlPath = path.join(__dirname, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Inject the API key into the HTML
  const modifiedHtml = html.replace('YOUR_API_KEY_HERE', config.apiKey);

  // Send the modified HTML as the response
  res.send(modifiedHtml);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

