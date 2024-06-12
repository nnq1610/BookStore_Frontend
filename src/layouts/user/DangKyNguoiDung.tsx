import { useState } from "react";

function DangKyNguoiDung() {
    const[tenDangNhap, setTenDangNhap] = useState("");
    const[email, setEmail]= useState("");
    const[hoDem, setHoDem] = useState("");
    const[ten, setTen] = useState("");
    const[soDienThoai, setSoDienThoai] = useState("");
    const[matKhau, setmatKhau] = useState("");
    const[nhapLaiMatKhau, setNhapLaiMatkhau] = useState("");
    const[gioiTinh, setGioiTinh] = useState(1);

//Hien bao Loi

    const[errorTenDangNhap, setErrorTenDangNhap] = useState("");
    const[errorEmail, setErrorEmail] = useState("");
    const[errorMatKhau, setErrorMatKhau] = useState("");
    const[errorMatKhauLapLai, setErrorMatKhauLapLai] = useState("");
//Xử lí thông tin khi submit
   const handleSubmit = async (e: React.FormEvent) => {

   }
    
   const kiemTraTenDangNhapTonTai = async(tenDangNhap: string) => {
    const url = `http://localhost:8080/nguoi_dung/search/existsByTenDangNhap?tenDangNhap=${tenDangNhap}`;
    //call
    console.log(url);
    try {
        const response = await fetch(url);
        const data = await response.text();
        if(data === "true") {
            setErrorTenDangNhap("Tên đăng nhập đã tồn tại!");
            return true;
        }

        return false;


    } catch(error) {
        console.log("Lỗi khi kiểm tra tên đăng nhập", error);
        //Khong call dc endpoint
        return false;
    }
   }

   ////////////////////////////////////////////////////////
   const kiemTraEmail = async(email: string) => {
    const url = `http://localhost:8080/nguoi_dung/search/existsByEmail?email=${email}`;
    //call
    console.log(url);
    try {
        const response = await fetch(url);
        const data = await response.text();
        if(data === "true") {
            setErrorEmail("Email đã tồn tại!");
            return true;
        }

        return false;


    } catch(error) {
        console.log("Lỗi khi kiểm tra email", error);
        //Khong call dc endpoint
        return false;
    }
   }
   ////////////////////////////////////////////////\
   const kiemTraMatKhau = (matKhau: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(matKhau)) {
        setErrorMatKhau("Mật khẩu bao gồm có ít nhất 8 ký tụ và bao gồm ít nhất 1 kí tự dặc biệt!");
        return true;
    } else {
        setErrorMatKhau("");
        return false;
    }
}

const kiemTramatKhauLapLai = (matKhau: string) => {
    if(nhapLaiMatKhau !== matKhau) {
        setErrorMatKhauLapLai("Mật khẩu không khớp!");
        return true;
    } else {
        setErrorMatKhauLapLai("");
        return false;
    }
}

    const handleMatKhaulapLaiChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNhapLaiMatkhau(e.target.value);
        setErrorMatKhauLapLai("");

        return kiemTramatKhauLapLai(e.target.value);
    }

    const handleMatKhau = (e:React.ChangeEvent<HTMLInputElement>) => {
        setmatKhau(e.target.value);
        setErrorMatKhau("");

        return kiemTraMatKhau(e.target.value);
    }
   
   
   const handleEmailChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //thay doi gia tri ten dang nhap
    setEmail(e.target.value);
    setErrorEmail("");

    return kiemTraEmail(e.target.value);

   }
   ////////////////////////////////
   const handleTenDangNhapChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //thay doi gia tri ten dang nhap
    setTenDangNhap(e.target.value);
    setErrorTenDangNhap("");

    return kiemTraTenDangNhapTonTai(e.target.value);

   }




    return (
        <div className="container">
            <h1 className="mt-5 text-center">
                Đăng ký
            </h1>
            <div className="mb-3 col-md-6 col-12 mx-auto">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label htmlFor="tenDangNhap" className="form-label" >Tên đăng nhập</label>
                        <input
                        type="text"
                        className="form-control"
                        id="tenDangNhap"
                        value={tenDangNhap}
                        onChange={handleTenDangNhapChange}
                        />
                        <div style={{ color : "red" }}>{errorTenDangNhap}</div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="matKhau" className="form-label" >Email</label>
                        <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        />
                        <div style={{ color : "red" }}>{errorEmail}</div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="matKhau" className="form-label" >Mật khẩu</label>
                        <input
                        type="password"
                        className="form-control"
                        id="matKhau"
                        value={matKhau}
                        onChange={handleMatKhau}
                        />
                        <div style={{ color : "red" }}>{errorMatKhau}</div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" >Nhập lại mật khẩu</label>
                        <input
                        type="password"
                        className="form-control"
                        id="nhapLaimatKhau"
                        value={nhapLaiMatKhau}
                        onChange={handleMatKhaulapLaiChange}
                        />
                        <div style={{ color : "red" }}>{errorMatKhauLapLai}</div>
                    </div>
                    <div>

                    </div>

                </form>
            </div>

        </div>

    );
}

export default DangKyNguoiDung;