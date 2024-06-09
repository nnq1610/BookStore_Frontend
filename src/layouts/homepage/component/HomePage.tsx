import React from "react";
import Banner from "./components.tsx/Banner";
import Carousel from "./components.tsx/Carousel";
import DanhSachSanPham from "../../product/DanhSachSanPham";
import { useParams } from "react-router-dom";


interface HomePageProps {
    tuKhoaTimKiem: string
}
//Menu thay doi noi dung. noi dung thay doi phu thuoc vao homepage
function HomePage({tuKhoaTimKiem}: HomePageProps) {

    //Lấy từ url và gắn cho mtl
    const{maTheLoai} = useParams();

    let maTheLoaiNumber = 0;

    //Try catch xử lí nếu có bad request
    try {
        maTheLoaiNumber = parseInt(maTheLoai+"");

    } catch (error) {
        maTheLoaiNumber = 0;
        console.error('error', error);
    }

    if(Number.isNaN(maTheLoaiNumber)) {
        maTheLoaiNumber = 0;
    }
    return(
        <div>
            <Banner/>
            <Carousel/>
            <DanhSachSanPham tuKhoaTimKiem = {tuKhoaTimKiem} maTheLoai = {maTheLoaiNumber}/>
        </div>
    )
    //Su thay doi noi dung
}
export default HomePage;