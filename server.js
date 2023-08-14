
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
    <link rel="stylesheet" href="/styles.css">
      <title>99 Bottles of Beer</title>
    </head>
    <body>
    <div class="bugdiv">
      <h1>99 Bottles of Beer on the Wall</h1>
      <a href="/98">Take one down, pass it around</a>
      </div>
    </body>
    </html>
  `);
});

app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);
  let link = '';

  if (numberOfBottles > 0) {
    link = `<a href="/${numberOfBottles - 1}">Take one down, pass it around</a>`;
  }

  res.send(`
    <html>
    <head>
    <link rel="stylesheet" href="/styles.css">
      <title>${numberOfBottles} Bottles of Beer</title>
    </head>
    <body>
    <div class="bugdiv">
      <h1>${numberOfBottles} Bottles of Beer on the Wall</h1>
      ${link}
      </div>
      <br/>
      <a href="/">Start Over</a>
    </body>
    </html>
  `);
});


app.get('/styles.css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.sendFile(__dirname + '/styles.css');
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});






//---------------------------------------------------------------------------------------------------------------------------------------------








// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send(`
//     <h1>99 Bottles of Beer on the Wall</h1>
//     <a href="/98">Take one down, pass it around</a>
//   `);
// });

// app.get('/:number_of_bottles', (req, res) => {
//   const numberOfBottles = parseInt(req.params.number_of_bottles);
//   let link = '';

//   if (numberOfBottles > 0) {
//     link = `<a href="/${numberOfBottles - 1}">Take one down, pass it around</a>`;
//   }

//   res.send(`
//     <h1>${numberOfBottles} Bottles of Beer on the Wall</h1>
//     ${link}
//     <br/>
//     <a href="/">Start Over</a>
//   `);
// });
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//-------------------------------------------------------------------------------------------------------------------

//bonus
// let bugCount = 99;

// app.get('/', (req, res) => {
//   res.send(`
//     <html>
//     <head>
//       <link rel="stylesheet" href="/styles.css">
//     </head>
//     <body>
//       <h1>${bugCount} little bugs in the code</h1>
//       <button class="button" onclick="takeOneDown()">Take one down</button>
//       <button class="button" onclick="patchItAround()">Patch it around</button>
//     </body>
//     <script>
//       function takeOneDown() {
//         if (bugCount > 0) {
//           bugCount--;
//           updateBugCount();
//         }
//       }
      
//       function patchItAround() {
//         bugCount++;
//         updateBugCount();
//       }
      
//       function updateBugCount() {
//         const bugCountElement = document.getElementById('bugCount');
//         bugCountElement.innerText = bugCount;
//       }
//     </script>
//     </html>
//   `);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//-------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();
// // const path = require('path');
// const port = 3000;

// // const stylesPath = path.join(__dirname, 'styles.css');

// app.get('/', (req, res) => {
//   res.send(`
//     <html>
//     <head>
//       <link rel="stylesheet" href="/styles.css">
//     </head>
//     <body>
//       <h1>99 Bottles of Beer on the Wall</h1>

//       <button class="button" onclick="window.location.href='/98'">Take one down, pass it around</button>
//     </body>
//     </html>
//   `);
// });

// app.get('/:number_of_bottles', (req, res) => {
//   const numberOfBottles = parseInt(req.params.number_of_bottles);
//   let link = '';

//   if (numberOfBottles > 0) {
//     link = `<a href="/${numberOfBottles - 1}">Take one down, pass it around</a>`;
//   }

//   if (numberOfBottles > 0) {
//     link = `<button class="button" onclick="window.location.href='/${numberOfBottles - 1}'">Take one down, pass it around</button>`;
//   }

//   res.send(`
//     <html>
//     <head>
//       <link rel="stylesheet" href="/styles.css">
//     </head>
//     <body>
//       <h1 className="bottles">${numberOfBottles} Bottles of Beer on the Wall</h1>
//       ${link}
//       <br/>
    
// <button class="button" onclick="window.location.href='/'">Start Over</button>
//     </body>
//     </html>
//   `);
// });

// // app.get('/styles.css', (req, res) => {
// //   res.sendFile(stylesPath);
// // });
// app.get('/styles.css', (req, res) => {
//     res.set('Content-Type', 'text/css');
//     res.sendFile(__dirname + '/styles.css');
//   });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//------------------------------------------------------------------------------------------------------------------------------
// const express = require("express")

// const bodyParser = require("body-parser")

// const server = express()
// const PORT = process.env.PORT || 3000

// server.use(express.json())
// server.use(bodyParser.json())


// server.get("/", (req, res)=>{
//     let counter = 99
//     res.status(200).json({message: `${counter} Bottles of beer on the wall`})
//     // next()
// })

// server.get("/multiple/:bottleNumber", (req, res)=>{
//     let counter = 99 - 1
//     let bottleNumber = req.params.bottleNumber
    
//     let numberBottles = bottles(bottleNumber)
//     res.status(200).json({message: numberBottles, link: `localhost:3000/${bottleNumber-1}`})
// })

// function bottles (num) {
//     let numberBottles = []
//     // let bottles = bottles
//     for(let counter = num; counter >= 1; counter--) 
//     {
//         // if (counter == 1) {
//         //     bottles = 'bottle';
//         // }
//         numberBottles.push(counter + " bottles of beer on the wall. " + counter + " bottles of beer. Take one down. Pass It Around." + (counter-1) + " bottles of beer on the wall" )
//     }
//     return numberBottles
// }

// server.get("/single/:singleNumber", (req, res)=>{
//     let counter = 99 - 1
//     let singleNumber = req.params.singleNumber
//     res.status(200).json({message: singleNumber + " bottles of beer on the wall. " + singleNumber + " bottles of beer. Take one down. Pass It Around." + (singleNumber-1) + " bottles of beer on the wall", link: `localhost:3000/${singleNumber-1}`
//     })
// })

// server.listen(PORT, ()=>{
//     console.log(`Server is listening at: ${PORT}`)
// })