
import userModel from "../models/userModel.js";

// =========================
// ADD TO CART
// =========================
const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        if (!userId || !itemId) {
            return res.json({ success: false, message: "Missing userId or itemId" });
        }

        let userData = await userModel.findById(userId);

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added to cart" });

    } catch (error) {
        console.log("ADD TO CART ERROR:", error);
        res.json({ success: false, message: error.message });
    }
};

// =========================
// REMOVE FROM CART
// =========================
const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        if (!userId || !itemId) {
            return res.json({ success: false, message: "Missing userId or itemId" });
        }

        let userData = await userModel.findById(userId);

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        if (cartData[itemId] > 0) {
            cartData[itemId] -= 1;
        }

        if (cartData[itemId] === 0) {
            delete cartData[itemId];
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Removed from cart" });

    } catch (error) {
        console.log("REMOVE CART ERROR:", error);
        res.json({ success: false, message: error.message });
    }
};

// =========================
// GET CART
// =========================

const getCart = async (req, res) => {
    try {
        console.log("USER ID:", req.body.userId);

        if (!req.body.userId) {
            return res.json({
                success: false,
                message: "UserId missing from token"
            });
        }

        const userData = await userModel.findById(req.body.userId);

        if (!userData) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        return res.json({
            success: true,
            cartData: userData.cartData || {}
        });

    } catch (error) {
        console.log("GET CART ERROR:", error);
        return res.json({
            success: false,
            message: error.message
        });
    }
};
export { addToCart, removeFromCart, getCart };