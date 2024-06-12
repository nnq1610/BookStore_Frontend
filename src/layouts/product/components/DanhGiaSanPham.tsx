import { useParams } from "react-router-dom";
import SachModel from "../../../models/SachModel";
import { useEffect, useState } from "react";
import { laySachTheoMaSach } from "../../../api/SachApi";
import { Carousel } from "react-responsive-carousel";
import { layToanBoDanhGiaCuaMotSach } from "../../../api/DanhGiaApi";
import DanhGiaModel from "../../../models/DanhGiaModel";
import { Star, StarFill } from "react-bootstrap-icons";
import renderRating from "../../util/XepHang";

interface DanhGiaSanPham {
    maSach: number;
}
//Cần truyền vào sách
const DanhGiaSanPham: React.FC<DanhGiaSanPham> = (props) => {

    //Lay sach tu url
     const maSach = props.maSach;
    const [danhSachDanhGia, setDanhSachDanhGia] = useState<DanhGiaModel[] >([]);
    const [dangTaiDuLieu, setDangTaiDuLieu]=  useState(true);
    const [baoLoi, setBaoLoi] = useState(null);

   

    //Lay du lieu

    useEffect( ()=>{
        layToanBoDanhGiaCuaMotSach(maSach)
        .then(danhSach => {
            setDanhSachDanhGia(danhSach);
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


    

    return (
        <div className="container mt-2 mb-2 text-center">
            <h4>
                Đánh giá sản phẩm
            </h4>
                {
                    danhSachDanhGia.map((danhGia, index) => (
                        <div className="row">
                            <div className="col-4 text-end">
                                <p>{renderRating(danhGia.diemXepHang?danhGia.diemXepHang:0)}</p>
                            </div>
                            <div className="col-8 text-start">
                                <p>{danhGia.nhanXet}</p>
                                 
                            </div>
                        </div>
                        
                       
                    )
                )
                }
            
         
        </div>
    );
  



    //Ham lay ma sach


}
export default DanhGiaSanPham;