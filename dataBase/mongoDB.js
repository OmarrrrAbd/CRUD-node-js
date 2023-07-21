const mongoose = require('mongoose')

const mongoUri = process.env.Mongo_URI

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect('mongodb+srv://omarabdmouleh98:Ya3tik3asba@cluster0.lkvgglz.mongodb.net/Node-API?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB