import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Channel from './pages/Channel';
import Prescription from './pages/Prescription';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';

import Doctorlist from './pages/Doctorlist';
import Specializelist from './pages/Specializelist';
import Categorylist from './pages/Categorylist';
import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import Addblogcat from './pages/Addblogcat';

import Addcat from './pages/Addcat';
import Addbrand from './pages/Addbrand';
import { Addspecialize } from './pages/Addspecialize';
import Addproduct from './pages/Addproduct';
import Adddoctor from './pages/Adddoctor';

import AddCoupon from './pages/AddCoupon';
import Couponlist from './pages/Couponlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries/>} />
          <Route path='channel' element={<Channel/>} />
          <Route path='prescription' element={<Prescription/>} />
          <Route path='blog-list' element={<Bloglist/>} />
          <Route path='blog' element={<Addblog/>} />
          <Route path='coupon-list' element={<Couponlist/>} />
          <Route path='coupon' element={<AddCoupon/>} />
          <Route path='blog-category-list' element={<Blogcatlist/>} />
          <Route path='blog-category' element={<Addblogcat/>} />
          <Route path='orders' element={<Orders/>} />
          <Route path='customers' element={<Customers/>} />
          
          <Route path='list-doctor' element={<Doctorlist/>} />
          <Route path='doctor' element={<Adddoctor/>} />
          <Route path='list-docbrand' element={<Specializelist/>} />
          <Route path='docbrand' element={<Addspecialize/>} />
          <Route path='docbrand/:id' element={<Addspecialize/>} />
          <Route path='list-category' element={<Categorylist/>}/>
          <Route path='category' element={<Addcat/>}/>
          <Route path='category/:id' element={<Addcat/>}/>
          <Route path='list-brand' element={<Brandlist/>}/>
          <Route path='brand' element={<Addbrand/>}/>
          <Route path='brand/:id' element={<Addbrand/>}/>
          <Route path='list-product' element={<Productlist/>}/>
          <Route path='product' element={<Addproduct/>}/>
        </Route>
       
      </Routes>
    </Router>
  );
}

export default App;
