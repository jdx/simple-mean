'use strict';

let express = require('express');
let app     = express();

app.get('/', function (req, res) {
  // render out the angular bootstrap page
  res.render('index.html.ejs');
});

app.use(express.static('public'));

// listen on $PORT or 3000
// this makes the app work on heroku
app.listen(process.env.PORT || 3000);
