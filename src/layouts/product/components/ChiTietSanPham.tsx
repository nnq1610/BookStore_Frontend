import { useParams } from "react-router-dom";
import HinhAnhModel from "../../../models/HinhAnhModel";
import SachModel from "../../../models/SachModel";
import { useEffect, useState } from "react";
import { laySachTheoMaSach } from "../../../api/SachApi";
import HinhAnhSanPham from "./HinhAnhSanPham";
import DanhGiaSanPham from "./DanhGiaSanPham";
import renderRating from "../../util/XepHang";
import dinhDangSo from "../../util/DinhDangSo";


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
    const [soLuong, setSoLuong] = useState(1);

//SoLuong
    const tangSoLuong = () => {
        const soLuongHientai = (sach&&sach.soLuong?sach.soLuong:0);
        if(soLuong <soLuongHientai ) {
            setSoLuong(soLuong+1);
        }
    }
    const giamSoluong = () => {
        if(soLuong >= 2) {
            setSoLuong(soLuong-1);
        }
    }
//SOLuong
    const handleSoLuongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const soLuongMoi = parseInt(event.target.value);

        const soLuongTonKho = (sach&&sach.soLuong?sach.soLuong:0);
        if(!isNaN(soLuongMoi) && soLuongMoi>=1 && soLuongMoi <= soLuongTonKho) {
            setSoLuong(soLuongMoi);
        }
    }
//Gia tien
    const handleMuaNgay = () => {

    }
    const handleThemVaoGioHang = () => {

    }


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
                    {<HinhAnhSanPham maSach = {maSachNumber}/>}
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-8">
                            <h1>
                                {sach.tenSach}
                            </h1>
                            <h4>
                                {renderRating(sach.trungBinhXepHang?sach.trungBinhXepHang:0)}
                            </h4>
                            <h4>
                                {dinhDangSo(sach.giaBan?sach.giaBan:0)}đ
                            </h4>
                            <hr/>
                                {sach.moTa}
                            <hr/>
                        </div>
                        <div className="col-4">
                            <div>
                                <strong className="mb-2"> Số lượng</strong>
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-outline-secondary me-2" onClick={giamSoluong}>
                                        -
                                    </button>
                                    <input 
                                    type="number"
                                    value ={soLuong}
                                    min={1}
                                    onChange={handleSoLuongChange}
                                     className=" form-control text-center"/>
                                      <button className="btn btn-outline-secondary me-2" onClick={tangSoLuong}>
                                        +
                                    </button>
                                  
                                </div>
                               
                                    { sach.giaBan && (
                                        <div className="mt-2 text-center">
                                            Số tiền tạm tính <br/>
                                            <h4>{dinhDangSo(soLuong*sach.giaBan)}đ</h4>
                                        </div>
                                    )
                                    }
                                    <div className="d-grid gap-2">
                                    <button type="button" className="btn btn-danger mt-3" onClick={handleMuaNgay}>Mua ngay</button>  
                                    <button type="button" className="btn btn-outline-secondary mt-2" onClick={handleThemVaoGioHang}>Thêm vào giỏ hàng</button>                                   
                                    </div>
                                   
                                 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <DanhGiaSanPham maSach = {maSachNumber}/>
            </div>


        </div>
    );
  



    //Ham lay ma sach


}
export default ChiTietSanPham;