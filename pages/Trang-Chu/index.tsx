
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nav_1 from '../img/nav_1.png';
import TrangChuPage from '@/public/assets/js/TrangchuPage';
import Header from '@/components/Header';
import axios from 'axios'
import { token } from '@/components/utils/constant';
const TrangChuClient = () => {
    const [data,setData] = useState<any>({})
    
    useEffect(() =>{
        const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
        axios.get('http://210.245.108.202:3014/api/DGNL/TrangChu/Trang-Chu',config)
        .then(res =>{
            setData(res?.data?.data?.data);
            
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    return (
        <>
            <div className='main'>
                <Header />
                <div className="main_body color_b">
                    <div className="container_tongquan mb_20">
                        <div className="title_header ">
                            <p>Trang chủ</p>
                        </div>
                        <h4 className="header_tongquan font_ss16 font_wB mb_20 ">Tổng quan</h4>
                        <div className="body_tongquan">
                            <div className="container container_tongquan d_flex space_b width_100 flex_wrap mb_20">
                                <div className="item item_chucnang d_flex flex_d_c space_b">
                                    <div className="Image">
                                        <Image src={TrangChuPage.tongquan_1} alt="Tổng quan 1" width={20} height={26} />
                                    </div>
                                    <Link href="/De-Danh-Gia-Nang-Luc" className="font_ss16 font_w5">Đề đánh
                                        giá năng lực nhân viên</Link>
                                    <p className="font_s14"><span className="mr_5">{data?.num_dedg}</span><span>Mẫu</span></p>
                                </div>
                                <div className="item item_chucnang  d_flex flex_d_c space_b">
                                    <div className="Image">
                                        <Image src={TrangChuPage.tongquan_4} alt="Tổng quan 2" width={20} height={26} />
                                    </div>
                                    <Link href="/De-Kiem-Tra-Nang-Luc" className="font_ss16 font_w5">Đề kiểm tra năng lực nhân viên</Link>
                                    <p className="font_s14"><span className="mr_5">{data?.num_dekt}</span><span>Mẫu</span></p>
                                </div>
                                <div className="item item_chucnang d_flex flex_d_c space_b">
                                    <div className="Image">
                                        <Image src={TrangChuPage.tongquan_5} alt="Tổng quan 3" width={20} height={26} />
                                    </div>
                                    <Link href="/Ke-Hoach-Danh-Gia" className="font_ss16 font_w5">Kế hoạch
                                        đánh giá</Link>
                                    <p className="font_s14"><span className="mr_5">{data?.num_kh}</span><span>Mẫu</span></p>
                                </div>
                                <div className="item item_chucnang d_flex flex_d_c space_b">
                                    <div className="Image">
                                        <Image src={TrangChuPage.tongquan_6} alt="Tổng quan 4" width={20} height={26} />
                                    </div>
                                    <Link href="/Phieu-Danh-Gia" className="font_ss16 font_w5">Tổng số phiếu
                                        đánh giá</Link>
                                    <p className="font_s14"><span className="mr_5">{data?.num_phieu}</span><span>Mẫu</span></p>
                                </div>
                                <div className="item item_chucnang d_flex flex_d_c space_b">
                                    <div className="Image">
                                        <Image src={TrangChuPage.tongquan_3} alt="Tổng quan 5" width={20} height={26} />
                                    </div>
                                    <Link href="/Ket-Qua-Nhan-Vien" className="font_ss16 font_w5">Đánh giá đã
                                        thực hiện</Link>
                                    <p className="font_s14"><span className="mr_5">{data?.num_phieu_hth}</span><span>Mẫu</span></p>
                                </div>
                                <div className="item item_chucnang d_flex flex_d_c space_b">
                                    <div className="Image">
                                        <Image src={TrangChuPage.tongquan_2} alt="Tổng quan 6" width={20} height={26} />
                                    </div>
                                    <Link href="/Lo-Trinh-Thang-Tien" className="font_ss16 font_w5">Lộ trình thăng
                                        tiến</Link>
                                    <p className="font_s14"><span className="mr_5">{data?.lotrinhthangtien}</span><span>Mẫu</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_tongquan mb_20">

                        <div className="container_tongquan ">
                            <h4 className="header_tongquan font_ss16 font_wB mb_20 ">Ưu điểm vượt trội của hệ sinh
                                thái
                                Chuyển đổi số 365 </h4>
                            <div className="body_tongquan">
                                <div className="container container_uudiem d_flex width_100  flex_wrap space_b mb_20">
                                    <div className="item item_uudiem d_flex flex_d_c space_b">
                                        <div className="cont font_s18 ">
                                            <Image src={TrangChuPage.uu4} alt="Ưu điểm" />
                                            <p className="font_wB mt_15 mb_10">An toàn và bảo mật</p>
                                            <p className="text_just font_ss16">An toàn, bảo mật tuyệt đối, dữ liệu
                                                được lưu
                                                trữ theo mô hình điện thoán đám mây.</p>
                                        </div>
                                        <a target="_blank" href="https://chamcong.timviec365.vn/uu-diem-vuot-troi.html#antoan" className="chi_tiet d_flex space_b align_c">
                                            <p>Chi tiết</p>
                                            <div className="Image">
                                                <Image src={TrangChuPage.icon_next} alt="Chi tiết" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item item_uudiem d_flex flex_d_c space_b">
                                        <div className="cont font_s18">
                                            <Image src={TrangChuPage.uu3} alt="Ưu điểm" />
                                            <p className="font_wB mt_15 mb_10">Một nền tảng duy nhất</p>
                                            <p className="text_just font_ss16">Tích hợp tất cả các ứng dụng doanh
                                                nghiệp của
                                                bạn đang cần trên
                                                một
                                                nền tảng duy nhất.</p>
                                        </div>
                                        <a target="_blank" href="https://chamcong.timviec365.vn/uu-diem-vuot-troi.html#tichhop" className="chi_tiet d_flex space_b align_c">
                                            <p>Chi tiết</p>
                                            <div className="Image">
                                                <Image src={TrangChuPage.icon_next} alt="Chi tiết" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item item_uudiem d_flex flex_d_c space_b">
                                        <div className="cont font_s18">
                                            <Image src={TrangChuPage.uu2} alt="Ưu điểm" />
                                            <p className="font_wB mt_15 mb_10">Ứng dụng công nghệ AI</p>
                                            <p className="text_just font_ss16">Ứng dụng công nghệ AI tự nhận thức.
                                                Phân tích
                                                hành vi người dùng
                                                giải
                                                quyết toàn diện bài các toán đối với doanh nghiệp cụ thể.</p>
                                        </div>
                                        <a href="https://chamcong.timviec365.vn/uu-diem-vuot-troi.html#ungdung" target="_blank" className="chi_tiet d_flex space_b align_c">
                                            <p>Chi tiết</p>
                                            <div className="Image">
                                                <Image src={TrangChuPage.icon_next} alt="Chi tiết" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item item_uudiem d_flex flex_d_c space_b ">
                                        <div className="cont font_s18 ">
                                            <Image src={TrangChuPage.uu5} alt="Ưu điểm" />
                                            <p className="font_wB  mt_15 mb_10">Giải pháp số 1 Việt Nam</p>
                                            <p className="text_just font_ss16">Luôn đồng hành và hỗ trợ 24/7. Phù
                                                hợp với tất cả các tập đoàn xuyên quốc gia đến những công ty
                                                SME.</p>
                                        </div>
                                        <a href="https://chamcong.timviec365.vn/uu-diem-vuot-troi.html#donghanh" target="_blank" className="chi_tiet d_flex space_b align_c">
                                            <p>Chi tiết</p>
                                            <div className="Image">
                                                <Image src={TrangChuPage.icon_next} alt="Chi tiết" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item item_uudiem d_flex flex_d_c space_b">
                                        <div className="cont font_s18">
                                            <Image src={TrangChuPage.uu1} alt="Ưu điểm" />
                                            <p className="font_wB mt_15 mb_10">Sử dụng miễn phí trọn đời</p>
                                            <p className="text_just font_ss16">Miễn phí trọn đời đối với tất cả các
                                                doanh nghiệp đăng ký trong đại dịch covid-19.</p>
                                        </div>
                                        <a href="https://chamcong.timviec365.vn/uu-diem-vuot-troi.html#mienphi" target="_blank" className="chi_tiet d_flex space_b align_c">
                                            <p>Chi tiết</p>
                                            <div className="Image">
                                                <Image src={TrangChuPage.icon_next} alt="Chi tiết" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="div_them">
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

export default TrangChuClient;