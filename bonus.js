const express = require('express');
const app = express();
const port = 3000;

let bugCount=99;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
    <div class="bugdiv">
      <h1 id="bugCount">${bugCount} little bugs in the code</h1>
    </div>
    <div class ="buttondiv">
      <button class="button" onclick="takeOneDown()">Take one down</button>
      <button class="button" onclick="patchItAround()">Patch it around</button>
    </div>
    </body>
    <script>
      let bugCount = 99;

      function takeOneDown() {
        if (bugCount > 0) {
          bugCount--;
        }
        updateBugCount();
      }
      
      function patchItAround() {
        const randomNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
        bugCount += randomNumber;
        updateBugCount();
      }
      
      function updateBugCount() {
        const bugCountElement = document.getElementById('bugCount');
        bugCountElement.innerText = bugCount + " little bugs in the code";
      }
    </script>
    </html>
  `);
});

// Serve the styles.css file with the correct MIME type
app.get('/styles.css', (req, res) => {
  res.set('Content-Type', 'text/css');
  res.sendFile(__dirname + '/styles.css');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});