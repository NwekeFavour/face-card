const mongoose = require("mongoose")
con
const connectDB = async () =>{
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`connection with database successful: ${connect.connection.host}`)
    } catch (error) {
        console.error(e);   
    }
}


export default connectDB;