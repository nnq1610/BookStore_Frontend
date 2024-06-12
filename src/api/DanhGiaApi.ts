import React from "react";
import { my_request } from "./Request";
import DanhGiaModel from "../models/DanhGiaModel";


 async function layDanhGiaCuaMotSach( duongDan:string): Promise<DanhGiaModel[]> {

    const ketQua: DanhGiaModel[] = [];
    //Xác định endpoint la gì
    // goi phuong thuc request

    const response = await my_request(duongDan);
    //Lay ra json
    const responseData  = response._embedded.suDanhGias;
    // console.log(responseData);


    //Luu vao ket qua

    
    for (const key in responseData) {
        ketQua.push({
            maDanhGia: responseData[key].maDanhGia,
            diemXepHang: responseData[key].diemXepHang,
            nhanXet:responseData[key].nhanXet,
          
    }
        )
}
    console.log("số lượng", ketQua.length);
    return ketQua;

}


//Chi lay ra toan bo anh cua 1 quyen sach(dua vao ma sach)
export async function layToanBoDanhGiaCuaMotSach(maSach: number):Promise<DanhGiaModel[]> {
    const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachDanhGia`;     
    return layDanhGiaCuaMotSach(duongDan);// Use backticks for template literals

}

// export async function layDanhGiaCuaMotSach(maSach:number):Promise<DanhGiaModel[]>{
//     const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachDanhGia?sort=maDanhGia&page=0&size=1`;

//     return layAnhCuaMotSach(duongDan);

