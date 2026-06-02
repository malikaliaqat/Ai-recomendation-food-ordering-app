// import React, { useContext } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../context/StoreContext'

// const PlaceOrder = () => {

//   const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)



//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     country: "",
//     phone: ""
//   })


//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data => ({ ...data, [name]: value }))
//   }

//   useEffect(() => {

//     console.log(data)
//   }, [data])





//   return (
//     <div className='place-order'>

//       {/* ---- Left Side - Delivery Information ---- */}
//       <div className='place-order-left'>
//         <p className='title'>Delivery Information</p>
//         <div className='multi-fields'>
//           <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
//           <input name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
//         </div>
//         <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
//         <input name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
//         <div className='multi-fields'>
//           <input name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
//           <input name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
//         </div>
//         <div className='multi-fields'>
//           <input name="zipCode" onChange={onChangeHandler} value={data.zipCode} type="text" placeholder='Zip code' />
//           <input name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
//         </div>
//         <input name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
//       </div>

//       {/* ---- Right Side - Cart Totals ---- */}
//       <div className='place-order-right'>
//         <div className='cart-total'>
//           <h2>Cart Totals</h2>
//           <div>
//             <div className='cart-total-details'>
//               <p>Subtotal</p>
//               <p>
//                 {/* {getTotalCartAmount()} */}
//                 ${getTotalCartAmount ? getTotalCartAmount() : 0}
//                 {/* {0} */}
//               </p>
//             </div>

//             <hr />

//             <div className='cart-total-details'>
//               <p>Delivery Fee</p>
//               <p>
//                 ${getTotalCartAmount() === 0 ? 0 : 2}
//               </p>
//             </div>

//             <hr />

//             <div className='cart-total-details'>
//               <b>Total</b>
//               <b>
//                 $
//                 {getTotalCartAmount
//                   ? (getTotalCartAmount() > 0
//                     ? getTotalCartAmount() + 2
//                     : 0)
//                   : 0}
//               </b>
//             </div>
//           </div>
//           <button>PROCEED TO PAYMENT</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default PlaceOrder



import React, { useContext, useState, useEffect } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const navigate = useNavigate();

  const { getTotalCartAmount } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  const placeOrderHandler = () => {
    // later this will call backend stripe API
    console.log("Order clicked");

    // example redirect (optional)
    // navigate("/cart")
  }

  return (
    <div className='place-order'>

      {/* LEFT */}
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>

        <div className='multi-fields'>
          <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
          <input name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>

        <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />

        <div className='multi-fields'>
          <input name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
          <input name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
        </div>

        <div className='multi-fields'>
          <input name="zipCode" onChange={onChangeHandler} value={data.zipCode} type="text" placeholder='Zip code' />
          <input name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
        </div>

        <input name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>

      {/* RIGHT */}
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>

          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>

          <hr />

          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>

          <hr />

          <div className='cart-total-details'>
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>

          <button onClick={placeOrderHandler}>
            PROCEED TO PAYMENT
          </button>

        </div>
      </div>

    </div>
  )
}

export default PlaceOrder