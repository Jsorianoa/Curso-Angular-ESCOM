import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/torneo",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify: true,
    useCreateIndex: true
})

    .then(db=> console.log('DB is connected'))
    .catch(error => console.log(error))