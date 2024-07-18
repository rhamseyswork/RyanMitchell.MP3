import asyncHandler from '../middleware/asyncHandler.js';
import newsLetterUser from '../models/newsLetterModel.js';
import generateToken from '../utils/generateToken.js';
import geoip from 'geoip-lite';

//@desc Auth news letter profile & get token
//@route POST /api/newsletter/signup
//@access Public
const authNewsLetterProfile = asyncHandler(async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber } = req.body; //validate the form via email and pone#
        if (!firstName || !lastName) return res.status(400).json({ message: 'First name and Last name are required' });
        if (!email) return res.status(400).json({ message: 'Please provide an email and phone number' });
        let user;
        if (email) user = await newsLetterUser.findOne({ email });
        else if (phoneNumber) user = await newsLetterUser.findOne({ phoneNumber });
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const geo = geoip.lookup(ip);
        if (!user) {
            user = await newsLetterUser.create({ firstName, lastName, email, phoneNumber });
            const token = generateToken(user._id, geo);
            return res.status(201).json({
                success: true,
                message: 'User successfully created',
                _id: user._id,
                token
            });
        } else {
            // User exists, ensure they only provided one way of contact
            if (email && user.email !== email) {
                return res.status(400).json({
                    success: false,
                    message: 'Email provided differs from the one in our records. Please contact support to update your newsletter registration.'
                });
            }
            if (phoneNumber && user.phoneNumber !== phoneNumber) {
                return res.status(400).json({
                    success: false,
                    message: 'Phone number provided differs from the one in our records. Please contact support to update your newsletter registration.'
                });
            }
            // Update user information based on the provided contact
        const updatedFields = {};
        if (email) {
            updatedFields.email = email;
        }
        if (phoneNumber) {
            updatedFields.phoneNumber = phoneNumber;
        }

        await newsLetterUser.updateOne({ _id: user._id }, updatedFields);
        const token = generateToken(user._id, geo);
        return res.status(200).json({
            success: true,
            message: 'User information successfully updated',
            data: { _id: user._id },
            token
        });
    }
    } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.toString() });
}
});

//@desc Loggout news letter profile  / clear cookie
//@route POST /api/newsletter/logout
//@access Private
const logoutNewsLetterProfile = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({
        message: 'News Letter Profile Logged out successfully'
    });
});

//@desc Get user profile
//@route GET /api/newsletter/profile
//@access Private
const getNewsLetterProfile = asyncHandler(async (req, res) => {
    const user = await newsLetterUser.findById(req.user._id);
    
    if (user){
        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
        });
    } else {
        res.status(404);
        throw new Error('News Letter Profile not found');
    }
});

//@desc Update news letter profile
//@route PUT /api/newsletter/profile
//@access Private
const updateNewsLetterProfile = asyncHandler(async (req, res) => {
    const user = await newsLetterUser.findById(req.user._id);

    if (user){
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;

        if (req.body.phoneNumber){
            user.phoneNumber = req.body.phoneNumber;
        }

        const updatednewsLetterUser = await user.save();

        res.status(200).json({
            _id: updatednewsLetterUser._id,
            firstName: updatednewsLetterUser.firstName,
            lastName: updatednewsLetterUser.lastName,
            email: updatednewsLetterUser.email,
            phoneNumber: updatednewsLetterUser.phoneNumber,
        });
    } else {
        res.status(404);
        throw new Error('News Letter Profile not found');
    }
});

//@desc Get all news letter profiles
//@route GET /api/newsletter
//@access Private/Admin
const getNewsLetter = asyncHandler(async (req, res) => {
    const users = await newsLetterUser.find({});
    res.status(200).json(users);
});

//@desc Get news letter profile by ID
//@route GET /api/newsletter/:id
//@access Private/Admin
const getNewsLetterProfileByID = asyncHandler(async (req, res) => {
    const user = await newsLetterUser.findById(req.params.id).select('-phoneNumber');

    if (user){
        res.status(200).json(user);
    } else {
        res.status(404);
        throw new Error('News Letter Profile ID not found');
    }
});

//@desc Delete news letter profile
//@route DELETE /api/newsletter/:id
//@access Private/Admin
const deleteNewsLetterProfile = asyncHandler(async (req, res) => {
    const user = await newsLetterUser.findById(req.params.id);

    if (user){
        await user.remove();
        res.status(200).json({ message: 'News Letter Profile deleted successfully' });
    } else {
        res.status(404);
        throw new Error('News Letter Profile not found');
    }
});

//@desc Update news letter profile
//@route PUT /api/newsletter/:id
//@access Private/Admin
const updateNewsLetter = asyncHandler(async (req, res) => {
    const user = await newsLetterUser.findById(req.params.id);

    if (user){
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
        user.phoneNumber = req.body.phoneNumber || user.phoneNumber;

        const updatednewsLetterUser = await user.save();

        res.status(200).json({
            _id: updatednewsLetterUser._id,
            firstName: updatednewsLetterUser.firstName,
            lastName: updatednewsLetterUser.lastName,
            email: updatednewsLetterUser.email,
            phoneNumber: updatednewsLetterUser.phoneNumber,
        });
    } else {
        res.status(404);
        throw new Error('News Letter Profile not found');
    }
});

export {
    authNewsLetterProfile,
    logoutNewsLetterProfile,
    getNewsLetterProfile,
    updateNewsLetterProfile,
    getNewsLetter,
    getNewsLetterProfileByID,
    deleteNewsLetterProfile,
    updateNewsLetter,
};


