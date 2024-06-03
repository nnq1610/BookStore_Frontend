import React from "react";
import SachModel from "../models/SachModel";
import { my_request } from "./Request";

interface ketQuaInterface {
    ketQua: SachModel[];
    tongSoTrang: number;
    tongSoSach: number;
}

//Ben trong Promise laf kieeur du lieu tra ve
async function laySach(duongDan: string): Promise<ketQuaInterface> {
    const ketQua:SachModel[] = [];
   

    const response =await my_request(duongDan);

    //Lay ra json
    const responseData  = response._embedded.saches;
    console.log(responseData);

    const tongSoTrang: number = response.page.totalPages;
    const tongSoSach: number  = response.page.totalElements;


    //Luu vao ket qua
    for (const key in responseData) {
        ketQua.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,//có thể bị rỗng
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa: responseData[key].moTa,
            soLuong: responseData[key].soLuong,
            tenTacGia: responseData[key].tenTacGia,
            trungBinhXepHang: responseData[key].trungBinhXepHang
    }
        );
}
    return {ketQua: ketQua, tongSoTrang: tongSoTrang, tongSoSach: tongSoSach};

}

//Lay sach xong phan trang
export async function layToanBoSach(trang:number):Promise<ketQuaInterface> {
    //Xac dinh endpoint, maw dinh cho 8 sach 1 trang
    const duongDan: string = `http://localhost:8080/sach?sort=maSach,desc&size=8&page=${trang}`;
    return laySach(duongDan);
}
export async function lay3SachMoiNhat(): Promise<ketQuaInterface> {
    const duongDan: string = `http://localhost:8080/sach?sort=maSach,desc&page=0&size=3`;   
    
    return laySach(duongDan);
}
export async function timKiemsach(tuKhoaTimKiem: string ):Promise<ketQuaInterface> {

    let duongDan = `http://localhost:8080/sach?sort=maSach,desc&page=0&size=8`;

    if(tuKhoaTimKiem != '') {
        duongDan = `http://localhost:8080/sach/search/findByTenSachContaining?sort=maSach,desc&size=8&page=0&tenSach=${tuKhoaTimKiem}`;
    }

    return laySach(duongDan);
}
