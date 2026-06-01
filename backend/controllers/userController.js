// import userModel from '../models/userModel.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import validator from 'validator';

// // login user 
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {

//         const user = await userModel.findOne({ email });
//         if (!user) {
//             return res.json({ success: false, message: "Invalid email or password" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.json({ success: false, message: "Invalid email or password" });
//         }

//         const token = createToken(user._id);
//         return res.json({ success: true, message: "Login successful", token });

//     } catch (error) {
//         console.error(error);
//         return res.json({ success: false, message: "Internal server error" });
//     }

// }


// const createToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET)
// }


// //  register user
// const registerUser = async (req, res) => {
//     const { name, email, password } = req.body;
//     try {

//         // checking is user already exists or not
//         const exists = await userModel.findOne({ email });
//         if (exists) {
//             return res.json({ success: false, message: "User already exists" });
//         }

//         // validaationg the email format and the strong password 
//         if (!validator.isEmail(email)) {
//             return res.json({ success: false, message: "Invalid email format" });
//         }

//         if (!validator.isLength(password, { min: 8 })) {
//             return res.json({ success: false, message: "Password must be at least 8 characters long" });
//         }

//         // hashing the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);


//         const newUser = new userModel({
//             name: name,
//             email: email,
//             password: hashedPassword
//         })

//         const user = await newUser.save();
//         const token = createToken(user._id);

//         return res.json({ success: true, message: "User registered successfully", token });

//     } catch (error) {
//         console.error(error);
//         return res.json({ success: false, message: "Internal server error" });
//     }

// }

// export { loginUser, registerUser };



import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';

// create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d' // ✅ important improvement
    });
};

// login user 
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid email or password" });
        }

        const token = createToken(user._id);

        return res.json({
            success: true,
            message: "Login successful",
            token
        });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: "Internal server error" });
    }
};

// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const exists = await userModel.findOne({ email });

        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email format" });
        }

        if (!validator.isLength(password, { min: 8 })) {
            return res.json({
                success: false,
                message: "Password must be at least 8 characters long"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);

        return res.json({
            success: true,
            message: "User registered successfully",
            token
        });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: "Internal server error" });
    }
};

export { loginUser, registerUser };