
import Navbar from '@/pages/Du-Lieu-Xoa-Gan-Day/Navbar';
import React, { useState, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import back from '@/public/assets/img/back.png';
import Link from 'next/link';
import icon_i from '@/public/assets/img/icon_i.png'
import icon_so from '@/public/assets/img/icon_so.png'
import MyEditor from '@/components/MyCkeditor'
import parseISO from 'date-fns/parseISO';
import Router from 'next/router';
import cong from '@/public/assets/img/cong.png'
import close from '@/public/assets/img/close.png'
import search from '@/public/assets/img/kinhlup.png'
import icon_plus from '@/public/assets/img/icon_plus.png'
import icon_but from '@/public/assets/img/icon_but.png'
import icon_excel from '@/public/assets/img/icon_excel.png'
import ep_logo from '@/public/assets/img/ep_logo.png'
import icon_close from '@/public/assets/img/close.png'
const searchState = ['Tiêu chí tổng hợp', 'Tiêu chí đơn'];
const searchStatement = ['Đóng', 'Mở'];
const searchArray = ['CÂU HỎI ĐÁNH GIÁ NHÂN VIÊN MỚI ĐẾN CHO KINH DOANH',
    'Đề đánh giá năng lực nhân viên 8/7/2022',
    'Đề đánh giá năng lực nhân viên 12/7/2022',
    'Đề đánh giá năng lực nhân viên 15/7/2022',
    'Đề đánh giá năng lực nhân viên 15/7/2022',
    'Đề đánh giá năng lực nhân viên 15/7/2022',
    'ĐỀ KIÊM TRA ĐẦU VÀO NGÀY 19/7/2022',
    'ĐÁNH GIÁ NHÂN VIÊN ĐẦU VÀO NGÀY 19/7/2022 - Hải Yến',
    'ĐỀ ĐÁNH GIÁ NĂNG LỰC VIỆT ANH  ',
    'Đề kiểm tra đánh giá năng lực ngày 22/7/2022',
    'Đề đánh giá năng lực ngày 25/7/2022 ',
    'Đề kiểm tra năng lực nhân viên ngày 29/7',
    'Đề đánh giá năng lực nhân viên Nguyễn Hữu Khánh',
    'Đề đánh giá năng lực nhân viên Lại Văn Sơn Biên tập',
    'Đề kiểm tra năng lực ngày 2/8 ',
    'Đề đánh giá năng lực nhân viên Nguyễn Minh Vương',
    'Đề đánh giá năng lực nhân viên 03/8',
    'Đề đánh giá năng lực nhân viên 03/8',
    'Đánh giá năng lực ngày 23/9 ']
const LoaiArray = ['Chọn loại', 'Yếu', 'Trung bình', 'Khá', 'Giỏi', 'Xuất sắc']
const Page = () => {
    /* Them tieu chi */

    const [onstation, setOnstation] = useState(true)
    const handleOnStation = () => {
        setOnstation(!onstation)
    }
    const handleCancleStation = () => {
        setOnstation(true)
    }
    /*Thiet Lap Phan Loaji Danh gia */
    const [onPhanLoai, setOnPhanLoai] = useState(true)
    const handleOnPhanLoai = () => {
        setOnPhanLoai(!onPhanLoai)
    }
    /* Chon Loai */
    const [onLoai, setOnLoai] = useState(true)
    const handleLoai = () => {
        setOnLoai(!onLoai)
    }
    const [Loai, setLoai] = useState('Chọn loại')
    const handleSetLoai = (event: string) => {
        setLoai(event)
    }
    /* Them phan Loai danh gia */
    const [myArray, setMyArray] = useState([1]); // Initialize the array with initial values

    const addItem = () => {
        // Using the spread operator to create a new array with the additional item
        setMyArray([...myArray, 1]);
    };

    const removeItem = (indexToRemove: number) => {
        // Using the filter method to create a new array without the item at the specified index
        setMyArray(myArray.filter((item: number, index) => index !== indexToRemove));
    };



    const [titleState, setTitleSate] = useState('Tiêu chí tổng hợp')
    const [filteredData, setFilteredData] = useState(searchState);
    const handleSearch = (query: string) => {
        const filteredResults = searchState.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };
    const handleInputChange = (event: any) => {

        handleSearch(event.target.value);
    };

    /* trang thai */
    const [onstatement, setOnstatement] = useState(true)
    const handleOnstatement = () => {
        setOnstatement(!onstatement)
    }
    const [titleStatement, setTitleStatement] = useState('Mở')
    const [stateOn, setStateOn] = useState(true)
    const [filteredStatement, setFilteredStatement] = useState(searchStatement);
    const handleStatement = (query: string) => {
        const filteredResults = searchStatement.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };
    const handleInputStatement = (event: any) => {

        handleSearch(event.target.value);
    };

    /*tieu chi tong hop */
    const [complex, setComplex] = useState(true)
    const handleOnComplex = () => {
        setComplex(!complex)
    }
    const [titleComplex, setTitleComplex] = useState('Select')

    const searchComplex = JSON.parse(sessionStorage.getItem('arrayTieuChi') || '[]');
    const [filteredComplex, setFilteredComplex] = useState(searchComplex);

    const handleComplex = (query: string) => {
        const filteredResults = searchComplex.filter((item: any) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };
    const handleInputComplex = (event: any) => {

        handleComplex(event.target.value);
    };

    /* open pop up */

    /* get ten tieu chi */
    const [tieuChi, setTieuChi] = useState('')
    const getTenTieuChi = (event: any) => {
        setTieuChi(event.target.value);
    }
    /*get nguoi tao */
    const [owner, setOwner] = useState('Vu Hoang Anh')
    /* get diem */
    const [diem, setDiem] = useState(0)
    const handleDiem = (event: any) => {
        setDiem(event.target.value)
    }
    /*get data */
    const [ghiChu, setGhiChu] = useState('')
    /* Luu model */
    const currentDate = new Date().toLocaleDateString("en-GB")

    /* Xoa cau hoi */
    const [xoaQues,setXoaQues] =useState(true)
    const handleXoaQues = () =>{
        setXoaQues(!xoaQues)
        
    }
    let model = {}



    const handleSave = () => {
        if (diem <= 0 || diem >= 10) alert('Nhap Lai diem. 0 <= diem <= 9')
        else {
            model = { name: tieuChi, ghiChu: ghiChu, diem: diem, type: titleState, owner: owner, date: currentDate, state: stateOn }
            let pushData = [];
            pushData = JSON.parse(sessionStorage.getItem('arrayTieuChi') || '[]')

            sessionStorage.setItem('arrayTieuChi', JSON.stringify([...pushData, model]));
            Router.push('/De-Danh-Gia-Nang-Luc')
            console.log(model)

        }
    }


    /* searchinng */
    const [keHoach, setKeHoach] = useState('Tìm kiếm theo tên tiêu chí đánh giá')
    const [searchQueryKH, setSearchQueryKH] = useState('');
    const [filteredDataKH, setFilteredDataKH] = useState(searchArray);
    const handleSearchKH = (query: string) => {
        const filteredResults = searchArray.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredDataKH(filteredResults);
    };
    const handleInputChangeKH = (event: any) => {
        setSearchQueryKH(event.target.value);
        handleSearchKH(event.target.value);
    };
    const [onOfKh, setOnOffKh] = useState(true)
    return (
        <div className='main'>
            <Navbar urlBack='/De-Danh-Gia-Nang-Luc' />
            <div className="main_body">
                <div className="body_ql_tieuchi body_ql_tieuchi_danhgia">
                    <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
                        <Link href="/De-Danh-Gia-Nang-Luc">
                            <div className="flex center-height right-10 c-pointer">
                                <Image src={back} alt="Quay lai" />
                            </div>
                        </Link>
                        <p className='font-bold'>Đề đánh giá năng lực / chi tiết</p>
                    </div>
                    <div className="d_flex align_c flex_end mb_20">
                        <div className="btn_header_ql_tieuchi  btn_header_ql_tieuchi_a d_flex">
                            <div className="btn_xoade" onClick={handleXoaQues}>
                                <div className="btn btn_trang xoa mr_15">
                                    <p className="color_blue">Xóa đề đánh giá</p>
                                </div>
                            </div>

                            <div className="sua_excel d_flex">
                                <Link href="/De-Danh-Gia-Nang-Luc/Chinh-Sua" className="btn sua">
                                    <div className="img mr_12">
                                        <Image src={icon_but} alt="Chỉnh sửa" />
                                    </div>
                                    <p>Chỉnh sửa</p>
                                </Link>
                                <Link href="">
                                    <div className="btn excel">
                                        <div className="img mr_12">
                                            <Image src={icon_excel} alt="File excel" />
                                        </div>
                                        <p>Xuất excel</p>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="body_ql_tieuchi body_ql_tieuchi_chitiet mb_20">
                        <div className="header_d width_100">
                            <h4>Thông tin đề đánh giá năng lực</h4>
                        </div>
                        <div /*style="overflow-x: auto;"*/ className="body width_100">
                            <ul className="thongtin_tieuchi">
                                <li className="item">
                                    <p>Tên đề đánh giá:</p>
                                    <p>Tester 1</p>
                                </li>
                                <li className="item ">
                                    <p>Người tạo:</p>
                                    <div className="d_flex flex_start center-height width_100">


                                        <div className="img mr_10 ">
                                            <Image className="wh26_ra " src={ep_logo} alt="Người tạo" />
                                        </div>

                                        <p>le anh tuan12</p>

                                    </div>
                                </li>
                                <li className="item">
                                    <p>Ngày tạo:</p>
                                    <p>01/08/2023</p>
                                </li>
                                <li className="item">
                                    <p>Số điểm:</p>

                                    <p>10</p>

                                </li>
                                <li className="item">
                                    <p>Số tiêu chí:</p>
                                    <p>1                                            </p>
                                </li>
                                <li className="item ghi_chu">
                                    <p>Ghi chú:</p>

                                    <p className="font-14">—</p>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d_flex space_b width_100 align_c color_blue mb_20">
                        <h4 className="font_ss16 font_wB">Tiêu chí đánh giá</h4>
                    </div>
                    <div className="container_khoibang .set_width_tieuchi">
                        <div className="khoibang">
                            <div className="bangchung">
                                <table className="bangchinh ">
                                    <tbody><tr>
                                        <th>
                                            <p className="phantucon">STT</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Tên tiêu chí</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Số điểm</p>
                                        </th>
                                    </tr><tr className="cha_tieuchim_137 ">
                                            <td>
                                                <p>1</p>
                                            </td>
                                            <td className="width_60">
                                                <div className="d_flex btn_soxuong">
                                                    <p className="mr_10 font_w5">Tester 1</p>
                                                    <div className="img so_xoay so_xoayt_137">
                                                        <Image src={icon_so} alt="Sổ xuống" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>10</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <p className="text_a_l font_w5">Tổng điểm
                                                </p>
                                            </td>
                                            <td className="font_w5">10</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                    <div className={`${"body_ql_tieuchi phanloai_danhgia phanloai_danhgia_macdinh mt-5" }`} >
                                    <div className="header_d width_100">
                                        <h4>Phân loại đánh giá</h4>
                                    </div>
                                    <div className="body width_100">
                                        <ul className="thongtin_tieuchi">
                                            <li className="item">
                                                <p>Trung bình:</p>
                                                <p><span>0</span> <span className="mr_10 ml_14">-&gt;</span>
                                                    <span>5</span>
                                                </p>
                                            </li>
                                            <li className="item">
                                                <p>Khá:</p>
                                                <p><span>6</span> <span className="mr_10 ml_14">-&gt;</span>
                                                    <span>8</span>
                                                </p>
                                            </li>
                                            <li className="item">
                                                <p>Xuất sắc:</p>
                                                <p><span>9</span> <span className="mr_10 ml_14">-&gt;</span>
                                                    <span>10</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                </div>
                <div className={`${"popup popup_500 popup_xoa popup_xoa_tieuchi"} ${xoaQues ? '': 'block' }`} /*style="display: block;"*/>
                        <div className="container">
                            <div className="content">
                                <div className="popup_header">
                                    <h4 className="name_header">Xóa đề đánh </h4>
                                    <div className="img close_popup cursor-pointer" onClick={handleXoaQues}>
                                        <Image src={icon_close} alt="đóng" />
                                    </div>
                                </div>
                                <div className="popup_body">
                                    <p className="cont_1">Bạn có chắc chắn muốn xóa đề đánh giá ? <span /*style="width: 300px; margin-left: -30px;"*/ className="font_wB show_xoa_ten elipsis1">Đề đánh giá 1</span></p>
                                    <div className="popup_btn">
                                        <div className="btn btn_trang btn_140 mr_68 close_popup" onClick={handleXoaQues}>Hủy</div>
                                        <div className="btn btn_xanh btn_140 js_done_xoa" data-id="141" onClick={handleXoaQues}>
                                            Đồng ý
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};
export function Input_ckeditor({ value, handleChange, input_name }: any) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    return (
        <MyEditor
            name={input_name}
            onChange={(data: any) => {
                setData(data);
                handleChange(data)
            }}
            editorLoaded={editorLoaded}
            value={value}
        />
    )
}

export default Page;