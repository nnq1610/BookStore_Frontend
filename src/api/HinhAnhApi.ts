import React from "react";
import HinhAnhModel from "../models/HinhAnhModel";
import { my_request } from "./Request";

//Chi lay ra toan bo anh cua 1 quyen sach(dua vao ma sach)
export async function layToanBoAnh(maSach: number):Promise<HinhAnhModel[]> {
    const ketQua: HinhAnhModel[] = [];
    //Xác định endpoint la gì
    const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`; // Use backticks for template literals
    // goi phuong thuc request

    const response =await my_request(duongDan);
    //Lay ra json
    const responseData  = response._embedded.hinhAnhs;
    // console.log(responseData);


    //Luu vao ket qua

    for (const key in responseData) {
        ketQua.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh: responseData[key].tenHinhAnh,
            laIcon:responseData[key].laIcon,
            duongDan: responseData[key].duongDan,
            duLieuAnh: responseData[key].duLieuAnh,
    }
        )
}
    return ketQua;

}