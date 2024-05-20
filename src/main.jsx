import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
<<<<<<< HEAD
import AuthProvider from './Components/AuthProvider/AuthProvider';
=======
>>>>>>> 7bc03851dc84a1acb3e02b5b81cdba971adf6302



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
=======

    <RouterProvider router={router}></RouterProvider>

>>>>>>> 7bc03851dc84a1acb3e02b5b81cdba971adf6302
  </React.StrictMode>,
)
