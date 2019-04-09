require('dotenv').config()

import mongoose from "mongoose";

const db = process.env.MONGO_URI;

const  dbConn = () => {
  return mongoose.connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
    .then(() => console.log('Mongodb connected'))
    .catch(error => console.log('Connection to database failed'));
};

export default dbConn;