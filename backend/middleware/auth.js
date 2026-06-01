import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];

    console.log("TOKEN RECEIVED:", token)
    console.log("JWT SECRET:", process.env.JWT_SECRET)

    if (!token) {
        return res.json({ success: false, message: "not Authorized Login again" })
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("TOKEN DECODED:", token_decode)
        req.body = req.body || {}
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log("JWT ERROR:", error.message)
        res.json({ success: false, message: "Error" })
    }
}

export default authMiddleware;