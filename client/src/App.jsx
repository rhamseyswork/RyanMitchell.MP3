//By: Rhamseys Garcia
//Date: 2024-03-29
/* @vite-ignore */
import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';


//Navr Bar
import Components from './components/manifest.js';
import Pages from './Pages/mainifest.js';
import PrivateRoute from './components/Private Route/PrivateRoute.jsx';
import AdminRoute from './components/Admin Route/AdminRoute.jsx'
import { ToastContainer } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Meta from './components/Meta/Meta.jsx';

function App() {
  const location = useLocation();
  const [metaTagName, setMetaTagName] = useState('');
  useEffect(() => {

    const metaTagName = location.pathname.substring(1);
    setMetaTagName(metaTagName);//option to add Home
  }, [location.pathname]);  

  return (
    <>
      {metaTagName ? <Meta title={`Ryan Mitch MP3 | ${metaTagName}`} /> : <Meta/>}
      <Suspense fallback={<div> RyanMmtch.MP3 Loading...</div>}>
        <Routes index={true}>
          <Route path='' element={<Pages.Home />} /> 
          <Route path='' element={<PrivateRoute />}>
        </Route>
        <Route path='' element={<AdminRoute />}>
            <Route path='/admin/LinkTree' element={<Pages.admin.LinkTreeAdmin />}/> 
          </Route>
          <Route path='/Login' element={<Pages.Login />} />
          <Route path="*" element={<Pages.Error404 />} />
    </Routes>
    </Suspense>
    <Suspense fallback={<div>Loading Footer ...</div>}>
      { <Components.Footer /> }
    </Suspense>
    <ToastContainer />
    </>
  );
}




export default App;
