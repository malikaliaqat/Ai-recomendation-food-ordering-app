// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Footer/Footer'
// import { Route, Routes } from 'react-router-dom'

// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

// const App = () => {



//   const [showLogin, setShowLogin] = useState(false)

//   return (
//     <>
//       {
//         showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <> </>
//       }
//       <div className='app'>

//         <Navbar setShowLogin={setShowLogin} />

//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/place-order' element={<PlaceOrder />} />
//         </Routes>

//       </div>

//       <Footer />
//     </>
//   )

// }

// export default App
// function App() {
//   return (
//     <h1>Hello React is Working 🚀</h1>
//   )
// }

// export default App

import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/place-order' element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App