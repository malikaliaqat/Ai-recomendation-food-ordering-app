// import React from 'react'
// import './PlaceOrder.css'
// const PlaceOrder = () => {
//   return (
//     <div>

//     </div>
//   )
// }
// import './PlaceOrder.css'
// export default PlaceOrder





import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className='place-order'>

      {/* ---- Left Side - Delivery Information ---- */}
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      {/* ---- Right Side - Cart Totals ---- */}
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
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
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder