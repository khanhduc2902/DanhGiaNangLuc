
import React from 'react';
import { useState, ChangeEvent, useEffect } from 'react';
import imageFile from '@/public/assets/js/TrangchuPage'
import imageP from '@/public/assets/js/PhieuDanhGia'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import titleArray from '@/components/tester2';
import Link from 'next/link';
import icon_plus from '@/public/assets/img/icon_plus.png'
import style from '@/public/assets/css/bangChinh.module.css'
import icon_close from '@/public/assets/img/close.png'
import { add } from 'date-fns';
import icon_xoa from '@/public/assets/img/icon_xoa.png'
import icon_sua from '@/public/assets/img/icon_sua.png'
import ep_logo from '@/public/assets/img/ep_logo.png'
interface MyObject {
    // Định nghĩa các thuộc tính của object của bạn
    start: string;
    end: string;
    // ...
}
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
const arrayNumber = ['2', '5', '10', '20', '50', '100']
const searchState = ['Hoang Anh', 'tuan anh', ' viet hoang']
const PhieuDanhGia = () => {


    const [onstation, setOnstation] = useState(true)
    const handleOnStation = () => {
        setOnstation(!onstation)
        setOnOffKh(true)

    }

    const [titleState, setTitleSate] = useState('Tất cả trạng thái')
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(searchState);
    const handleSearch = (query: string) => {
        const filteredResults = searchState.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };
    const handleInputChange = (event: any) => {
        setSearchQuery(event.target.value);
        handleSearch(event.target.value);
    };
    const [keHoach, setKeHoach] = useState('Tìm kiếm theo tên loại câu hỏi')
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
    const [hienThi, setHienThi] = useState('10')
    const [onOfHT, setOnOfHT] = useState(true)

    /*title */
    const namePath = usePathname()
    const [titleName, setTitleName] = useState('')

    useEffect(() => {
        // Find the item in titleArray that matches the namePath
        const matchedItem = titleArray.find(item => item.id === namePath);
        if (matchedItem) {
            // Set the title based on the matched item's name
            setTitleName(matchedItem.name);
        }
    }, []);
    /* */
    const [pagination, setPagination] = useState(89)

    /* Mo ta loai cau hoi */
    const [ghiChu, setGhiChu] = useState('')
    const handleGhiChu = (event: any) => {
        setGhiChu(event.target.value)
    }
    /*Close Open pop up them moi loai cau hoi */
    const [addQues, setAddQues] = useState(true)
    const handleSaveQues = () => {
        setAddQues(!addQues)
    }
    const closeQues = () => {
        setAddQues(!addQues)
    }
    /* close open mo ta */
    const [moTa,setMoTa] =useState(true)
    const handleMoTa = () =>{
        setMoTa(!moTa)
    }
    /* Xoa loai cau hoi */
    const [xoaQues,setXoaQues] =useState(true)
    const handleXoaQues = () =>{
        setXoaQues(!xoaQues)
    }
    /* Chinh sua loai cau hoi */
    const [repairQues,setRepairQues] = useState(true)
    const handlerepairQues = () =>{
        setRepairQues(!repairQues)
    }
    const [alertDate, setAlertDate] = useState('')
    return (
        <div>
            <div className="main">
                <Header />
                <div className="main_body">

                    <p className="chuden size-14 tieude1024 bot-15">{titleName}</p>
                    <div className="search-qlnv justify-between">
                        <div className="khoi_left">
                            <div className="leftsearch select_no_muti ql_tieuchi_m">

                                <span className="select2 select2-container select2-container--default select2-container--below select2-container--open width_check100" dir="ltr" data-select2-id="select2-data-4-plru"><span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="true" tabIndex={0} aria-disabled="false" aria-labelledby="select2--container" aria-controls="select2--container" aria-owns="select2--results">
                                        <span className="select2-selection__rendered" id="select2--container" role="textbox" aria-readonly="true" title="Tìm kiếm theo tên kế hoạch đánh giá" onClick={() => { setOnOffKh(!onOfKh); setOnstation(true) }}>
                                            {keHoach}
                                        </span>
                                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                                    <span className={onOfKh ? 'hidden' : `${"dropdown-wrapper"} ${"relative z-20 flex justify-center "}`} >
                                        <ul id="" className={`${'absolute w-full bg-slate-100  py-2 mb-2 overflow-y-scroll h-52 snap-y border-b border-x border-slate-400 rounded-b-lg'} ${'displaynone_scroll'}`} >
                                            <li className='mx-2 mb-1'><input type='search' className='py-1 border-solid border outline-none border-slate-400 rounded-none' onChange={handleInputChangeKH} value={searchQueryKH} /></li>
                                            {
                                                filteredDataKH.map((item, index) => {
                                                    return (
                                                        <li key={index} className='cursor-pointer hover:bg-blue-400 hover:text-white p-1 text-sm py-2' onClick={() => {
                                                            setKeHoach(item);
                                                            setOnOffKh(!onOfKh)
                                                        }}>{item}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </span>
                                </span>
                                <Image src={imageP.kinhlup} className="kinhlup right-position-15" alt="timkiem" />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="them_moi max-sm:mb-6">
                                <button type='button' className="btn btn_xanh" onClick={closeQues}>
                                    <Image src={icon_plus} alt="Thêm mới" className="mr_10" />
                                    <p>Thêm mới</p>
                                </button>
                            </div>
                            <div className="tieude375">
                                <a href="/huong_dan.html#phieu" target="_blank" className="">
                                    <div className="huongdan flex center-height ">
                                        <Image src={imageP.chamhoi} className="wh36" alt="" />
                                        <p className="left-10 font-medium size-15">Hướng dẫn</p>
                                    </div>
                                </a>
                            </div>
                            <a href="/huong_dan.html#phieu" target="_blank" className="none375 ml-3">
                                <div className="huongdan flex center-height ">
                                    <Image src={imageP.chamhoi} className="wh36" alt="" />
                                    <p className="left-10 font-medium size-15">Hướng dẫn</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='body_ql_tieuchi body_ql_de'>
                        <div className="khoibang ">
                            <div className="thanh_dk">
                                <div className="turn turn_left" id="turn_left">
                                    <Image src={imageP.left} alt="sang trái" />
                                </div>
                                <div className=" turn turn_right" id="turn_right">
                                    <Image src={imageP.right} alt="sang phải" />
                                </div>
                            </div>
                            <div className='bangchung' id="bang_chung">
                                <table className='bangchinh tieu_chi tieu_chi_fix1359px'>
                                    <tbody>
                                        <tr>
                                            <th className='w-10'>
                                                <p className="phantucon">STT</p>
                                            </th>
                                            <th className='w-80'>
                                                <p className="phantucon">Loại câu hỏi</p>
                                            </th>
                                            <th className='w-56'>
                                                <p className="phantucon">Người tạo</p>
                                            </th>
                                            <th className='w-44'>
                                                <p className="phantucon">Ngày tạo</p>
                                            </th>

                                            <th className='w-80'>
                                                <p className="phantucon">Ghi chú</p>
                                            </th>
                                            <th className='w-40'>
                                                <p className="phantucon">Chức năng</p>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>1</p>
                                            </td>
                                            <td>
                                                <p className="text_a_l "><a className="color_blue">Tester 2</a>
                                                </p>
                                            </td>
                                            <td>
                                                <div className="d_flex align_c">


                                                    <div className="img  ">
                                                        <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                    </div>

                                                    <p className="one_line">le anh tuan12</p>

                                                </div>
                                            </td>

                                            <td>
                                                <p>17:22 - 01/08/2023</p>
                                            </td>

                                            <td className="">
                                                <div className="flex between">

                                                    <p className="text_a_l tx_gc ">12321</p><span data-id-gc="113" className="chuxanh size-14 c-pointer more_info" onClick={handleMoTa}>Xem thêm</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="sua_xoa d_flex content_c ">
                                                    <a data-id-loai="113" className="btn_chinhsua position_r d_flex mr_10 edit_loaicauhoi cursor-pointer" onClick={handlerepairQues}>
                                                        <div className="img mr_5">
                                                            <Image src={icon_sua} alt="Chỉnh sửa " />
                                                        </div>
                                                        <p className="color_blue font_w5 c-pointer">Sửa</p>
                                                    </a>

                                                    <span className="color_blue mr_10">|</span>
                                                    <div data-id="113" className="btn_xoa d_flex c-pointer" onClick={handleXoaQues}>

                                                        <div className="img mr_5">
                                                            <Image src={icon_xoa} alt="Xóa" />
                                                        </div>
                                                        <p className="color_red font_w5">Xóa</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody className="show_apend">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <div className={`${"popup popup_500 them_laicauhoi"} ${addQues ? '' : 'block'}`} /*style="display: block;"*/>
                        <form action="" className="frm_add_type_question " method="post"  >
                            <div className="container">
                                <div className="content">
                                    <div className="popup_header">
                                        <h4 className="name_header">Thêm mới loại câu hỏi</h4>
                                        <button type='button' className="img close_popup" onClick={closeQues}>
                                            <Image src={icon_close} alt="đóng" />
                                        </button>
                                    </div>
                                    <div className="popup_body">
                                        <div className="form_group">
                                            <label >Tên loại câu hỏi<span className="color_red">*</span></label>
                                            <input type="text" className="ten size-14" name="ten" placeholder="Nhập tên loại câu hỏi" />
                                        </div>
                                        <div className="form_group">
                                            <label >Mô tả loại câu hỏi</label>
                                            <textarea className="top-5 chuden size-14 mota" rows={5} name="ghi_chu" onChange={handleGhiChu} placeholder="Nhập nội dung"></textarea>
                                        </div>
                                        <div className="popup_btn">
                                            <div className="btn btn_trang btn_140 mr_68 close_popup" onClick={closeQues}>Hủy</div>
                                            <button type="button" className="btn btn_xanh btn_140 " onClick={handleSaveQues}> Đồng ý</button>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex max-[500px]:flex-col center-height space top-20">
                    <div className=' max-[500px]:flex-col'>
                        <div className="flex center-height relative justify-center">
                            <p className="right-10"> Hiển thị:</p>
                            <div className="select_no_muti select_no_muti_chon">
                                <span className="select2 select2-container select2-container--default width_check100" dir="ltr" data-select2-id="select2-data-6-50ah" >
                                    <span className="selection" onClick={() => setOnOfHT(!onOfHT)}>
                                        <span className={`${"select2-selection select2-selection--single"} ${'pl-4'}`} role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-chon_ban_ghi-container" aria-controls="select2-chon_ban_ghi-container">
                                            {hienThi}
                                            <span className="select2-selection__arrow" role="presentation">
                                                <b role="presentation">
                                                </b>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                <ul className={onOfHT ? 'hidden' : "absolute flex-col bg-white  border border-slate-400 px-1.5"}>
                                    <li className='cursor-pointer'>
                                        <input type="search" className='w-16 outline-none border border-slate-400 my-1 px-1' />
                                    </li>
                                    {
                                        arrayNumber.map((item, index) => {
                                            return (
                                                <li onClick={(e) => { setHienThi(item); setOnOfHT(!onOfHT) }} key={index} className='cursor-pointer'>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <p className="chuden size-14">Tổng số: <span className="dem_so_pt">{pagination}</span> <span className="font-medium"> Phiếu đánh giá</span></p>
                    </div>

                    <div className="pagination_vippro">
                        <li className="active"><a rel="nofollow">1</a></li>
                        <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=2" className="">2</a></li>
                        <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=3" className="">3</a></li>
                        <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=4" className="">4</a></li>
                        <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=2" className=" next" title="Next page">&gt;</a></li>
                        <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=5" className=" notUndeline">...</a></li>
                        <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=9" className=" " title="Last page">&gt;&gt;&gt;</a></li>
                        {

                        }
                    </div>
                </div>
            </div>
            <div className={`${"popup popup_500 show_more_info"} ${moTa ? '' : 'block'}`} /*style="display: none;"*/>
                <form action=""  method="post" encType="multipart/form-data"></form>
                <div className="container">
                    <div className="content">
                        <div className="popup_header">
                            <h4 className="name_header">Mô tả</h4>
                            <button type='button' className="img close_popup" onClick={handleMoTa}>
                                <Image src={icon_close} alt="đóng" />
                            </button>
                        </div>
                        <div /*style="padding: 20px;" className="popup_body"*/ className='p-5 popup_body'>
                            <div className="m_boder overflow-y-auto" /*style="overflow-y: auto;"*/>
                            <p /*style="max-height: 210px;" className="chuden size-15 text_ghichu"*/ className='max-h-52 chuden size-15 text_ghichu'>3123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${"popup popup_500 popup_xoa"} ${xoaQues ? '' : 'block'}`} /*style="display: block;"*/>
                <div className="container">
                    <div className="content">
                        <div className="popup_header">
                            <h4 className="name_header">Xóa loại câu hỏi</h4>
                            <button className="img close_popup" onClick={handleXoaQues}>
                                <Image src={icon_close} alt="đóng" />
                            </button>
                        </div>
                        <div className="popup_body">
                            <p className="cont_1"> Bạn có chắc chắn muốn xóa loại câu hỏi này không <span className="font_wB show_xoa_ten"></span> ?</p>
                            <div className="popup_btn">
                                <div className="btn btn_trang btn_140 mr_68 close_popup" onClick={handleXoaQues}>Hủy</div>
                                <div className="btn btn_xanh btn_140 js_done_xoa" data-id="113" onClick={handleXoaQues}> 
                                    Đồng ý
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${"popup popup_500 sua_laicauhoi"} ${repairQues ? '' : 'block'}`} /*style="display: block;"*/>
                <form action="" className="frm_edit_type_question " method="post" encType="multipart/form-data" >
                <div className="container">
                    <div className="content">
                        <div className="popup_header">
                            <h4 className="name_header">Chỉnh sửa loại câu hỏi</h4>
                            <div className="img close_popup cursor-pointer" onClick={handlerepairQues}>
                                <Image src={icon_close} alt="đóng" />
                            </div>
                        </div>
                        <div className="popup_body">
                            <div className="form_group">
                                <label >Tên loại câu hỏi<span className="color_red">*</span></label>
                                <input type="text" className="ten_edit size-14" name="ten_edit" placeholder="Nhập tên loại câu hỏi" value='Tester 2'/>
                            </div>
                            <div className="form_group">
                                <label >Mô tả loại câu hỏi<span className="color_red">*</span></label>
                                <textarea className="top-5 chuden size-14 mota_edit" rows={5} name="mota_edit" value="12321" placeholder="Nhập nội dung"></textarea>
                            </div>
                            <div className="popup_btn">
                                <div className="btn btn_trang btn_140 mr_68 close_popup" onClick={handlerepairQues}>Hủy</div>
                                <button type="button" className="btn btn_xanh btn_140 done_edit" data-id="113" onClick={handlerepairQues}> Đồng ý</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            <script type="text/javascript" src="../js/jquery-3.4.1.min.js" async></script>
            <script type="text/javascript" src="../js/trangchung.js" async></script>
            <script type="text/javascript" src="../js/select2.min.js" async></script>
            <script type="text/javascript" src="../js/manh.js" async></script>
            <script type="text/javascript"></script>

        </div>
    );
};
export default PhieuDanhGia;