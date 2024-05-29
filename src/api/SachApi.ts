import React from "react";
import SachModel from "../models/SachModel";

//function goi den api bat ki, tra lai data
//Lay ra danh sach cac quyen sach 
//Tra ve khai niem data

async function request(duongDan:string) {
    const response = await fetch(duongDan)

    if(!response.ok) {

        throw new Error('Không thể truy cập  ${duongDan}')
    }

    return response.json();
}

export async function layToanBoSach():Promise<SachModel[]> {
    const ketQua:SachModel[] = [];
    //Xác định endpoint la gì
    const duongDan:string = "http://localhost:8080/sach";
    // goi phuong thuc request

    const response =await request(duongDan);
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
        )
}
    return ketQua;

}