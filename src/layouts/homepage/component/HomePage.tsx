import React from "react";
import Banner from "./components.tsx/Banner";
import Carousel from "./components.tsx/Carousel";
import DanhSachSanPham from "../../product/DanhSachSanPham";


interface HomePageProps {
    tuKhoaTimKiem: string
}
//Menu thay doi noi dung. noi dung thay doi phu thuoc vao homepage
function HomePage({tuKhoaTimKiem}: HomePageProps) {

    
    return(
        <div>
            <Banner/>
            <Carousel/>
            <DanhSachSanPham tuKhoaTimKiem = {tuKhoaTimKiem}/>
        </div>
    )
    //Su thay doi noi dung
}
export default HomePage;