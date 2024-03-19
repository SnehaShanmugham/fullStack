import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LazySuspense from './component/LazySuspense';
const LazyUserLogin = lazy(() => import("./pages/user/UserLogin"));
const LazyAdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const LazyRegistration = lazy(() => import("./pages/user/Registration"));
const LazyUserLayout = lazy(() => import("./pages/user/UserLayout"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const LazyUserDashboard = lazy(()=>import("./pages/user/UserDashboard"));
const LazyRole= lazy(()=>import("./pages/user/Role"));
const LazyAbout= lazy(()=>import("./pages/user/About"));
const LazyViewboat= lazy(()=>import("./pages/user/Viewboat"));
const LazyUserprofile= lazy(()=>import("./pages/user/Userprofile"));
const LazyMybookings= lazy(()=>import("./pages/user/Mybookings"));
const LazyBookings= lazy(()=>import("./pages/user/Booking"));
const LazyContact= lazy(()=>import("./pages/user/Contact"));
const LazyAdmindashboard= lazy(()=>import("./pages/admin/Admindashboard"));
const LazyUserdetails= lazy(()=>import("./pages/admin/Userdetails"));
const LazyAddboat= lazy(()=>import("./pages/admin/Addboat"));
const LazyVieweditboat= lazy(()=>import("./pages/admin/Vieweditboat"));
const LazyPrivacy = lazy(() => import("./pages/Privacy"))
import './assets/css/App.css';

const UserRoutes =()=> {
  return(
  <LazyUserLayout>
    <Routes>
      <Route path='/home' element={<LazySuspense component={LazyHome}/>}/>
    </Routes>
  </LazyUserLayout>
)
  }

const AdminRoutes =()=> {
  return(
  <LazyAdminLayout>
    <Routes>
      <Route path='/userdashboard' element={<LazySuspense component={LazyUserDashboard}/>}/>
    </Routes>
  </LazyAdminLayout>
)
}

function App() {
  return ( 
    <Routes> 
        {/* <Navbar/> */}
        
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LazySuspense component ={LazyHome} />} />
        <Route path="/userdashboard" element={<LazySuspense component ={LazyUserDashboard} />} />
        <Route path="/boat/userlogin" element={<LazySuspense component ={LazyUserLogin} />} />
        <Route path="/boat/Registration" element={<LazySuspense component ={LazyRegistration} />} />
        <Route path="/boat/adminlogin" element={<LazySuspense component ={LazyAdminLogin} />} />
        <Route path="/boat/role" element={<LazySuspense component ={LazyRole} />} />
        <Route path="/boat/about" element={<LazySuspense component ={LazyAbout} />} />
        <Route path="/privacy" element={<LazySuspense component ={LazyPrivacy} />} />
        <Route path="/boat/viewboat" element={<LazySuspense component ={LazyViewboat} />} />
        <Route path="/boat/userprofile" element={<LazySuspense component ={LazyUserprofile} />} />
        <Route path="/boat/mybooking" element={<LazySuspense component ={LazyMybookings} />} />
        <Route path="/boat/booking" element={<LazySuspense component ={LazyBookings} />} />
        <Route path="/boat/contact" element={<LazySuspense component ={LazyContact} />} />
        <Route path="/boat/admindashboard" element={<LazySuspense component ={LazyAdmindashboard} />} />
        <Route path="/boat/userdetails" element={<LazySuspense component ={LazyUserdetails} />} />
        <Route path="/boat/admindashboard" element={<LazySuspense component ={LazyAdmindashboard} />} />
        <Route path="/boat/userdetails" element={<LazySuspense component ={LazyUserdetails} />} />
        <Route path="/boat/addboat" element={<LazySuspense component ={LazyAddboat} />} />
        <Route path="/boat/vieweditboat" element={<LazySuspense component ={LazyVieweditboat} />} />

        <Route path="/boat/user/*" element={<LazySuspense component ={UserRoutes} />} />
        <Route path = "/boat/admin/*" element={<LazySuspense component ={AdminRoutes} />} />
        {/* <Footer/> */}
      </Routes>
  );
}

export default App;