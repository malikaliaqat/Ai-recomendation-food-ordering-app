<<<<<<< HEAD
// import mongoose from 'mongoose'

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log("DB Connected ✅")
//     } catch (error) {
//         console.log("DB Connection Error ❌", error.message)
//     }
// }

// export default connectDb
import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            tls: true,
            tlsAllowInvalidCertificates: true,  // bypasses the SSL alert
        })
        console.log("DB Connected ✅")
    } catch (error) {
        console.log("DB Connection Error ❌", error.message)
    }
}

export default connectDb
=======
// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("DB Connected");
//     } catch (error) {
//         console.log("DB connection error:", error);
//     }
// };

// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("DB Connected");
//     } catch (error) {
//         console.log("DB connection error:", error.message);
//     }
// };
>>>>>>> e1f6e32438c35dc4c97448c8008b0029a8c23bdb
