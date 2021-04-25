const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const menuRouter = require('./routes/menu');
const recipieRouter = require('./routes/recipie');
const userRouter = require('./routes/user');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());
app.disable('x-powered-by')

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Database connection established succesfully")
}
);

app.use(cookieParser());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Origin', 'https://aditmehta.com');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Content-Length, X-Requested-With');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.sendStatus(200);
    }
    else {
    //move on
      next();
    }
});

app.use('/admin/menu/', menuRouter);
app.use('/admin/recipie/', recipieRouter); 
app.use('/admin/', userRouter); 


app.listen(port, () => {
    console.log('Server is running on port: $(port)');
});

