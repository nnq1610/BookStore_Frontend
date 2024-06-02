import React from "react";
import Banner from "./components.tsx/Banner";
import Carousel from "./components.tsx/Carousel";
import DanhSachSanPham from "../../product/DanhSachSanPham";
function HomePage() {

    return(
        <div>
            <Banner/>
            <Carousel/>
            <DanhSachSanPham/>
        </div>
    )
}
export default HomePage;