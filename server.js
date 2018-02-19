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

//Send contact.html when the user access the web
app.get(['/','/index(.html)?$','/home$'], function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/index.html"));
});

/*
  ABOUT Routes
*/

//Send index.html when the user access the web
app.get('/about(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/about.html"));
});

//Send contact.html when the user access the web
app.get('/contact(.html)?$', function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/views/contact.html"));
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
