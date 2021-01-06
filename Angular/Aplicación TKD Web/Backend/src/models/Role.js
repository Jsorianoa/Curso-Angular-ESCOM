import { Schema, model } from "mongoose";

export const ROLES = ["user", "profesor", "administrador"]
const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
})

export default model('Role', roleSchema);