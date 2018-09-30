import { Schema, model } from 'mongoose';

let UserSchema: Schema = new Schema({
    createdAt: Date,
    updatedAt : Date,
    name: {
        type: String,
        default: '',
        required: true
    },
    username: {
        type: String,
        default: '',
        required: true,
        unique: true,
        lowercase: true,
    },
    email : {
        type: String,
        default : '',
        required: true,
        unique: true
    },
    password : {
        type: String,
        default : "",
        required : true
    }
});

export default model('Post', UserSchema);