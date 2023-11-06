
import Navbar from '@/pages/Du-Lieu-Xoa-Gan-Day/Navbar';
import React, { useState, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import back from '@/public/assets/img/back.png';
import Link from 'next/link';
import icon_i from '@/public/assets/img/icon_i.png'
import icon_so from'@/public/assets/img/icon_so.png'
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
   
    const [xoaQues,setXoaQues] =useState(true)
    const handleXoaQues = () =>{
        setXoaQues(!xoaQues)
        
    }
    return (
        <div className='main'>
            <Navbar urlBack='/Danh-Sach-Cau-Hoi' />
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
                                        <p className="color_blue">Xóa câu hỏi</p>
                                    </div>
                            </div>
                            <Link href="/Danh-Sach-Cau-Hoi/Chinh-Sua" className="btn sua">
                                <div className="img mr_12">
                                    <Image src={icon_but} alt="Chỉnh sửa" />
                                </div>
                                <p>Chỉnh sửa</p>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="body_ql_tieuchi body_ql_tieuchi_chitiet">
                        <div className="header_d width_100">
                            <h4 className='font-bold'>Thông tin tiêu chí</h4>
                        </div>
                        <div /*style="overflow-x: auto;"*/ className="body width_100">
                            <ul className="thongtin_tieuchi">
                                <li className="item">
                                    <p>Hình thức câu hỏi:</p>
                                    <p>Tự luận</p>
                                </li>
                                <li className="item">
                                    <p>Loại câu hỏi:</p>
                                    <p></p>
                                </li>
                                <li className="item ">
                                    <p>Số điểm:</p>
                                    <p>2</p>
                                </li>
                                <li className="item ">
                                    <p>Thời gian thực hiện:</p>
                                    <p>12 phút</p>
                                </li>
                                
                                <li className="item">
                                    <p>Câu hỏi:</p>
                                    <p>tgfdgdfg</p>
                                </li>
                                <li className="item">
                                    <p>Đáp án:</p>
                                    <p>treterte</p>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="body_ql_tieuchi body_ql_tieuchi_chitiet mt-5">
                        <div className="header_d width_100">
                            <h4 className='font-bold'>Thông tin hệ thống</h4>
                        </div>
                        <div /*style="overflow-x: auto;"*/ className="body width_100">
                            <ul className="thongtin_tieuchi">
                               
                                <li className="item ">
                                    <p>Người cập nhập:</p>
                                    <div className="d_flex flex_start center-height width_100">


                                        <div className="img mr_10 ">
                                            <Image className="wh26_ra " src={ep_logo} alt="Người tạo" />
                                        </div>

                                        <p>le anh tuan12</p>

                                    </div>
                                </li>
                                <li className="item">
                                    <p>Ngày cập nhập:</p>
                                    <p>01/08/2023</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${"popup popup_500 popup_xoa popup_xoa_tieuchi"} ${xoaQues ? '': 'block' }`} /*style="display: block;"*/>
                        <div className="container">
                            <div className="content">
                                <div className="popup_header">
                                    <h4 className="name_header">Xóa câu hỏi</h4>
                                    <div className="img close_popup cursor-pointer" onClick={handleXoaQues}>
                                        <Image src={icon_close} alt="đóng" />
                                    </div>
                                </div>
                                <div className="popup_body">
                                    <p className="cont_1">Bạn có chắc chắn muốn xóa câu hỏi này? <span /*style="width: 300px; margin-left: -30px;"*/ className="font_wB show_xoa_ten elipsis1"></span></p>
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
export function Input_ckeditor({ value,handleChange,input_name }: any) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState();
  
    useEffect(() => {
      setEditorLoaded(true);
    }, []);
    return (
        <MyEditor
          name={input_name}
          onChange={(data:any) => {
            setData(data);
            handleChange(data)
          }}
          editorLoaded={editorLoaded}
          value={value}
        />
    )
}
  
export default Page;