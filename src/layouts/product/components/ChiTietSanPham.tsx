import { useParams } from "react-router-dom";
import HinhAnhModel from "../../../models/HinhAnhModel";
import SachModel from "../../../models/SachModel";
import { useEffect, useState } from "react";
import { laySachTheoMaSach } from "../../../api/SachApi";


//Cần truyền vào sách
const ChiTietSanPham: React.FC = () => {

    //Lay sach tu url
    const {maSach} = useParams();

    let maSachNumber = 0;
     try {
        maSachNumber = parseInt(maSach+'');
        if(Number.isNaN(maSachNumber)) {
            maSachNumber = 0;
        }
     } catch(error) {
        maSachNumber = 0;
        console.error("Error", error);
     }


    
    const [sach, setSach] = useState<SachModel | null>(null);
    const [dangTaiDuLieu, setDangTaiDuLieu]=  useState(true);
    const [baoLoi, setBaoLoi] = useState(null);

    //Lay du lieus

    useEffect( ()=>{
        laySachTheoMaSach(maSachNumber)
        .then((sach) => {
            setSach(sach);
            setDangTaiDuLieu(false);
        })
        .catch((error) => {
            setBaoLoi(error.message);
            setDangTaiDuLieu(false);
        })
       //Moi lan ma sach thay doi thi se goi doan nay
    }, [maSach])

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


    if(!sach) {
        return (
            <div>
                <h1>Sách này không tồn tại</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <div className = "row mt-4 mb-4">
                <div className="col-4">
                    {sach.maSach}
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-8">
                            <h1>
                                {sach.tenSach}
                            </h1>
                            <h4>
                                {sach.trungBinhXepHang}
                            </h4>
                            <h4>
                                {sach.giaBan}
                            </h4>
                            <hr/>
                                {sach.moTa}
                            <hr/>
                        </div>
                        <div className="col-4">
                            order
                        </div>

                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                phaanf review
            </div>


        </div>
    );
  



    //Ham lay ma sach

    
}
export default ChiTietSanPham;