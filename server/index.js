const express = require('express');
const PORT = process.env.PORT || 3001;
const config = require('../client/src/config');
const userRoute = (require('./routes/user'));
const loginRoute = (require('./routes/login'));
const logoutRoute = (require('./routes/logout'));
const oauthCallbackRoute = (require('./routes/oauth-callback'));
const cors = require('cors');
const session = require('express-session');

// configure Express app and install the JSON middleware for parsing JSON bodies
const app = express();
app.use(express.json());

// configure sessions
app.use(session(
  {
    secret: '1234567890',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: 'auto',
      httpOnly: true,
      maxAge: 3600000
    }
  })
);



// https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// use routes
app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/oauth-callback', require('./routes/oauth-callback'));
app.use('/logout', logoutRoute);

// configure CORS
app.use(cors({
  origin: true,
  credentials: true
}));

// use routes
app.use('/user', require('./routes/user'));

// start server
app.listen(config.serverPort, () => console.log(`FusionAuth example app listening on port ${config.serverPort}.`));