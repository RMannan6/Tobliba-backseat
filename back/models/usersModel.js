import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName:{
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique:true
    },
    walletID: {
        type: String,
        reqiored: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        defualt: false
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User
