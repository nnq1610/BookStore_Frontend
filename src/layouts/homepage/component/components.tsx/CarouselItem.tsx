import React, { useEffect, useState } from "react";
import HinhAnhModel from "../../../../models/HinhAnhModel";
import SachModel from "../../../../models/SachModel";
import { lay1AnhCuaSach } from "../../../../api/HinhAnhApi";

interface CarouselItemInterFace {
    sach: SachModel;
}


const CarouselItem: React.FC<CarouselItemInterFace> = (props) => {
    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const [baoLoi, setBaoLoi] = useState(null);

    // Sử dụng một biến tạm để lưu giá trị maSach
    const maSach: number = props.sach.maSach;

    useEffect(
        
        () => {
        if (maSach !== undefined) {
            lay1AnhCuaSach(maSach).then(
                hinhAnhData => {
                    setDanhSachAnh(hinhAnhData);
                    setDangTaiDuLieu(false);
                }
            ).catch(
                error => {
                    setDangTaiDuLieu(false);
                    setBaoLoi(error.message);
                }
            );
        }
    }, [maSach]);

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

    let duLieuAnh: string = "";
    if (danhSachAnh[0] && danhSachAnh[0].duLieuAnh) {
        duLieuAnh = danhSachAnh[0].duLieuAnh;
    }

    return (
        <div className="row align-items-center">
            <div className="col-5 text-center">
                <img src={duLieuAnh} className="float-end" style={{ width: '150px' }} />
            </div>
            <div className="col-7">
                <h5>{props.sach.tenSach}</h5>
                <p>{props.sach.moTa}</p>
            </div>
        </div>
    );
};

export default CarouselItem;
