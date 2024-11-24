import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './components/pages/Home/home';
import Shop from './components/pages/Shop/shop';
import Contact from './components/pages/Contact/contact.js';
import AdminLogin from './components/pages/Admin/adminLogin.js';
import AdminHome from './components/pages/Admin/adminHome.js';


function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/raj" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminHome />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
