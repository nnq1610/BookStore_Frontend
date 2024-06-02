import React from "react";
import SachModel from "../models/SachModel";
import { my_request } from "./Request";
//function goi den api bat ki, tra lai data
//Lay ra danh sach cac quyen sach 
//Tra ve khai niem data

async function laySach(duongDan: string): Promise<SachModel[]> {
    const ketQua:SachModel[] = [];
    //Xác định endpoint la gì
   

    const response =await my_request(duongDan);
    //Lay ra json
    const responseData  = response._embedded.saches;
    console.log(responseData);


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
    return ketQua;

}

export async function layToanBoSach():Promise<SachModel[]> {
    const duongDan:string = "http://localhost:8080/sach?sort,desc";
    return laySach(duongDan);

}
export async function lay3SachMoiNhat(): Promise<SachModel[]> {
    const duongDan: string = "http://localhost:8080/sach?sort,desc&page=0&size=3";
    return laySach(duongDan);
}