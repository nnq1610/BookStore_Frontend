import React from "react";

function Banner() {
    return (
        <div className="p-5 mb-4 bg-dark">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h2>Đọc sách là thói quen tốt</h2>
                    <p>
                        quang đẹp trai
                    </p>
                    {/* Nút màu xanh dương */}
                    <button className="btn btn-primary btn-lg text-white float-end">Xem thêm tại shop của quang đẹp trai</button>
                </div>
            </div>


        </div>
    )
}

export default Banner;