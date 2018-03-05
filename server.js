var path = require("path"),
    express = require("express");

var DIST_DIR = path.join(__dirname, "dist"),
    PORT = 3000,
    app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

/*
  INDEX Routes
*/

//Send index.html when the user access the web
app.get(['/','/index(.html)?$','/home$'], function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/index.html"));
});

/*
  ABOUT Routes
*/

//Send about.html when the user access the web
app.get('/about(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/about.html"));
});

//Send contact.html when the user access the web
app.get('/contact(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/contact.html"));
});

//Send support.html when the user access the web
app.get('/support(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/support.html"));
});

//Send login.html when the user access the web
app.get('/login(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/login.html"));
});

//Send signup.html when the user access the web
app.get('/signup(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/signup.html"));
});

//Send dashboard.html when the user access the web
app.get('/dashboard(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/dashboard.html"));
});

//Send search.html when the user access the web
app.get('/search(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/search.html"));
});

//Send request.html when the user access the web
app.get('/request(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/request.html"));
});

//Send message.html when the user access the web
app.get('/message(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/message.html"));
});


/*
  ERROR CATCHING
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT);
