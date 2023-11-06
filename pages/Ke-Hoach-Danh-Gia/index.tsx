
import React from 'react';
import { useState, ChangeEvent, useEffect } from 'react';
import imageFile from '@/public/assets/js/TrangchuPage'
import imageP from '@/public/assets/js/PhieuDanhGia'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import titleArray from '@/components/tester2';
import chonngay from '@/public/assets/img/chonngay.png'
import { compareAsc, parseISO } from 'date-fns';
import Link from 'next/link';
import icon_plus from '@/public/assets/img/icon_plus.png'
import ep_logo from '@/public/assets/img/ep_logo.png'
import tuychinh from '@/public/assets/img/tuy_chinh.png'
import thungrac from '@/public/assets/img/tuychinh_4.png'
import tuychinh1 from '@/public/assets/img/tuychinh_1.png'
import tuychinh2 from '@/public/assets/img/tuychinh_2.png'
import tuychinh3 from '@/public/assets/img/tuychinh_3.png'
import tuychinh4 from '@/public/assets/img/tuychinh_4.png'
import closer from '@/public/assets/img/close.png'
import Popup_ngdanhgia from '@/components/Popup_ngdanhgia';
import XoaThanhCon from '@/components/XoaThanhCon';

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
const searchState = ['Tất cả trạng thái', 'Chờ duyệt', 'Đã duyệt', ' Từ chối']
const PhieuDanhGia = () => {
    const [showTime, setShowTime] = useState(true)
    const [dateStart, setDateStart] = useState('')
    const [dateEnd, setDateEnd] = useState('')

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDateStart(event.target.value);
        console.log(dateStart)
    };
    const handleDateChange2 = (event: ChangeEvent<HTMLInputElement>) => {
        setDateEnd(event.target.value);
        console.log(dateEnd)
    };
    const [date, setDate] = useState<MyObject>({
        start: '',
        end: ''
    });
    const handleSetTime = () => {

        if (compareAsc(parseISO(dateStart), parseISO(dateEnd)) === -1) {
            setDate({ start: dateStart, end: dateEnd })
            setShowTime(!showTime)
        }
        else {
            alert('Ngày bắt đầu phải nhỏ hơn kết thúc')
            setDate({ start: '', end: '' })
        }

    }
    const handleCancleTime = () => {
        setDate({ start: '', end: '' })
        setShowTime(!showTime)

    }

    const [onstation, setOnstation] = useState(true)
    const handleOnStation = () => {
        setOnstation(!onstation)
        setOnOffKh(true)
        setShowTime(true)
    }
    const handleTime = () => {
        setShowTime(!showTime)
        setOnstation(true)
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
    /* tieu chii */
    const [keHoach, setKeHoach] = useState('Tìm kiếm theo tên kế hoạch đánh giá')
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

    /** */
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

    /* so sanh ngay thang*/

    /* open xoa du lieu*/
    const [xoaDuLieu, setXoaDuLieu] = useState(true)
    const handleXoaDuLieu = () => {
        setXoaDuLieu(!xoaDuLieu)
    }
    /* pop up chinh sua */
    const [chinhSua, setChinhSua] = useState(true)
    const handleChinhSua = () => {
        setChinhSua(!chinhSua)
    }
    /* close all */ 
    const [notice,setNotice] =useState(true)
    const handleNotice = () =>{
        setNotice(!notice)
    }
    /* set state notice */
    const [conNotice,setConNotice] =useState('')
    const handleDecline = () =>{
        setNotice(!notice)
        setConNotice('từ chôi kế hoạch đánh giá')
    }
    const handleAccept = () =>{
        setNotice(!notice)
        setConNotice('duyệt kế hoạch đánh giá')
    }
    const handleDelete = () =>{
        setNotice(!notice)
        setConNotice('xóa kế hoạch đánh giá')
    }
    const handleRepair = () =>{
        setNotice(!notice)
        
    }
    /* xem nguoi danh gia */
    const [openPop,setOpenPop] =useState(true)
    const [alertDate, setAlertDate] = useState('')
    return (
        <div>
            <div className="main">
                <Header />
                <div className="main_body" >
                    <div className="phieudanhgia box-qlinhanvien" >
                        <p className="chuden size-14 tieude1024 bot-15">{titleName}</p>
                        <div id="show_thietlaptime" className={`${showTime ? "popup" : "open_pop_up"}`} >
                            <div className=" pop">
                                <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
                                    <div className="" onClick={handleTime}>
                                        <h4 className="size-18 font-bold">Chọn khoảng thời gian</h4>
                                    </div>
                                    <div className="flex center-height c-pointer x_close" onClick={handleTime}>
                                        <Image src={imageP.x} alt="Huong dan" />
                                    </div>
                                </div>
                                <div className="nentrang br-b-10">
                                    <form action="" method="post" >
                                        <div className="padding-20">
                                            <div className="bot-15">
                                                <p className="chuden font-medium size-15 bot-5">Từ ngày:</p>
                                                <div className="border_input date">
                                                    <input id="datebd-input" type="date" value={dateStart} onChange={handleDateChange} />
                                                </div>
                                                <p className="errol_time chudo top-5 hidden size-12 font-medium chunghieng">
                                                    Thời gian bắt đầu phải nhỏ hơn kết thúc</p>
                                            </div>
                                            <div className="bot-15">
                                                <p className="chuden font-medium size-15 bot-5">Đến ngày:</p>
                                                <div className="border_input date">
                                                    <input id="datekt-input" type="date" value={dateEnd} onChange={handleDateChange2} />
                                                </div>
                                            </div>
                                            <div className="khoibutton_form top-25 bot-20">
                                                <button type="button" className="btn close btn-nentrang-chuxanh br-5 vienxanh font-medium size-15 c-pointer" onClick={handleCancleTime}>
                                                    Hủy
                                                </button>
                                                <button type="button" className="btn  btn-nenxanh-chutrang  br-5 vienxanh font-medium size-15  c-pointer" onClick={handleSetTime}>
                                                    Chọn
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex space">
                            <div className="flex wrap space">
                                <div className={`${"nentrang m_danhmucdanhgia br-10 c-pointer js_chonngay"} ${'mb-4'}`}>
                                    <div className={`${"danhmucdanhgia flex center-height"} ${'border border-slate-300 w-80 bg-slate-50'}`} onClick={() => setShowTime(!showTime)}>
                                        <p className="chuden size-14 right-10 " >Thời gian đánh giá: </p>
                                        <p className="chuden size-14 time_danhgia w-40 "><span className="time_bd"></span> {date.start} - {date.end} <span className="time_kt"></span></p>
                                        <div className="img"><Image src={chonngay} alt="Chọn ngày" /></div>
                                    </div>

                                </div>
                                <div >
                                    <span className={`${"select2 select2-container select2-container--default"} ${"w-44"}`} dir="ltr" data-select2-id="select2-data-1-v4qz" >
                                        <div className={`${"select_no_muti danhmucdanhgia"} ${'relative w-44 text-sm border border-slate-300 mr-4'}`}>
                                            <div className='flex cursor-pointer' onClick={handleOnStation}>

                                                <p className='pr-1 py-2 pl-2 w-36' >{titleState}</p>
                                                <span className="pr-1 pt-4" role="presentation"><Image src={imageFile.icon_so} alt=""></Image>
                                                </span>
                                            </div>

                                            <div>
                                                <ul className={onstation ? 'hidden' : `${"js_select_2 w-44 absolute z-50 bg-white overflow-y-scroll h-36 rounded-b-md border border-x-slate-400 border-b-slate-400"} ${'displaynone_scroll'}`}>
                                                    <li className='m-1 ml-2'><input type="search" className='py-1 px-2 border border-slate-400 w-40 outline-none' onChange={handleInputChange} /></li>
                                                    {
                                                        filteredData.map((item, index) => {
                                                            return (<li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' key={index} onClick={() => { setTitleSate(item); setOnstation(!onstation) }}>{item}</li>)
                                                        })
                                                    }
                                                </ul>
                                            </div>

                                        </div>
                                    </span>
                                </div>
                                <div className="tieude375 top-15">
                                    <a href="/huong_dan.html#phieu" target="_blank" className="">
                                        <div className="huongdan flex center-height ">
                                            <Image src={imageP.chamhoi} className="wh36" alt="" />
                                            <p className="left-10 font-medium size-15">Hướng dẫn</p>
                                        </div>
                                    </a>
                                </div>

                            </div>

                            <a href="/huong_dan.html#phieu" target="_blank" className="none375">
                                <div className="huongdan flex center-height ">
                                    <Image src={imageP.chamhoi} className="wh36" alt="" />
                                    <p className="left-10 font-medium size-15">Hướng dẫn</p>
                                </div>
                            </a>
                        </div>



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
                            <div className="them_moi max-sm:mb-6">
                                <Link href="/Ke-Hoach-Danh-Gia/Them-Moi" className="btn btn_xanh">
                                    <Image src={icon_plus} alt="Thêm mới" className="mr_10" />
                                    <p>Thêm mới</p>
                                </Link>
                            </div>

                        </div>
                        <div className="khoibang po_r">
                            <div className="thanh_dk">
                                <div className="turn turn_left" id="turn_left">
                                    <Image src={imageP.left} alt="sang trái" />
                                </div>
                                <div className=" turn turn_right" id="turn_right">
                                    <Image src={imageP.right} alt="sang phải" />
                                </div>
                            </div>
                            <div className="bangchung min_height" id="bang_chung">
                                <table className={`${'bangchinh tieu_chi'}`}>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <p className="phantucon">STT</p>
                                            </th>
                                            <th className='w-80'>
                                                <p className="phantucon">Tên kế hoạch đánh giá</p>
                                            </th>
                                            <th className='w-36'>
                                                <p className="phantucon">Loại</p>
                                            </th>

                                            <th>
                                                <p className="phantucon">Trạng thái</p>
                                            </th>
                                            <th className='w-64'>
                                                <p className="phantucon">Người tạo</p>
                                            </th>
                                            <th>
                                                <p className="phantucon">Người đánh giá</p>
                                            </th>
                                            <th>
                                                <p className="phantucon">Số người được đánh giá</p>
                                            </th>
                                            <th>
                                                <p className="phantucon">Thời gian</p>
                                            </th>
                                            <th className='w-20'>
                                                <p className="phantucon">Ghi chú</p>
                                            </th>
                                            <th className='w-64'>
                                                <p className="phantucon">Chức năng</p>
                                            </th>
                                        </tr>
                                        <tr className="no_filter kh_xoa_166 tt_daduyet">
                                            <td>
                                                <p>1</p>
                                            </td>
                                            <td>
                                                <p className="text_a_l"> <Link className="color_blue" href="/Ke-Hoach-Danh-Gia/Chi-tiet">Tester 2</Link></p>
                                            </td>

                                            <td>
                                                <p className="text_a_l">
                                                    Đề kiểm tra                                                     </p>
                                            </td>

                                            <td className="">
                                                <p className="text_a_l update_tt166  color_blue">
                                                    Đã duyệt
                                                </p>
                                            </td>
                                            <td>
                                                <div className="d_flex align_c" >


                                                    <div className="img mr_10 ">
                                                        <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                    </div>

                                                    <p>le anh tuan12</p>

                                                </div>
                                            </td>
                                            <td>
                                                <div className="nguoi_danhgia text_a_l " >
                                                    <div data-id-kh="166" className="container xem_ng_danhgia c-pointer" onClick={() => setOpenPop(!openPop)}>
                                                        <div className="img">
                                                            <Image className="wh26_ra " src={ep_logo} alt="Người tạo" />
                                                        </div>
                                                        <div className="plus_10  hidden">
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text_a_r">1</td>
                                            <td>
                                                <p className="tu_ngay">
                                                    <span className="font_w5 color_blue mr_18">Từ:</span><span>08/08/2023</span>
                                                </p>
                                                <p className="den_ngay">
                                                    <span className="font_w5 color_red mr_10">Đến:</span><span>09/08/2023</span>
                                                </p>
                                            </td>

                                            <td className='set_width330px'>
                                                <p className="text_a_l">7878</p>
                                            </td>
                                            <td>
                                                <div className="d_flex content_c position_r">
                                                    <div className="btn_tuychinh d_flex" onClick={handleXoaDuLieu}>
                                                        <div className="img mr_5">
                                                            <Image src={tuychinh} alt="Tùy chỉnh" />
                                                        </div>
                                                        <p className="font_w5 color_blue">Tùy chỉnh</p>
                                                    </div>
                                                    <div className={`${"modal_d modal_ql_tieuchi sub_tuychinh position_a"} ${xoaDuLieu ? '' : 'block'}`}>
                                                        <div>

                                                            <div className="item btn_xoa set_width100per" data-id="166" data-name="Tester 2">
                                                                <div className="d_flex">
                                                                    <div className="img mr_10">
                                                                        <Image src={thungrac} alt="Xóa kế hoạch đánh giá" />
                                                                    </div>
                                                                    <p>Xóa kế hoạch đánh giá</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no_filter kh_xoa_166 tt_daduyet">
                                            <td>
                                                <p>1</p>
                                            </td>
                                            <td>
                                                <p className="text_a_l"> <Link className="color_blue" href="/Ke-Hoach-Danh-Gia/Chi-tiet">Tester 2</Link></p>
                                            </td>

                                            <td>
                                                <p className="text_a_l">
                                                    Đề kiểm tra                                                     </p>
                                            </td>

                                            <td className="">
                                                <p className="text_a_l update_tt166 color_y">
                                                    Chờ duyệt
                                                </p>
                                            </td>
                                            <td>
                                                <div className="d_flex align_c">


                                                    <div className="img mr_10 ">
                                                        <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                    </div>

                                                    <p>le anh tuan12</p>

                                                </div>
                                            </td>
                                            <td>
                                                <div className="nguoi_danhgia text_a_l ">
                                                    <div data-id-kh="166" className="container xem_ng_danhgia c-pointer">
                                                        <div className="img">
                                                            <Image className="wh26_ra " src={ep_logo} alt="Người tạo" />
                                                        </div>


                                                        <div className="plus_10  hidden">
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text_a_r">1</td>
                                            <td>
                                                <p className="tu_ngay">
                                                    <span className="font_w5 color_blue mr_18">Từ:</span><span>08/08/2023</span>
                                                </p>
                                                <p className="den_ngay">
                                                    <span className="font_w5 color_red mr_10">Đến:</span><span>09/08/2023</span>
                                                </p>
                                            </td>

                                            <td className='set_width330px'>
                                                <p className="text_a_l">7878</p>
                                            </td>
                                            <td>
                                                <div className="d_flex content_c position_r">
                                                    <div className="btn_tuychinh d_flex" onClick={handleChinhSua}>
                                                        <div className="img mr_5">
                                                            <Image src={tuychinh} alt="Tùy chỉnh" />
                                                        </div>
                                                        <p className="font_w5 color_blue">Tùy chỉnh</p>
                                                    </div>
                                                    <div className={`${"modal_d modal_ql_tieuchi sub_tuychinh position_a"} ${chinhSua ? '':'block'}`} >
                                                        <div className='set_width100per'>
                                                            <div className="item btn_duyet set_width100per" data-ngay-duyet="1691552946" data-nguoi-duyet="1763" data-id="169" data-name="fdsfdf" onClick={handleAccept}>
                                                                <div className="d_flex " >
                                                                    <div className="img mr_10">
                                                                        <Image src={tuychinh1} alt="Tùy chỉnh" />
                                                                    </div>
                                                                    <p>Duyệt kế hoạch đánh giá</p>
                                                                </div>
                                                            </div>
                                                            <div className="item btn_tuchoi set_width100per" data-id-tc="1763" data-name="fdsfdf" data-id="169" onClick={handleDecline}>
                                                                <div className="d_flex">
                                                                    <div className="img mr_10">
                                                                        <Image src={tuychinh2} alt="Từ chối hoạch đánh giá" />
                                                                    </div>
                                                                    <p>Từ chối kế hoạch đánh giá</p>
                                                                </div>
                                                            </div>
                                                            <div className="item set_width100per" >
                                                                <div className="d_flex">
                                                                    <div className="img mr_10">
                                                                        <Image src={tuychinh3} alt="Chỉnh sửa kế hoạch đánh giá" />
                                                                    </div>
                                                                    <Link className="color_b" href="/Ke-Hoach-Danh-Gia/Chinh-Sua">Chỉnh
                                                                        sửa kế hoạch đánh giá</Link>
                                                                </div>
                                                            </div>
                                                            <div className="item btn_xoa set_width100per" data-id="169" data-name="fdsfdf" onClick={handleDelete}>
                                                                <div className="d_flex">
                                                                    <div className="img mr_10">
                                                                        <Image src={tuychinh4} alt="Xóa kế hoạch đánh giá" />
                                                                    </div>
                                                                    <p>Xóa kế hoạch đánh giá</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody><tbody className="show_apend">
                                    </tbody>

                                </table>
                            </div>
                        </div>
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
            <div className={`${'popup popup_500 popup_xoa'} ${notice ? '' : 'block'}`}>
            <div className='container'>
                <div className='content'>
                    <div className='popup_header'>
                        <h4 className='name_header'>{conNotice.toUpperCase()}</h4>
                        <button className='img close_popup' type='button' onClick={handleNotice}>
                            <Image src={closer} alt='close' />
                        </button>
                    </div>
                    <div className='popup_body'>
                        <p className='cont_1'>
                            Bạn có chắc chắn muốn {conNotice} này không 
                            <span className='font_wB show_xoa_ten'>
                            </span>
                            ?
                        </p>
                        <div className='popup_btn'>
                            <div className='btn btn_trang btn_140 mr_68 close_popup' onClick={handleNotice}>
                                Hủy
                            </div>
                            <div className='btn btn_xanh btn_140 js_done_xoa' onClick={handleNotice}>
                                Đồng ý
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        <Popup_ngdanhgia checked={openPop}/>
        <XoaThanhCon title=''checked={true}/>
            <script type="text/javascript" src="../js/jquery-3.4.1.min.js" async></script>
            <script type="text/javascript" src="../js/trangchung.js" async></script>
            <script type="text/javascript" src="../js/select2.min.js" async></script>
            <script type="text/javascript" src="../js/manh.js" async></script>
            <script type="text/javascript"></script>

        </div>
    );
};
export default PhieuDanhGia;