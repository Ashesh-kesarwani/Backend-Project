import connectDB from "./db/index.js"


connectDB()


/*
import express from "express"
const app = express()
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
    }
    catch (error){
        console.error("Error is coming during the connection in database", error)
    }
})();
*/