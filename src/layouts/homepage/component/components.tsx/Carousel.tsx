import SachModel from "../../../../models/SachModel";
import { lay3SachMoiNhat, layToanBoSach } from "../../../../api/SachApi";
import CarouselItem from "./CarouselItem";
import { useEffect, useState } from "react";

const Carousel:React.FC =()=> {

    //LAy ra duoc du lieu va bo xuong


    const[danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const[dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const[baoLoi, setBaoLoi] = useState(null);


    useEffect (
        () => {
            lay3SachMoiNhat().then (
                sachData => {
                    setDanhSachQuyenSach(sachData.ketQua);
                    setDangTaiDuLieu(false);
                }
            ).catch(
                error => {
                    setDangTaiDuLieu(false);
                    setBaoLoi(error.message);
                }
            );
        }, []//=>chi goi 1 lan
    )

    if(dangTaiDuLieu) {

        return (
            <div>
                <h1>
                    Đang tải dữ liệu
                </h1>
            </div>
        );
    }

    if(baoLoi) {
        return (
            <div>
                <h1>Gặp lỗi: {baoLoi}</h1>
            </div>
        );
    }
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {/* Tạo thẻ div để vứt vào 1 dòng */}
                    <div className="carousel-item active" data-bs-interval="10000">
                        <CarouselItem key={0} sach= {danhSachQuyenSach[0]}/>
                    </div>

                    <div className="carousel-item active" data-bs-interval="10000">
                       <CarouselItem key = {1} sach={danhSachQuyenSach[1]}/>
                    </div>
                    <div className="carousel-item active" data-bs-interval="10000">
                       <CarouselItem key = {2} sach={danhSachQuyenSach[2]}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
