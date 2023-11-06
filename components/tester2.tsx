interface titleArray {
    id: string,
    name: string
}
const dataTitle: titleArray[] =[
    {'id':'/Trang-Chu','name':'Trang chủ'},
    {'id':'/Phieu-Danh-Gia','name':'Quản lí phiếu đánh giá'},
    {'id':'/Ket-Qua-Nhan-Vien','name':'Quản lí kết quả dánh giá nhân viên'},
    {'id':'/Ket-Qua-Danh-Gia-Cua-Toi','name':'Quản lí kết quả dánh giá nhân viên'},
    {'id':'/Ket-Qua-Danh-Gia-Phong-Ban','name':'Quản lí kết quả đánh giá phòng ban'},
    {'id':'/Du-Lieu-Xoa-Gan-Day','name':'Dữ liệu đã xóa gần đây'},
    {'id':'/Lo-Trinh-Thang-Tien','name':'Lộ trình thăng tiến'},
    {'id':'/Quan-Li-Tieu-Chi-Danh-Gia','name': 'Danh sách tiêu chí đánh giá'},
    {'id':'/De-Danh-Gia-Nang-Luc','name': 'Đề đánh giá năng lực'},
    {'id':'/Loai-Cau-Hoi','name': 'Loại câu hỏi'},
    {'id':'/Danh-Sach-Cau-Hoi','name': 'Danh sách câu hỏi'},
    {'id':'/De-Kiem-Tra-Nang-Luc','name': 'Quản lý đề kiểm tra năng lực nhân viên'},
    {'id':'/Ke-Hoach-Danh-Gia','name': 'Quản lý kế hoạch đánh giá'},
    {'id':'/Phan-Quyen','name': 'Phân quyền'},
    {'id':'/Cai-Dat','name': 'Cài đặt / Thang điểm'},
]
export default dataTitle;
/*
    switch(namePath){
        case '/Trang-Chu':
            setTitle('Trang chủ');
            break;
        case '/Phieu-danh-gia':
            setTitle('Quản lí phiếu đánh giá');
            break;
        case '/Ket-Qua-Nhan-Vien':
            setTitle('Quản lí kết quả dánh giá nhân viên')
            break;
        case '/Ket-Qua-Danh-Gia-Cua-Toi':
            setTitle('Quản lí kết quả dánh giá nhân viên')
            break;
        case '/Ket-Qua-Danh-Gia-Phong-Ban':
            setTitle('Quản lí kết quả đánh giá phòng ban');
            break;


    }*/