import React from 'react';
import Image from 'next/image';
import user from '@/app/assets/img/user.png'
import Header from '@/components/Header';


const profile = () => {
    return (
        <>
        <div className='main'>
        <Header />
        <div className="ctn_right_qly ">
            <div className="ctn_res_qly">
                <div className="left_header_qly">
                    <p className="share_clr_one font_14">Thông tin tài khoản</p>
                </div>
                <div className="list_all_qly">
                    <div className="main_tt main_tt_taikhoan_ct">
                        <div className="container_taikhoan">
                            <div className="item dd_flex">
                                <div className="avt_taikhoan ">
                                    <div className="container_avt">
                                        <div className="position_r text_a_c com_log_n">
                                            <Image src=""
                                                alt="" className="img_avt" id="myimage" />
                                            <Image src="" alt=""
                                                className="img_mayanh position_a" />
                                            <input type="file" className="img_taianh display_none"
                                            />
                                            <Image className="img_avt" id="lgr945323" src="" alt=''/>
                                            <Image src="" className="img_mayanh position_a" alt=''/>
                                            <input type="file" id="avar945323" />
                                            </div>

                                        <p className="id">ID - 945323</p>
                                    </div>
                                </div>
                                <div className="info_taikhoan">
                                    <div className="cont">
                                        <p className="d_title font_20">Vũ Hoàng Anh</p>
                                        <p className="d_title font_18">CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ </p>
                                        <p className="d_title font_16">PHÒNG 14: TRUNG TÂM ĐÀO TẠO ỨNG VIÊN MỚI ĐẾN</p>
                                        <p className="d_title font_16">Tổ 1</p>
                                        <p className="d_title font_16">Nhóm 1</p> 
                                        <p className="content d_flex">
                                            <span className="font-size: 15px">Sinh viên thực tập</span>
                                        </p>
                                        <p className="content d_flex">
                                            <span>Kinh nghiệm làm việc:</span>
                                            <span>Dưới 1 năm kinh nghiệm</span>
                                        </p>
                                        <p className="content d_flex">
                                            <span>Ngày bắt đầu làm việc:</span>
                                            <span>
                                                13/07/2023                                                    </span>
                                        </p>
                                        <p className="content d_flex">
                                            <span>Tài khoản đăng nhập:</span>
                                            <span>0981579271</span>
                                        </p>
                                        <p className="content d_flex">
                                            <span>Số điện thoại:</span>
                                            <span>0981579271</span>
                                        </p>
                                        <p className="content d_flex">
                                            <span>Ngày sinh:</span>
                                            <span>01/01/2002</span>
                                        </p>
                                        <p className="content d_flex">
                                            <span>Giới tính:</span>
                                            <span>Nam</span>
                                        </p>
                                        <p className="content d_flex">
                                            <span>Trình độ học vấn:</span>
                                            <span>Đại học</span>
                                        </p>
                                        <p className="content d_flex">
                                            <span>Địa chỉ:</span>
                                            <span>Phùng Khoang, Hà Đông</span>
                                        </p>
                                        <p className="content d_flex">
                                            <span>Tình trạng hôn nhân:</span>
                                            <span>Độc thân</span>
                                        </p>
                                    </div>
                                    <div className="d_flex container_btn">
                                        <a href="/chinh-sua-thong-tin-tai-khoan-nhan-vien.html"><button className="btn_d btn_168 btn_trang">Chỉnh sửa thông tin</button></a>
                                        <button className="btn_edit_mk btn_d btn_168 btn_xanh ">Đổi mật khẩu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default profile;