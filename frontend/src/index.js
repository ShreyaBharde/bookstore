// import React from 'react';
// import ReactDOM from 'react-dom/client';


// import './index.css';
//  import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {RouterProvider} from 'react-router-dom'
// import router from './Routers/router.js'


// import Shop from './shop/Shop';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )






import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom'
import router from './Routers/router.js'


import Shop from './shop/Shop';
import AuthProvider from './contects/AuthProvider.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
)









