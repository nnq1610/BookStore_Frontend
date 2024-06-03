import React from "react";

interface PhantrangInterface {
    trangHienTai: number;
    tongSoTrang: number;
    phanTrang: any;
}

 export const PhanTrang : React.FC<PhantrangInterface> = (props) => {
 
    const danhSachPhanTrang = [];

    if (props.trangHienTai == 1) {
        danhSachPhanTrang.push(props.trangHienTai);
        
        if (props.tongSoTrang >= props.trangHienTai +1 ){
            danhSachPhanTrang.push(props.trangHienTai +1);
    }
         
        if(props.tongSoTrang >= props.trangHienTai +2) {
            danhSachPhanTrang.push(props.trangHienTai +2);
        }
    } else if(props.trangHienTai > 1) {

        //Neu co tong trang lon hơn 
        if(props.trangHienTai >= 3) {
            danhSachPhanTrang.push(props.trangHienTai -2);
        }
        if(props.trangHienTai >= 2) {
            danhSachPhanTrang.push(props.trangHienTai -1);
        }

        //Push ban than no
        danhSachPhanTrang.push(props.trangHienTai);

        if(props.tongSoTrang >= props.trangHienTai+1) {
            danhSachPhanTrang.push(props.trangHienTai+1);
        }
        if(props.tongSoTrang >= props.trangHienTai +2) {
            danhSachPhanTrang.push(props.trangHienTai+2);
        }
        
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item " onClick={() => props.phanTrang(1)}>
                <button className="page-link"  >Trang đầu</button>
                </li>
                {
                    //so sánh trang hiện tai đang xem với trang được map vào
                    //Điều nàu cho biết trang nào sẽ áp được áp  dụng css

                    danhSachPhanTrang.map( trang=> (
                        <li className="page-item " key = {trang} onClick={() => props.phanTrang(trang)}>
                            <button className={"page-link" + (props.trangHienTai == trang ?"active":"")} >{trang}</button>
                        </li>
                    )

                    )
                }
                <li className="page-item" onClick={() => props.phanTrang(props.tongSoTrang)}>
                    <button className="page-link" >Trang cuối</button>
                </li>
            </ul>
        </nav>
    );


}
