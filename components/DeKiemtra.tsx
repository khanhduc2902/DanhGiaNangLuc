
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
import icon_but from '@/public/assets/img/icon_but.png'
import icon_excel from '@/public/assets/img/icon_excel.png'
import ep_logo from '@/public/assets/img/user.png'
import icon_close from '@/public/assets/img/close.png'
import left from '@/public/assets/img/left.png'
import right from '@/public/assets/img/right.png'
const searchState = ['Tiêu chí tổng hợp', 'Tiêu chí đơn'];
const searchStatement = ['Đóng', 'Mở'];


const DeKiemTra = (prop : any) => {

    const [xoaQues, setXoaQues] = useState(true)
    const handleXoaQues = () => {
        setXoaQues(!xoaQues)

    }
    return (
        <div className='main'>
            <Navbar urlBack='/Ke-Hoach-Danh-Gia' />
            <div className="main_body">
                <div className="body_ql_tieuchi body_ql_tieuchi_danhgia">
                    <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
                        <Link href="/Quan-Li-Tieu-Chi-Danh-Gia">
                            <div className="flex center-height right-10 c-pointer">
                                <Image src={back} alt="Quay lai" />
                            </div>
                        </Link>
                        <p>Quản lý kế hoạch đánh giá / Chi tiết</p>
                    </div>

                </div>
                <div className="d_flex align_c flex_end mb_20">
                    <div className="btn_header_ql_tieuchi d_flex">
                        <div className="set_marginRespon">
                            <div className="btn btn_trang xoa mr_15" onClick={handleXoaQues}>
                                <p className="color_blue">Xóa đề đánh giá</p>
                            </div>
                        </div>
                        <Link href="/De-Kiem-Tra-Nang-Luc/Chinh-Sua" className="btn sua">
                            <div className="img mr_12">
                                <Image src={icon_but} alt="Chỉnh sửa" />
                            </div>
                            <p>Chỉnh sửa</p>
                        </Link>

                    </div>
                </div>
                <div className="body_ql_tieuchi body_ql_tieuchi_chitiet overflow-x-scroll">
                    <div className="header_d width_100">
                        <h4 className='font-bold'>Thông tin kế hoạch đánh giá</h4>
                    </div>
                    <div /*style="overflow-x: auto;"*/ className="body width_100">
                        <ul className="thongtin_tieuchi ">
                            <li className="item">
                                <p>Tên kế hoạch:</p>
                                <p>{prop.name}</p>
                            </li>
                            <li className="item">
                                <p>Loại đánh giá:</p>
                                <p>{prop.type}</p>
                            </li>
                            <li className="item">
                                <p>Số câu hỏi:</p>
                                <p>{prop.quantiy}</p>
                            </li>

                            <li className="item ">
                                <p>Người tạo:</p>
                                <div className="d_flex flex_start center-height width_100">


                                    <div className="img mr_10 ">
                                        <Image className="wh26_ra " src={ep_logo} alt="Người tạo" />
                                    </div>

                                    <p>{prop.creator}</p>

                                </div>
                            </li>
                            <li className="item">
                                <p>Ngày tạo:</p>
                                <p>{prop.CreateDay}</p>
                            </li>
                            <li className="item ">
                                <p>Trạng thái</p>
                                <p className='set_colorGreen'>{prop.statement}</p>
                            </li>
                            <li className="item ">
                                <p>Người duyệt:</p>
                                <div className="d_flex flex_start center-height width_100">


                                    <div className="img mr_10 ">
                                        <Image className="wh26_ra " src={ep_logo} alt="Người tạo" />
                                    </div>

                                    <p>{prop.confirmer}</p>

                                </div>
                            </li>
                            <li className="item">
                                <p>Ngày duyệt:</p>
                                <p>{prop.confirmDay}</p>
                            </li>
                            <li className="item">
                                <p>Ngày bắt đầu kế hoạch:</p>
                                <p>{prop.startDay}</p>
                            </li>
                            <li className="item">
                                <p>Ngày kết thúc kế hoạch:</p>
                                <p>{prop.endDay}</p>
                            </li>
                            <li className="item ">
                                <p>Giờ bắt đầu đánh giá:</p>
                                <p>{prop.startHour}</p>
                            </li>
                            <li className="item ">
                                <p>Giờ kết thúc đánh giá:</p>
                                <p>{prop.endHour}</p>
                            </li>
                            <li className="item ">
                                <p>Đánh giá lặp lại:</p>
                                <p>{prop.around}</p>
                            </li>
                            <li className="item ">
                                <p>Ghi chú</p>
                                <p>{prop.note}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <h4 className="font_ss16 font_wB chuxanh mb_20 mt-5">Danh sách câu hỏi</h4>
                <div className="cauhoi_chitiet cauhoi_chitiet_1 mb_20">
                    <p className="mb_20"><span className="font_s15 font_w5 mr_10">Câu hỏi 1 : what??</span> <span className="font_s14 color_blue">(10 điểm)</span></p>


                    <p className="font-500 chuden mb_20">Đáp án</p>


                    <div className="d_flex align_start mb_20">
                        <input type="radio" name="tracnghiem1" value="" className="mr_5" />
                        <label className='w-11/12' >21321</label>
                    </div>
                    <div className="d_flex align_start mb_20">
                        <input type="radio" name="tracnghiem1" value="" className="mr_5" />
                        <label className='w-11/12' >21312</label>
                    </div>
                    <div className="d_flex align_start mb_20">
                        <input checked={true} type="radio" name="tracnghiem1" value="" className="mr_5" />
                        <label className='w-11/12'>31233</label>
                    </div>

                </div>

                <div className={`${"body_ql_tieuchi phanloai_danhgia phanloai_danhgia_macdinh"}`}>
                    <div className="header_d width_100">
                        <h4>Phân loại đánh giá</h4>
                    </div>
                    <div className="body width_100 set_overflow_auto">
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
                <div className="nhanvien  ">
                    <p className="color_blue font_wB font_ss16 mb_20">Đối tượng nhận đánh giá</p>

                    <div className="body_doituong body_doituong_nhan_danhgia mb_20">
                        <div className="khoibang re_la">
                            <div className="thanh_dk navv_480">
                                <div className="turn turn_left" id="turn_left">
                                    <Image src={left} alt="sang trái" />
                                </div>
                                <div className=" turn turn_right" id="turn_right">
                                    <Image src={right} alt="sang phải" />
                                </div>
                            </div>
                            <div className="bangchung" id="bang_chung">
                                <table className="bangchinh tieu_chi">
                                    <tbody><tr>
                                        <th>
                                            <p className="phantucon">STT</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Mã NV</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Họ tên</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Phòng ban</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Chức vụ</p>
                                        </th>
                                    </tr>

                                        <tr className="nv_danhgia show_trc">
                                            <td>1</td>
                                            <td>
                                                <p className="chungchung">943501</p>

                                            </td>
                                            <td>
                                                <div className="d_flex align_c">
                                                    <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                        <p>Cong Tien Test</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text_a_l">phòng IT</p>
                                            </td>
                                            <td>
                                                <p className="text_a_l">Nhân viên chính thức</p>
                                            </td>

                                        </tr>
                                        <tr className="nv_danhgia show_trc">
                                            <td>2</td>
                                            <td>
                                                <p className="chungchung">440277</p>

                                            </td>
                                            <td>
                                                <div className="d_flex align_c">
                                                    <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                        <p>Trần Ngọc Minh Đức</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text_a_l">phòng nhân sự</p>
                                            </td>
                                            <td>
                                                <p className="text_a_l">Trưởng nhóm</p>
                                            </td>

                                        </tr>
                                        
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nhanvien  ">
                    <p className="color_blue font_wB font_ss16 mb_20">Người đánh giá</p>

                    <div className="body_doituong body_doituong_nhan_danhgia mb_20">
                        <div className="khoibang re_la">
                            <div className="thanh_dk navv_480">
                                <div className="turn turn_left" id="turn_left">
                                    <Image src={left} alt="sang trái" />
                                </div>
                                <div className=" turn turn_right" id="turn_right">
                                    <Image src={right} alt="sang phải" />
                                </div>
                            </div>
                            <div className="bangchung" id="bang_chung">
                                <table className="bangchinh tieu_chi">
                                    <tbody><tr>
                                        <th>
                                            <p className="phantucon">STT</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Mã NV</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Họ tên</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Phòng ban</p>
                                        </th>
                                        <th>
                                            <p className="phantucon">Chức vụ</p>
                                        </th>
                                    </tr>

                                        <tr className="nv_danhgia show_trc">
                                            <td>1</td>
                                            <td>
                                                <p className="chungchung">943501</p>

                                            </td>
                                            <td>
                                                <div className="d_flex align_c">
                                                    <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                        <p>Cong Tien Test</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text_a_l">phòng IT</p>
                                            </td>
                                            <td>
                                                <p className="text_a_l">Nhân viên chính thức</p>
                                            </td>

                                        </tr>
                                        <tr className="nv_danhgia show_trc">
                                            <td>2</td>
                                            <td>
                                                <p className="chungchung">440277</p>

                                            </td>
                                            <td>
                                                <div className="d_flex align_c">
                                                    <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                        <p>Trần Ngọc Minh Đức</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text_a_l">phòng nhân sự</p>
                                            </td>
                                            <td>
                                                <p className="text_a_l">Trưởng nhóm</p>
                                            </td>

                                        </tr>
                                        
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${"popup popup_500 popup_xoa popup_xoa_tieuchi"} ${xoaQues ? '' : 'block'}`} /*style="display: block;"*/>
                    <div className="container">
                        <div className="content">
                            <div className="popup_header">
                                <h4 className="name_header">Xóa câu hỏi</h4>
                                <div className="img close_popup cursor-pointer" onClick={handleXoaQues}>
                                    <Image src={icon_close} alt="đóng" />
                                </div>
                            </div>
                            <div className="popup_body">
                                <p className="cont_1">Bạn có chắc chắn muốn xóa bài kiểm tra năng lực nhân viên <span /*style="width: 300px; margin-left: -30px;"*/ className="font_wB show_xoa_ten elipsis1">
                                    Tester 1</span></p>
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
                <div className={`${"popup popup_500 popup_xoa popup_xoa_tieuchi"} ${xoaQues ? '' : 'block'}`} /*style="display: block;"*/>
                    <div className="container">
                        <div className="content">
                            <div className="popup_header">
                                <h4 className="name_header">Xóa câu hỏi</h4>
                                <div className="img close_popup cursor-pointer" onClick={handleXoaQues}>
                                    <Image src={icon_close} alt="đóng" />
                                </div>
                            </div>
                            <div className="popup_body">
                                <p className="cont_1">Bạn có chắc chắn muốn xóa bài kiểm tra năng lực nhân viên <span /*style="width: 300px; margin-left: -30px;"*/ className="font_wB show_xoa_ten elipsis1">
                                    Tester 1</span></p>
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

export default DeKiemTra;