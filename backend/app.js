const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const mongodb_key = require('./config/default').mongodb_key;

//routers
var indexRouter = require('./routes/index');
var housesRouter = require('./routes/houses.route');  // added


/*
ACAO control. Not necessary for backend development.
Don't know whether it's necessary for frontend to connect with backend
*/
// const frontEndURL = 'whatever the frontend url is'; // for deploy
const frontEndURL = "*";    // for development
let allowCrossDomain = function(req, res, next){
    res.header('Access-Control-Allow-Origin', frontEndURL);
    res.header('Access-Control-Allow-Headers', '*');
    next();
}



//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());


app.use('/', indexRouter);
app.use('/houses', housesRouter); 

//connect mongodb
mongoose
  .connect(mongodb_key, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    console.log("MongoDB connected successfully")
  )
  .catch(err => console.log(err));

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
*/

app.listen(PORT, ()=>{
  console.log(`App running on port ${PORT}...`);
})
