function dinhDangSo(x: number) {
    if(isNaN(x)) {
        return 0;
    }

    return x.toLocaleString("vi-VN");

}

export default dinhDangSo;