import React, { useEffect, useState } from "react";
import SachModel from "../../models/SachModel";
import SachProps from "./components/SachProps";
import { layToanBoSach, timKiemsach } from "../../api/SachApi";
import { PhanTrang } from "../homepage/component/components.tsx/PhanTrang";

interface danhSachSanPhanProps {
    tuKhoaTimKiem: string;
}

function DanhSachSanPham({tuKhoaTimKiem}:danhSachSanPhanProps) {


    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu]=  useState(true);
    const [baoLoi, setBaoLoi] = useState(null);
    const [trangHienTai, setTrangHienTai] = useState(1);
    const [tongSoTrang, setTongSoTrang]= useState(0);
    const [tongSoSanh, setTongSoSach] = useState(0);

    console.log(trangHienTai);

    //Lay du lieu

    useEffect(()=>{

        if(tuKhoaTimKiem == '') {
            layToanBoSach(trangHienTai-1).then(
                sachData =>{
                    setDanhSachQuyenSach(sachData.ketQua);
                    setTongSoTrang(sachData.tongSoTrang)
                    setDangTaiDuLieu(false);
                }
            ).catch(
                error => {
                    setDangTaiDuLieu(false);
                    setBaoLoi(error.message);
                }
                
            );

        }
        else {
            timKiemsach(tuKhoaTimKiem).then(
                kq =>{
                    setDanhSachQuyenSach(kq.ketQua);
                    setTongSoTrang(kq.tongSoTrang)
                    setDangTaiDuLieu(false);
                }
            ).catch(
                error => {
                    setDangTaiDuLieu(false);
                    setBaoLoi(error.message);
                }
                
            );
        }
        }, [trangHienTai, tuKhoaTimKiem]
       

)


    const phanTrang =(trang: number) => {
        setTrangHienTai(trang);
    }


    if(dangTaiDuLieu) {
        return (
            <div>
                <h1>Dang tai du lieu</h1>
            </div>
        )
    }
    if(baoLoi) {
        return (

            <div>
                <h1>Loi</h1>
            </div>
        );

    }
    

    if(danhSachQuyenSach.length == 0) {
        return (
            <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                    <h1>không tìm tháy sách theo yêu càu</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row mt-4 mb-4"> {

                danhSachQuyenSach.map((sach) => (
                    <SachProps key = {sach.maSach} sach = {sach}/>
                ))
            }

            </div>
            <PhanTrang trangHienTai={trangHienTai}  tongSoTrang={tongSoTrang} phanTrang ={phanTrang}/>

        </div>
    );
}
export default DanhSachSanPham;