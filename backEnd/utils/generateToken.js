import jwt from 'jsonwebtoken';

const generateToken = (res, userId, geo) => {
    const token = jwt.sign({ userId, geo}, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });

    //set JWT as HTTP-Only cookie
    const generateToken = (res, userId, geo) => {
        const token = jwt.sign({ userId, geo}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
    
        if (typeof res.cookie === 'function') {
            // set JWT as HTTP-Only cookie
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development', // only in production with HTTPS
                sameSite: 'strict', // prevent CSRF attacks
                maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
            });
        } else {
            console.error('res.cookie is not a function');
        }
    }
};

export default generateToken;