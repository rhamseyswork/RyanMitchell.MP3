import mongoose from 'mongoose';

const newsLetterUserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

const newsLetterUser = mongoose.model('NewsLetterUser', newsLetterUserSchema);

export default newsLetterUser;
