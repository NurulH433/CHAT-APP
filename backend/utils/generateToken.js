import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d", // Token will expire in 30 days
    });  

    // Set the token in a cookie   
    res.cookie("token", token, {
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        sameSite: "strict", // Helps prevent CSRF attacks
        maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie will expire in 15 days
    });
    // Return the generated token
    return token;
}

export default generateTokenAndSetCookie;