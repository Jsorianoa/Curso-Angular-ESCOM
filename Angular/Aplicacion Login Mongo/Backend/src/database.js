const mongoose  = require("mongoose")


mongoose.connect('mongodb://localhost/Angular-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is connect'))
.catch(err => console.log(err));