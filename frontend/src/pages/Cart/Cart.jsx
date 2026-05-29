// import React, { useContext } from 'react'
// import './Cart.css'
// import { StoreContext } from '../../context/StoreContext'

// const Cart = () => {

//   const { cartItems, food_list, removeFromCart } = useContext(StoreContext)

//   return (
//     <div className='cart'>

//       <div className='cart-item'>

//         {/* HEADER ROW */}
//         <div className='cart-items-title'>
//           <p>Item</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>

//         <br />
//         <hr />

//         {/* DATA ROWS */}
//         {food_list?.map((item) => {

//           const qty = cartItems?.[item._id]

//           if (qty > 0) {
//             return (
//               <div key={item._id} className='cart-items-title cart-items-item'>

//                 <img src={item.image} alt="" />
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{qty}</p>
//                 <p>${item.price * qty}</p>

//                 <p
//                   className='cross'
//                   onClick={() => removeFromCart(item._id)}
//                 >
//                   ×
//                 </p>

//               </div>
//             )
//           }

//           return null
//         })}

//       </div>
//     </div>
//   )
// }

// export default Cart










import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount
  } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>

      <div className='cart-items'>

        {/* HEADER */}
        <div className='cart-items-title'>
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />

        {/* ITEMS */}
        {food_list && food_list.length > 0 ? (
          food_list.map((item) => {

            const qty = cartItems ? cartItems[item._id] : 0

            if (qty > 0) {
              return (
                <div key={item._id}>

                  <div className='cart-items-title cart-items-item'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{qty}</p>
                    <p>${item.price * qty}</p>

                    <p
                      onClick={() => removeFromCart(item._id)}
                      className='cross'
                    >
                      ×
                    </p>

                  </div>

                  <hr />

                </div>
              )
            }

            return null
          })
        ) : (
          <p style={{ marginTop: "20px" }}>Cart is empty</p>
        )}

      </div>

      {/* BOTTOM */}
      <div className='cart-bottom'>

        <div className='cart-total'>
          <h2>Cart Totals</h2>

          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>
              {/* {getTotalCartAmount()} */}
              ${getTotalCartAmount ? getTotalCartAmount() : 0}
              {/* {0} */}
            </p>
          </div>

          <hr />

          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>
              ${getTotalCartAmount() === 0 ? 0 : 2}
            </p>
          </div>

          <hr />

          <div className='cart-total-details'>
            <b>Total</b>
            <b>
              $
              {getTotalCartAmount
                ? (getTotalCartAmount() > 0
                  ? getTotalCartAmount() + 2
                  : 0)
                : 0}
            </b>
          </div>

          <button onClick={() => navigate('/place-order')}>
            PROCEED TO CHECKOUT
          </button>

        </div>

        <div className='cart-promocode'>
          <p>If you have a promo code, enter it here</p>

          <div className='cart-promocode-input'>
            <input type='text' placeholder='Promo code' />
            <button>Submit</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Cart

