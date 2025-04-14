import mongoose from "mongoose";

async function connectDB()
{
    /*try{
        /*const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`the connection to db is: ${connection.connection.host}`);
        return connection;
        const conn = await mongoose.connect('mongodb://localhost:27017/TaskManagement', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

    }catch(error)
    {
        //process.exit(1);
        console.log("Error connecting to database" + error);
        process.exit(1);
    }*/

        mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB connected successfully"))
        .catch((err) => console.error("MongoDB connection error:", err));
}

export { connectDB };
