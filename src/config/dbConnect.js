import mongoose from "mongoose";

const dbConnect = (uri, callback) => {
    if(mongoose.connection.readyState >= 1){
        return
    }

    mongoose.connect(process.env.DB_URL)
        .then(con => console.log('Db connect'));
}

export default dbConnect;
