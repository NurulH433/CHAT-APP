import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const protectedRoutes = async (req, res, next) => {

    try {

        const token = req.cookies.token;

        if (!token) {
            return res.status(400).json({
                error: 'Unauthorized - No Token Provided'
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        
        if (!decoded) {
            return res.status(400).json({
                error: 'Unauthorized - Invalid Token'
            })
        }

        const user = await User.findById(decoded.userId).select('-password')

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        
        req.user = user;

        next();

    } catch (error) {
        res.status(400).json({
            message: 'pretected route internal error',
            error: error.message
        })
    }

}

export default protectedRoutes