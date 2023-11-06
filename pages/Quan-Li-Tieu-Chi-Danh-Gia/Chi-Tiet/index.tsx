
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
const searchState = ['Tiêu chí tổng hợp', 'Tiêu chí đơn'];
const searchStatement = ['Đóng', 'Mở'];


const Page = () => {
   
    
    return (
        <div className='main'>
            <Navbar urlBack='/Quan-Li-Tieu-Chi-Danh-Gia' />
            <div className="main_body">
                <div className="body_ql_tieuchi body_ql_tieuchi_danhgia">
                    <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
                        <Link href="/Quan-Li-Tieu-Chi-Danh-Gia">
                            <div className="flex center-height right-10 c-pointer">
                                <Image src={back} alt="Quay lai" />
                            </div>
                        </Link>
                        <p>Danh sách lý tiêu chí đánh giá / Chi tiết</p>
                    </div>
                  
                    </div>
                    <div className="d_flex align_c flex_end mb_20">
                        <div className="btn_header_ql_tieuchi d_flex">
                            <Link href="/Quan-Li-Tieu-Chi-Danh-Gia/Chinh-Sua" className="btn sua">
                                <div className="img mr_12">
                                    <Image src={icon_but} alt="Chỉnh sửa" />
                                </div>
                                <p>Chỉnh sửa</p>
                            </Link>
                            <Link href="/Excel/tieuchi.php?idtc=145">
                                <div className="btn excel">
                                    <div className="img mr_12">
                                        <Image src={icon_excel} alt="File excel" />
                                    </div>
                                    <p>Xuất excel</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="body_ql_tieuchi body_ql_tieuchi_chitiet">
                        <div className="header_d width_100">
                            <h4>Thông tin tiêu chí</h4>
                        </div>
                        <div /*style="overflow-x: auto;"*/ className="body width_100">
                            <ul className="thongtin_tieuchi">
                                <li className="item">
                                    <p>Tên tiêu chí:</p>
                                    <p>hoang</p>
                                </li>
                                <li className="item">
                                    <p>Loại tiêu chí:</p>
                                    <p>Tiêu chí tổng hợp</p>
                                </li>

                                <li className="item hidden">
                                    <p>Tiêu chí cha:</p>
                                    <p></p>
                                </li>

                                <li className="item">
                                    <p>Trạng thái:</p>
                                    <p> <label className="switch_tatmo">
                                        <input type="checkbox"  />
                                            <span className="slider round"></span>
                                    </label></p>
                                </li>
                                <li className="item hidden">
                                    <p>Người tạo:</p>
                                    <p> Mặc định</p>
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
                                    <p>29/07/2023</p>
                                </li>
                                <li className="item">
                                    <p>Số điểm:</p>
                                    <p>10</p>
                                </li>
                                <li className="item ">
                                    <p>Ghi chú:</p>

                                    <p>___</p>
                                </li>
                            </ul>
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