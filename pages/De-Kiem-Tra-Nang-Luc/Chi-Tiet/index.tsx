
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
const searchState = ['Tiêu chí tổng hợp', 'Tiêu chí đơn'];
const searchStatement = ['Đóng', 'Mở'];


const Page = () => {

    const [xoaQues, setXoaQues] = useState(true)
    const handleXoaQues = () => {
        setXoaQues(!xoaQues)

    }
    return (
        <div className='main'>
            <Navbar urlBack='/De-Kiem-Tra-Nang-Luc' />
            <div className="main_body">
                <div className="body_ql_tieuchi body_ql_tieuchi_danhgia">
                    <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
                        <Link href="/Quan-Li-Tieu-Chi-Danh-Gia">
                            <div className="flex center-height right-10 c-pointer">
                                <Image src={back} alt="Quay lai" />
                            </div>
                        </Link>
                        <p>Danh sách câu hỏi / Chi tiết</p>
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
                        <h4 className='font-bold'>Thông tin đề kiểm tra năng lực nhân viên</h4>
                    </div>
                    <div /*style="overflow-x: auto;"*/ className="body width_100">
                        <ul className="thongtin_tieuchi">
                            <li className="item">
                                <p>Hình thức đề kiểm tra:</p>
                                <p>Trắc nghiệm</p>
                            </li>
                            <li className="item">
                                <p>Tên đề kiểm tra:</p>
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
                            <li className="item ">
                                <p>Thang điểm:</p>
                                <p>10</p>
                            </li>
                            <li className="item">
                                <p>Số câu hỏi:</p>
                                <p>1</p>
                            </li>
                            <li className="item ">
                                <p>Ghi chú</p>
                                <p>231312</p>
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
                
                <div className={`${ "body_ql_tieuchi phanloai_danhgia phanloai_danhgia_macdinh"}`}>
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

export default Page;