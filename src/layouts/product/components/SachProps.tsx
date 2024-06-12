import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import HinhAnhModel from "../../../models/HinhAnhModel";
import { layToanBoAnh } from "../../../api/HinhAnhApi";
import { Link } from "react-router-dom";
import renderRating from "../../util/XepHang";
import dinhDangSo from "../../util/DinhDangSo";
interface SachPropsInterFace {
    sach: SachModel;
}
//Cần truyền vào sách
const SachProps: React.FC<SachPropsInterFace> = (props) => {
    const maSach: number  = props.sach.maSach;

    
    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu]=  useState(true);
    const [baoLoi, setBaoLoi] = useState(null);

    //Lay du lieus

    useEffect( ()=>{
        layToanBoAnh(maSach).then(
            hinhAnhData =>{
                setDanhSachAnh(hinhAnhData);
                setDangTaiDuLieu(false)
            }
        ).catch(
            error => {
                setBaoLoi(error.message);
            }
            
        );
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
    console.log('data anh',danhSachAnh[0])

    //Check du lieu anh
    let  duLieuAnh: string  = "";
    if (danhSachAnh[0] && danhSachAnh[0].duLieuAnh) {
        duLieuAnh =  danhSachAnh[0].duLieuAnh;
    }



    return  (
        <div className="col-md-3 mt-2">
            <div className="card">
                <Link to = {`/sach/${props.sach.maSach}`}>
                    <img src={duLieuAnh}
                        className = "card-img-top"
                        alt = {props.sach.tenSach}
                        style={{height: '200px'}}
                        />
                </Link>
                    
                <div className="card-body">
                        <h5 className="card-title">{props.sach.tenSach}</h5>
                    
                        <p className="card-text">{props.sach.moTa}</p>
                    
                    
                    <div className="price row">
                        <span className = "original-price col-6 text-end">
                            <del>{dinhDangSo(props.sach.giaNiemYet?props.sach.giaNiemYet:0)}đ</del>
                        </span>
                        <span className="discouted-price col-6">
                            <strong>{dinhDangSo(props.sach.giaBan?props.sach.giaBan:0)}đ</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            {renderRating(props.sach.trungBinhXepHang?props.sach.trungBinhXepHang:0)}

                        </div>

                        <div className="col-6 text-end">
                            <a href="#" className="btn btn-secondary btn-block me-2">
                                <i className="fas fa-heart"></i>
                            </a>
                                
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>

                        </div>
                      
                       

                    </div>

                </div>
                

            </div>

        </div>
        

    );
    
}
export default SachProps;