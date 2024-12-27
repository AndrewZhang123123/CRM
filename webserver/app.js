console.log('Hello World');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;


//API Security
app.use(helmet());


//handle cors error
app.use(cors());


//parse the request body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//log HTTP requests
app.use(morgan('combined'));


//Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

if (process.env.NODE_ENV !== 'production') {
    const mDb = mongoose.connection;
    mDb.on('open', () => {
        console.log('MongoDB is connected');
    });
    mDb.on('error', (error) => {
        console.log(error);
    });
}


//Load Routes
const userRouter = require('./routers/user-router');
const ticketRouter = require('./routers/ticket-router');


//User Routes
app.use('/v1/users', userRouter);
// app.use('/v1/tickets', ticketRouter);


//Handle Errors
const errorHandler = require('./helpers/errorHandler');
app.use( 
    (req, res, next) => {
        const error = new Error('Resource not found');
        error.status = 404;
        next(error);    
    }
);

app.use(
    (error, req, res, next) => {
       errorHandler(error, res);
    }
);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

