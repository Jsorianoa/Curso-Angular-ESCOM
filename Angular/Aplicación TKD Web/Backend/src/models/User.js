import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new Schema ({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
});

//funcion para encriptar la contraseña
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

//funcion para comparar la contraseña
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema);