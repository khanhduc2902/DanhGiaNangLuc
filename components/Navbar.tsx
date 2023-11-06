
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import sidebar1 from '@/public/assets/img/sidebar_1.png';
import sidebar5 from '@/public/assets/img/sidebar_5.png';
import sidebar6 from '@/public/assets/img/sidebar_6.png';
import sidebar7 from '@/public/assets/img/sidebar_7.png';
import sidebar9 from '@/public/assets/img/sidebar_9.png';
import sidebar10 from '@/public/assets/img/sidebar_10.png';
import sidebar11 from '@/public/assets/img/sidebar_11.png';
import sidebar_2 from '@/public/assets/img/sidebar_2.png'
import sidebar_3 from '@/public/assets/img/sidebar_3.png'
import sidebar_4 from '@/public/assets/img/sidebar_4.png'
import sidebar_8 from '@/public/assets/img/sidebar_8.png'
import logo from '@/public/assets/img/logo.png';


interface CheckToggle {
    value: boolean;
}

const Navbar = (prop: any) => {
    
    /* on off popup navbar */
    const [onKQ, setOnKQ] = useState(true)
    const [onDG, setOnDG] = useState(true)
    const [onKT, setOnKT] = useState(true)
    const pathname = usePathname()
    /* de danh gia */
    useEffect(() => {
        if (pathname.includes('/De-Danh-Gia-Nang-Luc') || pathname.startsWith('/Quan-Li-Tieu-Chi-Danh-Gia')) {
          setOnDG(false);
          setOnKT(true)
          setOnKQ(true)
        } 
        else if (pathname.startsWith('/De-Kiem-Tra-Nang-Luc') || pathname.startsWith('/Loai-Cau-Hoi') || pathname.startsWith('/Danh-Sach-Cau-Hoi') ) {
            setOnKT(false);
            setOnDG(true)
            setOnKQ(true)
          } else if (pathname.startsWith('/Ket-Qua-Nhan-Vien') || pathname.startsWith('/Ket-Qua-Danh-Gia-Phong-Ban')) {
            setOnKQ(false);
            setOnDG(true)
            setOnKT(true)
          } else{
            setOnDG(true);
            setOnKT(true)
            setOnKQ(true)
          }
      }, [pathname]);
    
    
    return (
        <>
            <div className="sidebar_ttcn d_flex align_c content_c ">
                <a href="https://timviec365.vn/" className="img_sidebar">
                    <Image alt="" src={logo} width={168} height={37} />
                </a>
            </div>
            <div className="side_body">
                <div className="ul_sidebar">
                    <div className="sidebar_item sidebar_item_don active">
                        <Link href='/Trang-Chu'>
                            <div className={`${"li_sidebar hover:bg-customColor_active"} ${pathname.startsWith('/Trang-Chu') ? 'bg-customColor_active' : 'bg-customColor'}`} >
                                <div className="item_sidebar d_flex flex_star  ">
                                    <div className="img_li d_flex space_around align_c">
                                        <Image alt="" src={sidebar1} />
                                    </div>
                                    <p className="p_item_sidebar font_ss16 font_w5">Trang chủ</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {
                        prop.title === 1 ?
                            (
                                <>
                                    <div className="sidebar_item sidebar_item_kep ">
                                        <div className="li_sidebar className_li_side_bar sidebar_item_don">
                                            <div className="item_sidebar item_sidebar_cha d_flex flex_star ">
                                                <div className="img_li d_flex space_around align_c">
                                                    <Image alt="" src={sidebar_2} />
                                                </div>
                                                <p className="p_item_sidebar font_ss16 font_w5" onClick={() => setOnDG(!onDG)}>Đề đánh giá năng lực</p>
                                            </div>
                                        </div>
                                        <ul id="ketqua_tong_menu" className={onDG ? `${'hidden'}` : `${"sidebar_sub hopdong_sub position_r"} ${'block'}`}>
                                            <li id="kq_nv_menu" className={`${"sidebar_sub_item d_flex align_c sidebar_item_don "} ${pathname.startsWith('/Quan-Li-Tieu-Chi-Danh-Gia') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                                <div className={`${"point"} ${pathname.startsWith('/Quan-Li-Tieu-Chi-Danh-Gia') ? 'bg-white' : ''}`}></div>
                                                <Link href="/Quan-Li-Tieu-Chi-Danh-Gia" className="p_item_sidebar font_ss16 font_w5">Danh sách tiêu chí đánh giá
                                                </Link>
                                            </li>
                                            <li id="kq_pb_menu" className={`${"sidebar_sub_item d_flex align_c sidebar_item_don "} ${pathname.startsWith('/De-Danh-Gia-Nang-Luc') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                                <div className={`${"point"} ${pathname.startsWith('/De-Danh-Gia-Nang-Luc') ? 'bg-white' : ''}`}></div>
                                                <Link href="/De-Danh-Gia-Nang-Luc" className="p_item_sidebar font_ss16 font_w5">Đề đánh giá năng lực
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar_item sidebar_item_kep ">
                                        <div className="li_sidebar className_li_side_bar sidebar_item_don">
                                            <div className="item_sidebar item_sidebar_cha d_flex flex_star ">
                                                <div className="img_li d_flex space_around align_c">
                                                    <Image alt="" src={sidebar_3} />
                                                </div>
                                                <p className="p_item_sidebar font_ss16 font_w5" onClick={() => setOnKT(!onKT)}>Đề kiểm tra năng lực</p>
                                            </div>
                                        </div>
                                        <ul id="ketqua_tong_menu" className={onKT ? `${'hidden'}` : `${"sidebar_sub position_r banggia_sub_1"} ${'block'}`}>
                                            <li id="kq_nv_menu" className={`${"sidebar_sub_item d_flex align_c sidebar_item_don "} ${pathname.startsWith('/Loai-Cau-Hoi') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                                <div className={`${"point"} ${pathname.startsWith('/Loai-Cau-Hoi') ? 'bg-white' : ''}`}></div>
                                                <Link href="/Loai-Cau-Hoi" className="p_item_sidebar font_ss16 font_w5">Loại câu hỏi
                                                    viên</Link>
                                            </li>
                                            <li id="kq_pb_menu" className={`${"sidebar_sub_item d_flex align_c sidebar_item_don "} ${pathname.startsWith('/Danh-Sach-Cau-Hoi') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                                <div className={`${"point"} ${pathname.startsWith('/Danh-Sach-Cau-Hoi') ? 'bg-white' : ''}`}></div>
                                                <Link href="/Danh-Sach-Cau-Hoi" className="p_item_sidebar font_ss16 font_w5">Danh sách câu hỏi
                                                    ban</Link>
                                            </li>

                                            <li id="kq_pb_cuatoi" className={`${"sidebar_sub_item d_flex align_c sidebar_item_don "} ${pathname.startsWith('/De-Kiem-Tra-Nang-Luc') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                                <div className={`${"point"} ${pathname.startsWith('/De-Kiem-Tra-Nang-Luc') ? 'bg-white' : ''}`}></div>
                                                <Link href="/De-Kiem-Tra-Nang-Luc" className="p_item_sidebar font_ss16 font_w5">Đề kiểm tra năng lực</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="phieu_menu" className="sidebar_item sidebar_item_don  ">
                                        <Link href="/Ke-Hoach-Danh-Gia" className="item_sidebar item_sidebar_cha d_flex flex_star">
                                            <div className={`${"li_sidebar"} ${pathname.startsWith('/Ke-Hoach-Danh-Gia') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                                <div className="img_li d_flex space_around align_c">
                                                    <Image alt="" src={sidebar_4} width={22} height={22} />
                                                </div>
                                                <p className="p_item_sidebar font_ss16 font_w5">kế hoạch đánh giá</p>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            ) : (<></>)
                    }

                    <div id="phieu_menu" className="sidebar_item sidebar_item_don  ">
                        <Link href="/Phieu-Danh-Gia" className="item_sidebar item_sidebar_cha d_flex flex_star">
                            <div className={`${"li_sidebar hover:bg-customColor_active"} ${pathname.startsWith('/Phieu-Danh-Gia') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                <div className="img_li d_flex space_around align_c">
                                    <Image alt="" src={sidebar5} width={22} height={22} />
                                </div>
                                <p className="p_item_sidebar font_ss16 font_w5">Phiếu đánh giá</p>
                            </div>
                        </Link>
                    </div>

                    <div className="sidebar_item sidebar_item_kep ">
                        <div className="li_sidebar className_li_side_bar sidebar_item_don">
                            <div className="item_sidebar item_sidebar_cha d_flex flex_star ">
                                <div className="img_li d_flex space_around align_c">
                                    <Image alt="" src={sidebar6} width={20} height={22} />
                                </div>
                                <p className="p_item_sidebar font_ss16 font_w5" onClick={() => setOnKQ(!onKQ)}>Kết quả đánh giá</p>
                            </div>
                        </div>
                        <ul id="ketqua_tong_menu" className={`${prop.title === 1 ? 'set_banggia_sub1 ' : 'banggia_sub_1 '}${onKQ ? 'hidden' : "sidebar_sub position_r block"} `}>
                            <li id="kq_nv_menu" className={`${"sidebar_sub_item d_flex align_c sidebar_item_don "} ${pathname.startsWith('/Ket-Qua-Nhan-Vien') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                <div className={`${"point"} ${pathname.startsWith('/Ket-Qua-Nhan-Vien') ? 'bg-white' : ''}`}></div>
                                <Link href="/Ket-Qua-Nhan-Vien" className="p_item_sidebar font_ss16 font_w5">Kết quả nhân
                                    viên</Link>
                            </li>
                            <li id="kq_pb_menu" className={`${"sidebar_sub_item d_flex align_c sidebar_item_don "} ${pathname.startsWith('/Ket-Qua-Danh-Gia-Phong-Ban') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                <div className={`${"point"} ${pathname.startsWith('/Ket-Qua-Danh-Gia-Phong-Ban') ? 'bg-white' : ''}`}></div>
                                <Link href="/Ket-Qua-Danh-Gia-Phong-Ban" className="p_item_sidebar font_ss16 font_w5">Kết quả phòng
                                    ban</Link>
                            </li>
                            {
                                prop.title === 0 ? (
                                    <li id="kq_pb_cuatoi" className={`${"sidebar_sub_item d_flex align_c sidebar_item_don "} ${pathname.startsWith('/Ket-Qua-Danh-Gia-Cua-Toi') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                        <div className={`${"point"} ${pathname.startsWith('/Ket-Qua-Danh-Gia-Cua-Toi') ? 'bg-white' : ''}`}></div>
                                        <Link href="/Ket-Qua-Danh-Gia-Cua-Toi" className="p_item_sidebar font_ss16 font_w5">Kết quả của tôi</Link>
                                    </li>
                                ):(<></>)
                            }
                            
                        </ul>
                    </div>

                    <div id="lotrinh_menu" className="sidebar_item sidebar_item_don ">
                        <Link href="/Lo-Trinh-Thang-Tien">
                            <div className={`${"li_sidebar hover:bg-customColor_active"} ${pathname.startsWith('/Lo-Trinh-Thang-Tien') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                <div className="item_sidebar d_flex flex_star ">
                                    <div className="img_li d_flex space_around align_c">
                                        <Image alt="" src={sidebar7} width={22} height={22} />
                                    </div>
                                    <p className="p_item_sidebar font_ss16 font_w5">Lộ trình thăng tiến</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    {
                        prop.title === 1 ?
                            (<div id="phieu_menu" className="sidebar_item sidebar_item_don  ">
                                <Link href="/Phan-Quyen" className="item_sidebar item_sidebar_cha d_flex flex_star">
                                    <div className={`${"li_sidebar hover:bg-customColor_active"} ${pathname.startsWith('/Phan-Quyen') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                        <div className="img_li d_flex space_around align_c">
                                            <Image alt="" src={sidebar_8} width={22} height={22} />
                                        </div>
                                        <p className="p_item_sidebar font_ss16 font_w5">Phân quyền</p>
                                    </div>
                                </Link>
                            </div>) : (<></>)
                    }
                    <div className="sidebar_item sidebar_item_don   ">

                        <Link href="/Du-Lieu-Xoa-Gan-Day">
                            <div className={`${"li_sidebar hover:bg-customColor_active"} ${pathname.startsWith('/Du-Lieu-Xoa-Gan-Day') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                <div className="item_sidebar d_flex flex_star ">
                                    <div className="img_li d_flex space_around align_c">
                                        <Image alt="" src={sidebar9} width={18} height={22} />
                                    </div>
                                    <p className="p_item_sidebar font_ss16 font_w5">Dữ liệu đã xóa gần đây</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className="sidebar_item sidebar_item_don  ">

                        <Link href="/Cai-Dat">
                            <div className={`${"li_sidebar hover:bg-customColor_active"} ${pathname.startsWith('/Cai-Dat') ? 'bg-customColor_active' : 'bg-customColor'}`}>
                                <div className="item_sidebar d_flex flex_star ">
                                    <div className="img_li d_flex space_around align_c">
                                        <Image alt="" src={sidebar10} width={20} height={22} />
                                    </div>
                                    <p className="p_item_sidebar font_ss16 font_w5">Cài đặt</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className="sidebar_item sidebar_item_don ">

                        <Link target="_blank" href="https://quanlychung.timviec365.vn/">
                            <div className="li_sidebar hover:bg-customColor_active">
                                <div className="item_sidebar d_flex flex_star ">
                                    <div className="img_li d_flex space_around align_c">
                                        <Image alt="" src={sidebar11} width={20} height={22} />
                                    </div>
                                    <p className="p_item_sidebar font_ss16 font_w5">Chuyển đổi số 365</p>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;