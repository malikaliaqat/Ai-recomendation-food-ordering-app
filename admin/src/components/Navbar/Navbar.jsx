// import React from 'react'
// import "./Navbar.css"
// import { asset } from "../../assets"

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <img className="logo" src={asset.logo} alt="" />
//             <img className="profile" src={asset.user} alt="" />

//         </div>
//     )
// }

// export default Navbar
import React from 'react'
import "./Navbar.css"
import { assets } from "../../assets/assets.js"

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={assets.logo} alt="" />
            <img className="profile" src={assets.profile_image} alt="" />
        </div>
    )
}

export default Navbar