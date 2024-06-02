import React from "react";

interface PhantrangInterface {
    trangHienTai: number;
    tongSoTrang: number;
    phanTrang: any;
}

const PhanTrang : React.FC<PhantrangInterface> = (props) => {
 
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
        if(props.tongSoTrang >= 3) {
            danhSachPhanTrang.push(props.trangHienTai -2);
        }
        if(props.tongSoTrang >= 2) {
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
                    danhSachPhanTrang.map( trang=> (
                        <li className="page-item " onClick={() => props.phanTrang(trang)}>
                            <button className="page-link" >{trang}</button>
                        </li>
                    )

                    )
                }


                <li className="page-item"><button className="page-link">1</button></li>
                <li className="page-item active">
                <button className="page-link" >2 <span className="sr-only">(current)</span></button>
                </li>
                <li className="page-item"><button className="page-link">3</button></li>
                <li className="page-item">
                <a className="page-link" href="#">Trang cuối</a>
                </li>
            </ul>
        </nav>
    );


}