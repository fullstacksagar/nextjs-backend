import mongoose from "mongoose";

const connectDB=handler=>async(req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    mongoose.connect('mongodb+srv://sagar:sagar@cluster0.ytrsicw.mongodb.net/?retryWrites=true&w=majority')
    return handler(req,res)
}
export default connectDB