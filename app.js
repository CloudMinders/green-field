const express = require('express');
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

app.use('*', (req, res, next) => {
  console.log(`${req.method} request received for ${req.originalUrl}`);
  next();
});

//parsing middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/static', express.static(path.join(__dirname, 'node_modules', 'angular')));
app.use(express.static(path.join(__dirname, 'client')));

app.use(session({ secret: "conanTheLibrarian",
                  savedUninitialized: true,
                  resave: true 
}));
app.use(passport.initialize());
app.use(passport.session());




app.use('/', routes);

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});

