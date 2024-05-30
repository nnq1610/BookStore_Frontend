import React from 'react';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import Banner from './layouts/homepage/component/components.tsx/Banner';
import HomePage from './layouts/homepage/component/HomePage';
import Carousel from './layouts/homepage/component/components.tsx/Carousel';
import { layToanBoSach } from './api/SachApi';
import DanhSachSanPham from './layouts/product/DanhSachSanPham';
function App() {

  layToanBoSach().then().catch();
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
