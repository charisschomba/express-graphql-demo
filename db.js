import mongoose from "mongoose";

const db = 'mongodb://localhost:27017/users-auth';

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