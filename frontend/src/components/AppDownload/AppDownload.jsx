
// // export default AppDownload
// import React from 'react'
// import { assets } from '../../assets/assets'
// import './AppDownload.css'

// const AppDownload = () => {
//     return (
//         <div className='app-download' id='app-download'>
//             <p>
//                 Download our app for the best experience! Available on both iOS and Android.
//             </p>
//             <div className='app-download-platforms'>
//                 <img src={assets.playstore} alt="Google Play Store" />
//                 <img src={assets.appstore} alt="App Store" />
//             </div>
//         </div>
//     )
// }

// export default AppDownload
import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>

            <p>
                For Better Experience Download <br />
                Tomato App

            </p>

            <div className='app-download-platforms'>

                <img
                    src={assets.play_store}
                    alt="Google Play Store"
                />

                <img
                    src={assets.app_store}
                    alt="App Store"
                />

            </div>

        </div>
    )
}

export default AppDownload