import mongoose from "mongoose";

const dbConnect = ()=> {
    try 
    {
    const conn = mongoose.connect("mongodb://localhost:27017/harvestly")
    console.log('Database Connected Successfully');
   }
   catch(error){
    console.log('Database error');
   }
}

export default dbConnect;