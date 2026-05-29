// import React from 'react'
// import "./Sidebar"

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <div className="sidebar-options">
//                 <div className="sidebar-option">
//                     <img src={assets.add_icon} alt="Add" />
//                     <p>Add items</p>
//                 </div>
//                 <div className="sidebar-option">
//                     <img src={assets.order_icon} alt="Add" />
//                     <p>list items</p>
//                 </div>
//                 <div className="sidebar-option">
//                     <img src={assets.order_icon} alt="Add" />
//                     <p>Orders</p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Sidebar
import React from 'react'
import "./Sidebar.css"
import { assets } from "../../assets/assets.js"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <NavLink to="/add" className="sidebar-option">
                    <img src={assets.add_icon} alt="Add" />
                    <p>Add items</p>
                </NavLink>
                <NavLink to="/list" className="sidebar-option">
                    <img src={assets.order_icon} alt="Add" />
                    <p>List items</p>
                </NavLink>
                <NavLink to="/orders" className="sidebar-option">
                    <img src={assets.order_icon} alt="Add" />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar