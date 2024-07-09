// import React, { useEffect } from 'react';
// import './loader.css';

// const Loader = ({ setShowLoader }) => {
//   useEffect(() => {
//     const loadingBar = document.querySelector('.loadingbar');
//     const loadingBox = document.querySelector('.loadingBox');

//     setTimeout(() => {
//       loadingBar.style.left = '0';
//     }, 1500);

//     setTimeout(() => {
//       loadingBox.style.opacity = '1';
//     }, 500);

//     setTimeout(() => {
//       document.body.classList.add('visibleSplash');
//       setShowLoader(false);
//     }, 5000);
//   }, [setShowLoader]);

//   return (
//     <div className="splashBody">
//       <div className="splashScreen">
//         <div className="loadingContainer">
//           <div className="loadingBox">
//             <img
//               src="./favicon.ico"
//               className="splashLogo"
//               alt="Logo"
//             />
//             <div className="loadingBarContainer">
//               <div className="loadingbar"></div>
//             </div>
//             <div className="loadingCircle">
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="splashBehind"></div>
//       <div className="splashBehindTwo"></div>
//     </div>
//   );
// };

// export default Loader;

import React, { useEffect } from 'react';
import './loader.css';

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add('visibleSplash');
      setShowLoader(false);
    }, 5000);
  }, [setShowLoader]);

  return (
    <div className="splashBody">
      <div className="splashScreen">
        <div className="loadingContainer">
          <div className="loadingBox">
            <img
              src="./favicon.ico"
              className="splashLogo"
              alt="Logo"
            />
            <div className="loadingText">Loading<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></div>
          </div>
        </div>
      </div>
      <div className="splashBehind"></div>
      <div className="splashBehindTwo"></div>
    </div>
  );
};

export default Loader;


