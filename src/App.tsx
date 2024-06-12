import React, { useState } from 'react';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import Banner from './layouts/homepage/component/components.tsx/Banner';
import HomePage from './layouts/homepage/component/HomePage';
import Carousel from './layouts/homepage/component/components.tsx/Carousel';
import { layToanBoSach } from './api/SachApi';
import DanhSachSanPham from './layouts/product/DanhSachSanPham';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './layouts/about/About';
import ChiTietSanPham from './layouts/product/components/ChiTietSanPham';
import DangKyNguoiDung from './layouts/user/DangKyNguoiDung';


function App() {
 const [tuKhoaTimKiem, setTuKhoaTimKiem] =  useState('');
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar tuKhoaTimKiem={tuKhoaTimKiem} setTuKhoaTimKiem={setTuKhoaTimKiem} />
        <Routes>
           <Route path='/' element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem} />} />            
           <Route path='/:maTheLoai' element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem} />} />         
           <Route path='/about' element={<About />} />
           <Route path='/sach/:maSach' element={<ChiTietSanPham />} />
           <Route path='/dangKy' element={<DangKyNguoiDung />}/>
        </Routes>
        <Footer/>   
      </BrowserRouter>
      
    </div>
  );
}

export default App;
