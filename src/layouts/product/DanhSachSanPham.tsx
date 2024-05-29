import React, { useEffect, useState } from "react";
import SachModel from "../../models/SachModel";
import SachProps from "./components/SachProps";
import { layToanBoSach } from "../../api/SachApi";

const DanhSachSanPham: React.FC = () =>{

//Day la 1 mang, ban dau rong
//
    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu]=  useState(true);
    const [baoLoi, setBaoLoi] = useState(null);

    //Lay du lieu

    useEffect(()=>{
        layToanBoSach().then(
            sachData =>{
                setDanhSachQuyenSach(sachData);
                setDangTaiDuLieu(false)
            }
        )
    })
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
        )

    }
    return (

        <div className="container">
            <div className="row mt-4"> {

                danhSachQuyenSach.map((sach) => (
                    <SachProps key = {sach.maSach} sach = {sach}/>

                ))
            }

            </div>

        </div>
    );


}
export default DanhSachSanPham;