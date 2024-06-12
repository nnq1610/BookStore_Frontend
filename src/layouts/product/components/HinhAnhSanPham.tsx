import { useParams } from "react-router-dom";
import HinhAnhModel from "../../../models/HinhAnhModel";
import SachModel from "../../../models/SachModel";
import { useEffect, useState } from "react";
import { laySachTheoMaSach } from "../../../api/SachApi";
import { layToanBoAnh } from "../../../api/HinhAnhApi";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'//css cho carousel

interface HinhAnhSanPham {
    maSach: number;
}
//Cần truyền vào sách
const HinhAnhSanPham: React.FC<HinhAnhSanPham> = (props) => {

    //Lay sach tu url
     const maSach = props.maSach;

  
    
    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[] >([]);
    const [dangTaiDuLieu, setDangTaiDuLieu]=  useState(true);
    const [baoLoi, setBaoLoi] = useState(null);

    
    //Lay du lieus

    useEffect( ()=>{
        layToanBoAnh(maSach)
        .then(sach => {
            setDanhSachAnh(sach);
            setDangTaiDuLieu(false);
        })
        .catch((error) => {
            setBaoLoi(error.message);
            setDangTaiDuLieu(false);
        })
       //Moi lan ma sach thay doi thi se goi doan nay
    }, [])

    if (baoLoi) {
        return (
            <div>
                <h1>Gặp lỗi: {baoLoi}</h1>
            </div>
        );
    }

    if (dangTaiDuLieu) {
        return (
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }


    if(!danhSachAnh) {
        return (
            <div>
                <h1>Sách này không tồn tại</h1>
            </div>
        );
    }

    return (
        <div className="row">
            {/* <div>

                { (hinhAnhDangChon) && <img src={hinhAnhDangChon.duLieuAnh} style={{width:"150px"}}/>}
            </div>
            <div className="row mt-2">
                    {
                        danhSachAnh.map((hinhAnh, index) => (
                            <div className={"col-3"} key={index} data-bs-interval="10000">
                               <img onClick={()=>chonAnh(hinhAnh)}  src={hinhAnh.duLieuAnh} style={{width: "50px"}} />

                            </div>
                        ))
                    }


            
            </div> */}
            <div className="row">
                <div className="col-12">
                    <Carousel showArrows={true} showIndicators={true}>
                        {
                            danhSachAnh.map((hinhAnh, index) => (
                                <div key={index}>
                                    <img src={hinhAnh.duLieuAnh} alt={hinhAnh.tenHinhAnh} style={{maxWidth:"250px"}}/>

                                </div>

                            ))

                        }
                    </Carousel>

                </div>

            </div>
         
        </div>
    );
  



    //Ham lay ma sach


}
export default HinhAnhSanPham;