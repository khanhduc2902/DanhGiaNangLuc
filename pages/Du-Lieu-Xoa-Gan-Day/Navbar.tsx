
import React from 'react';
import Image from 'next/image';
import TrangChuPage from '@/public/assets/js/TrangchuPage';
import { useState , useEffect } from 'react';
import Link from 'next/link';
import nav_1 from '@/public/assets/img/nav_1.png';
import back from '@/public/assets/img/back.png';
import XoaDuLieuArray from '@/components/arrayXoaDuLieu';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
const Header = (prop : any) => {
    const [checkMessage, setCheckMessage] = useState(true);
    const [checkNotice, setCheckNotice] = useState(true);
    const [checkRemind, setCheckRemind] = useState(true);
    const [toggle, setToggle] = useState(true);
    const showPopUpMessage = () => {
        console.log('check')
        setCheckMessage(checkMessage => !checkMessage)
        setCheckNotice(true)
        setCheckRemind(true)
        setShowUser(true)
        setToggle(true)

    }
    const showPopUpNotice = () => {
        setCheckNotice(checkNotice => !checkNotice)
        setCheckMessage(true)
        setCheckRemind(true)
        setShowUser(true)
        setToggle(true)

    }
    const showPopUpToggle = () => {
        setToggle(toggle => !toggle)
        setCheckMessage(true)
        setCheckRemind(true)
        setShowUser(true)
        setCheckNotice(true)

    }
    const showPopUpRemind = () => {
        setCheckRemind(checkRemind => !checkRemind)
        setCheckMessage(true)
        setCheckNotice(true)
        setShowUser(true)
        setToggle(true)

    }
    const [showUser, setShowUser] = useState(true)
    const handleshowUser = () => {
        setShowUser(!showUser)
        setCheckMessage(true)
        setCheckNotice(true)
        setCheckRemind(true)
    }
    const [url, setURL] = useState('');
    const namePath = usePathname()
    const [title,setTitle] =useState('')
    const router =useRouter()
    /* custom router phan quyen */
    
    useEffect(() => {
        // Find the item in titleArray that matches the namePath
        const matchedItem = XoaDuLieuArray.find(item => item.id === namePath);
    
        if (matchedItem) {
          // Set the title based on the matched item's name
          setTitle(matchedItem.name);
        }
      }, []); // Empty dependency array to ensure this effect runs only once on mount
      
    return (
        <>
                <div className={`${'sidebar open_toggle'}${toggle ? "" : " set_opentogg"}`}>
                {
                        (localStorage.getItem('title') === 'staff') ? (
                            <Navbar title={0}/>
                        ):(
                            <Navbar title={1}/>
                        )
                    }
                    
                </div>

                <div className="header">
                    <div className='box_header d_flex space_b align_c position_r'>
                        <div className="title_header flex center-height max-lg:hidden">
                            <Link href={prop.urlBack}>
                                <div className="flex center-height right-10 c-pointer">
                                    <Image src={back} alt="Quay lai" />
                                </div>
                            </Link>
                            <p>{
                                (namePath.startsWith('/Phan-Quyen')) ? (
                                    'Phân quyền / '+prop.specName
                                    ):
                                (title)
                            
                            }</p>
                        </div> 
                        
                        
                        <div className="header_right d_flex flex_end align_c">
                            <div className="header_icon_left" onClick={showPopUpToggle}>
                                <div className="">
                                    <Image src={nav_1} alt="menu" 
                                        
                                    />
                                </div>
                            </div>
                            <div className="flex_grow1024"></div>
                            <div className="header_icon d_flex align_c ">
                                <div className="icon_thongbao" id="icon_nhantin">
                                    <div className="Image_icon position_r">
                                        <Image src={TrangChuPage.nav_11} alt="..." className="img_1024" />

                                        <Image src={TrangChuPage.icon_tinnhan} alt=" tin nhắn" className="img_pc" />
                                        <span className="sl_tb color_t position_a d_flex align_c space_around"
                                            onClick={showPopUpMessage}
                                        >2</span>
                                    </div>
                                </div>
                                <div className="icon_thongbao" id="icon_nhacnho">
                                    <div className="Image_icon position_r ">
                                        <Image src={TrangChuPage.nav_12} alt="nhắc nhở" className="img_1024" />
                                        <Image src={TrangChuPage.icon_nhacnho} alt="nhắc nhở" className="img_pc" />
                                        <span className={`sl_tb color_t position_a d_flex align_c space_around`} onClick={showPopUpRemind}>2</span>
                                    </div>
                                </div>
                                <div className="icon_thongbao" id="icon_thongbao">
                                    <div className="Image_icon position_r ">
                                        <Image src={TrangChuPage.nav_13} alt="thông báo" className="img_1024" />
                                        <Image src={TrangChuPage.icon_thongbao} alt="thông báo" className="img_pc" />
                                        <span className="sl_tb color_t position_a d_flex align_c space_around" onClick={showPopUpNotice}>2</span>
                                    </div>
                                </div>
                                <div className="header_tt position_r">
                                    <div className="logout btn_logout d_flex align_c">
                                        <div className="d_flex align_c img_pc" onClick={handleshowUser}>
                                            <Image src="" alt="anhr" width={32} height={32} className="mr_8 wh32 br50 " />
                                            <p className="font_ss16 position_r mr_12">Vũ Hoàng Anh</p>
                                            <p className="font_ss16 font_w5 mr_8">945323</p>
                                            <Image src={TrangChuPage.icon_so} alt="Chọn" width={13} height={8}
                                            />
                                        </div>
                                        <Image src={TrangChuPage.nav_14} alt="logout" className="img_1024" onClick={handleshowUser}
                                        />
                                    </div>
                                    <div className={`${showUser ? "modal_d modal_menu_header position_a" : "modal_d modal_menu_header position_a block"}`}>
                                        <div className="container">
                                            <div className="item">
                                                <Image src={TrangChuPage.menu_1} alt="Thông tin tài khoản" width={15} height={16} />
                                                <Link className="color_b" href="/Trang-Chu/Quan-Li-Thong-Tin">Thông tin tài khoản</Link>

                                            </div>

                                            <div className="item">
                                                <Image src={TrangChuPage.menu_3} alt="Báo lỗi" width={15} height={16} />
                                                <p>Báo lỗi</p>
                                            </div>
                                            <div className="item">
                                                <Image src={TrangChuPage.menu_4} alt="Hướng dẫn" width={15} height={16} />
                                                <a href="/huong_dan.html" className="color_b" >Hướng dẫn<p></p>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <Image src={TrangChuPage.menu_5} alt="Đăng xuất" width={15} height={16} />
                                            
                                                <button type='button' className="color_b" onClick={()=>{sessionStorage.removeItem('title'), router.reload()}}>Đăng xuất</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${checkNotice ? "popup_tb_nc position_a" : "popup_tb_nc position_a block"}`} id="popup_thongbao">
                            <div className=" border_r10">
                                <div className="popup_tb_nc_header d_flex space_b ">
                                    <p className="p_title_tb color_x font_w500">Thông báo</p>
                                    <span className="dau_x d_flex align_c hide_nn_tb"
                                    ><Image src="" alt="" layout="responsive" /></span>
                                </div>
                                <div className="popup_tb_nc_body">
                                    <div className="popup_tb_nn_main">
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Nhóm bán hàng 1]</p>
                                                <p className="p_tb_nn2 color_x"><b className="font_w500">Nguyễn Trần Trung Quân </b>
                                                    vừa tạo 1 đơn hàng <b className="font_w500">DH000001</b></p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Nhóm bán hàng 1]</p>
                                                <p className="p_tb_nn2 color_x"><b className="font_w500">Nguyễn Trần Trung Quân </b>
                                                    vừa tạo 1 đơn hàng <b className="font_w500">DH000001</b></p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Nhóm bán hàng 1]</p>
                                                <p className="p_tb_nn2 color_x"><b className="font_w500">Nguyễn Trần Trung Quân </b>
                                                    vừa tạo 1 đơn hàng <b className="font_w500">DH000001</b></p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Nhóm bán hàng 1]</p>
                                                <p className="p_tb_nn2 color_x"><b className="font_w500">Nguyễn Trần Trung Quân </b>
                                                    vừa tạo 1 đơn hàng <b className="font_w500">DH000001</b></p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Nhóm bán hàng 1]</p>
                                                <p className="p_tb_nn2 color_x"><b className="font_w500">Nguyễn Trần Trung Quân </b>
                                                    vừa tạo 1 đơn hàng <b className="font_w500">DH000001</b></p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_tb_nc_footer back_w ">
                                    <p className="font_14 line_h16 color_blue p_tb_nc_footer text_c">Đánh dấu đã xem tất cả</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${checkRemind ? "popup_tb_nc position_a" : "popup_tb_nc position_a block"}`} id="popup_nhacnho">
                            <div className=" border_r10">
                                <div className="popup_tb_nc_header d_flex space_b align_c back_w">
                                    <p className="p_title_tb color_x font_w500">
                                        Nhắc nhở
                                    </p>
                                    <span className="dau_x d_flex align_c hide_nn_tb"><Image src="" alt="" layout="responsive" /></span>
                                </div>
                                <div className="popup_tb_nc_body">
                                    <div className="popup_tb_nn_main">
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Vấn đề]</p>
                                                <p className="p_tb_nn2 color_x">Vấn đề <b className="font_w500">Bảo hành máy -
                                                    000001 </b> sắp quá hạn! </p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Kho]</p>
                                                <p className="p_tb_nn2 color_x">Sản phẩm <b className="font_w500">Bánh mì - 0000001 </b> trong kho sắp
                                                    hết! </p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Vấn đề]</p>
                                                <p className="p_tb_nn2 color_x">Vấn đề <b className="font_w500">Bảo hành máy - 000001 </b> sắp quá hạn!
                                                </p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Kho]</p>
                                                <p className="p_tb_nn2 color_x">Sản phẩm <b className="font_w500">Bánh mì - 0000001 </b> trong kho sắp
                                                    hết! </p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Vấn đề]</p>
                                                <p className="p_tb_nn2 color_x">Vấn đề <b className="font_w500">Bảo hành máy - 000001 </b> sắp quá hạn!
                                                </p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                        <div className="item_tb_nn d_flex space_b ">
                                            <div className="Imageitem_tb_nn  ">
                                                <Image src="" alt="" layout="responsive" />
                                            </div>
                                            <div className="text_item_tb_nn">
                                                <p className="p_tb_nn1 color_x font_w500">[Kho]</p>
                                                <p className="p_tb_nn2 color_x">Sản phẩm <b className="font_w500">Bánh mì - 0000001 </b> trong kho sắp
                                                    hết! </p>
                                                <p className="p_tb_nn_time ">8:00, 20/05/2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_tb_nc_footer back_w ">
                                    <p className="font_14 line_h16 color_blue p_tb_nc_footer text_c">Đánh dấu đã xem tất cả</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${checkMessage ? "popup_tb_nc position_a" : "popup_tb_nc position_a block"}`} id="popup_tinnhan" >
                            <div className=" border_r10">
                                <div className="popup_tb_nc_header d_flex space_b align_c back_w">
                                    <div className="d_flex flex_start">
                                        <p className="p_title_tn color_x font_w500 cursor active" >
                                            Tin nhắn
                                        </p>
                                        <p className="p_title_tn color_x font_w500 cursor" >
                                            Danh bạ
                                        </p>
                                    </div>
                                    <div className="d_flex flex_start">
                                        <a className="dau_x d_flex align_c cursor show_trangtin" href="nhan-tin.html" target="_blank"><Image src="" alt="" /></a>
                                        <span className="dau_x d_flex align_c cursor hide_nn_tb"><Image src="" alt="" layout="responsive" /></span>
                                    </div>
                                </div>
                                <div className="popup_md_tinnhan ds_tn_db">
                                    <div className="box_modal_tinnhan">
                                        <div className="search_tn_md">
                                            <div className="position_r w_100">
                                                <input type="text" className="input_search_md" placeholder="Tìm kiếm trên chat" />
                                                <span className="span_ababab"></span>
                                            </div>
                                        </div>
                                        <p className="cuoc_tr_ch color_x font_s16 line_h19">Trò chuyện gần đây</p>
                                        <div className="list_item_tinnhan">
                                            <div className="item_tinnhan d_flex show_icon_nhacnho ">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                    <span className="position_a tn_status d_flex space_around align_c back_w">
                                                        <span className="back_green d_flex"></span>
                                                    </span>
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>
                                                    <p className="mess">hello word</p>
                                                </div>
                                                <div className="d_flex thoigian">
                                                    <p>10:07 AM</p>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan d_flex show_icon_nhacnho">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                    <span className="position_a tn_status d_flex space_around align_c back_w">
                                                        <span className="back_green d_flex"></span>
                                                    </span>
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>
                                                    <p className="mess">hello word</p>
                                                </div>
                                                <div className="d_flex thoigian">
                                                    <p>10:07 AM</p>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan d_flex show_icon_nhacnho">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                    <span className="position_a tn_status d_flex space_around align_c back_w">
                                                        <span className="back_v d_flex"></span>
                                                    </span>
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>
                                                    <p className="mess">hello word</p>
                                                </div>
                                                <div className="d_flex thoigian">
                                                    <p>10:07 AM</p>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan d_flex show_icon_nhacnho">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                    <span className="position_a tn_status d_flex space_around align_c back_w">
                                                        <span className="back_green d_flex"></span>
                                                    </span>
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>
                                                    <p className="mess">hello word</p>
                                                </div>
                                                <div className="d_flex thoigian">
                                                    <p>10:07 AM</p>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan d_flex show_icon_nhacnho">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                    <span className="position_a tn_status d_flex space_around align_c back_w">
                                                        <span className="back_green d_flex"></span>
                                                    </span>
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>
                                                    <p className="mess">hello word</p>
                                                </div>
                                                <div className="d_flex thoigian">
                                                    <p>10:07 AM</p>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan d_flex show_icon_nhacnho">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                    <span className="position_a tn_status d_flex space_around align_c back_w">
                                                        <span className="back_green d_flex"></span>
                                                    </span>
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>
                                                    <p className="mess">hello word</p>
                                                </div>
                                                <div className="d_flex thoigian">
                                                    <p>10:07 AM</p>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan d_flex show_icon_nhacnho">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                    <span className="position_a tn_status d_flex space_around align_c back_w">
                                                        <span className="back_green d_flex"></span>
                                                    </span>
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>
                                                    <p className="mess">hello word</p>
                                                </div>
                                                <div className="d_flex thoigian">
                                                    <p>10:07 AM</p>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan d_flex show_icon_nhacnho">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                    <span className="position_a tn_status d_flex space_around align_c back_w">
                                                        <span className="back_green d_flex"></span>
                                                    </span>
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>
                                                    <p className="mess">hello word</p>
                                                </div>
                                                <div className="d_flex thoigian">
                                                    <p>10:07 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_md_danhba ds_tn_db">
                                    <div className="box_modal_tinnhan">
                                        <div className="search_tn_md">
                                            <div className="position_r w_100">
                                                <input type="text" className="input_search_md input_search_db" placeholder="Tìm kiếm trên chat" />
                                                <span className="span_ababab"></span>
                                            </div>
                                        </div>
                                        <div className="box_show_search">
                                            <div className="d_flex space_b align_c box_text_db">
                                                <p className="p_danhba1 color_x">Kết quả</p>
                                                <p className="color_r p_danhba2">Hủy lọc</p>
                                            </div>
                                            <div className="item_tinnhan item_tn_db d_flex align_c">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>

                                                </div>
                                                <div className="d_flex thoigian align_c ">
                                                    <span className="status_to d_flex back_v"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list_item_tinnhan">
                                            <div className="item_tinnhan item_tn_db d_flex align_c">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>

                                                </div>
                                                <div className="d_flex thoigian align_c ">
                                                    <span className="status_to d_flex back_v"></span>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan item_tn_db d_flex align_c">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>

                                                </div>
                                                <div className="d_flex thoigian align_c ">
                                                    <span className="status_to d_flex back_v"></span>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan item_tn_db d_flex align_c">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>

                                                </div>
                                                <div className="d_flex thoigian align_c ">
                                                    <span className="status_to d_flex back_v"></span>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan item_tn_db d_flex align_c">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>

                                                </div>
                                                <div className="d_flex thoigian align_c ">
                                                    <span className="status_to d_flex back_v"></span>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan item_tn_db d_flex align_c">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>

                                                </div>
                                                <div className="d_flex thoigian align_c ">
                                                    <span className="status_to d_flex back_v"></span>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan item_tn_db d_flex align_c">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>

                                                </div>
                                                <div className="d_flex thoigian align_c ">
                                                    <span className="status_to d_flex back_v"></span>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan item_tn_db d_flex align_c">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>

                                                </div>
                                                <div className="d_flex thoigian align_c ">
                                                    <span className="status_to d_flex back_v"></span>
                                                </div>
                                            </div>
                                            <div className="item_tinnhan item_tn_db d_flex align_c">
                                                <div className="Image_tn position_r">
                                                    <Image src="" alt="" layout="responsive" />
                                                </div>
                                                <div className="tinnhan_modal">
                                                    <p className="name">Haha madrid</p>
                                                </div>
                                                <div className="d_flex thoigian align_c ">
                                                    <span className="status_to d_flex back_v"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_footer_tn back_w ">
                                    <p className="font_14 line_h16 color_x font_wB text_c">Xem tất cả trong tin nhắn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            


        </>
    );
};
export default Header;