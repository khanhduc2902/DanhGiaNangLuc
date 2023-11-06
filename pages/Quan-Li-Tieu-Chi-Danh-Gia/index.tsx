
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
import bangChinh from '@/public/assets/css/bangChinh.module.css'
import icon_so from '@/public/assets/img/icon_so.png'
import icon_sua from '@/public/assets/img/icon_sua.png'
import icon_xoa from '@/public/assets/img/icon_xoa.png'
import icon_close from '@/public/assets/img/close.png'
import { token } from '@/components/utils/constant'
import axios from 'axios';
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
const arrayTenTieuChi = ['Tìm kiếm theo tên tiêu chí']
const arrayNumber = ['2', '5', '10', '20', '50', '100']
const searchState = ['Tất cả trạng thái', 'Đang mở', 'Đã đóng']


const TieuChiDanhGia = () => {
    const [data,setData] = useState<any>({})
    
    useEffect(() =>{
        const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
        axios.get('http://210.245.108.202:3014/api/DGNL/DSTieuChi/NameAndStationTC',config)
        .then(res =>{
            setData(res?.data?.data?.data);
            
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

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
    const [keHoach, setKeHoach] = useState('Tìm kiếm theo tên tên tiêu chí')
    const [searchQueryKH, setSearchQueryKH] = useState('');
    const [filteredDataKH, setFilteredDataKH] = useState(arrayTenTieuChi);
    const handleSearchKH = (query: string) => {
        const filteredResults = arrayTenTieuChi.filter(item =>
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
    
    const [myArray, setMyArray] = useState([]);


    useEffect(() => {
        // Step 1: Retrieve the data from sessionStorage
        const dataFromStorage = sessionStorage.getItem('arrayTieuChi');

        // Step 2: Parse the data to get the array
        if (dataFromStorage) {
        const parsedArray = JSON.parse(dataFromStorage);
        setMyArray(parsedArray);
        }
    }, []);
    interface model{
        name:string,
        type:string,
        state:boolean,
        diem:number,
        date:string
    }
    /* set hien thi checked trangthai */
    const [staty,setStaty] =useState(true)
    const handleChecked = (event : boolean) =>{
        event = !event;
        
    }
    const setAgainChek = (indexOf : number) => {
        const arrayOf =JSON.parse(sessionStorage.getItem('arrayTieuChi') || '[]')
        arrayOf[indexOf].state = !arrayOf[indexOf].state
        console.log(arrayOf[indexOf].state)
    }
    const [alertDate, setAlertDate] = useState('')
    /* xoa tieu chi */
    const [xoaQues,setXoaQues] =useState(true)
    const handleXoaQues = () =>{
        setXoaQues(!xoaQues)
    }
    return (
        <div>
            <div className="main">
                <Header />
                <div className="main_body">
                    <div className="phieudanhgia box-qlinhanvien">
                        <p className="chuden size-14 tieude1024 bot-15">{titleName}</p>
                        <div className="flex space">
                            <div className="flex wrap space">
                                <div>
                                    <span className={`${"select2 select2-container select2-container--default"} ${"w-44"}`} dir="ltr" data-select2-id="select2-data-1-v4qz" >
                                        <div className={`${"select_no_muti danhmucdanhgia rounded-none"} ${'relative w-44 text-sm border border-slate-300 mr-4'}`}>
                                            <div className='flex cursor-pointer' onClick={handleOnStation}>

                                                <p className='pr-1 py-2 pl-2 w-36' >{titleState}</p>
                                                <span className="pr-1 pt-4" role="presentation"><Image src={imageFile.icon_so} alt=""></Image>
                                                </span>
                                            </div>

                                            <div>
                                                <ul className={onstation ? 'hidden' : `${"js_select_2 w-44 absolute z-50 bg-white overscroll-y-auto h-36 rounded-b-md border border-x-slate-400 border-b-slate-400"} `}>
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
                                <Link href="/Quan-Li-Tieu-Chi-Danh-Gia/Them-Moi" className="btn btn_xanh">
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
                            <div className='bangchung' id="bang_chung">
                                <table className='bangchinh tieu_chi_1359'>
                                    <tbody>
                                        <tr >
                                            <th className='w-20'>
                                                <p className="phantucon">STT</p>
                                            </th>
                                            <th className='w-72'>
                                                <p className="phantucon">Tên tiêu chí</p>
                                            </th>
                                            <th className='w-60'>
                                                <p className="phantucon">Loại tiêu chí</p>
                                            </th>
                                            <th className='w-28'>
                                                <p className="phantucon">Số điểm</p>
                                            </th>

                                            <th className='w-44'>
                                                <p className="phantucon">Ngày tạo</p>
                                            </th>
                                            <th className='w-32'>
                                                <p className="phantucon">Trạng thái</p>
                                            </th>
                                            <th className='w-60'>
                                                <p className="phantucon">Chức năng</p>
                                            </th>

                                        </tr>
                                        <tr className="xoa_tc_tr146 con_tieuchi_145">

                                            <td>
                                                <p>1.1</p>
                                            </td>
                                            <td className="with350_im">
                                                <p className="text_a_l color_blue left-10 with250_im ">
                                                    <Link className="color_blue elipsis1" href="/Quan-Li-Tieu-Chi-Danh-Gia/Chi-Tiet">hoang1</Link>
                                                </p>
                                            </td>
                                            <td>
                                                <p>Tiêu chí đơn</p>
                                            </td>
                                            <td>
                                                <p className="chunghieng">2</p>
                                            </td>
                    
                                            <td>
                                                <p>
                                                    29/07/2023 </p>
                                            </td>
                                            <td>
                                                <label className="switch_tatmo" onClick={()=>handleChecked(staty)}>
                                                    <span className={`${"slider round" } ${staty ? 'sliderCLick sliderClick': ''}`}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="sua_xoa d_flex content_c ">
                                                    <Link href="/Quan-Li-Tieu-Chi-Danh-Gia/Chinh-Sua" className="btn_chinhsua position_r d_flex mr_10">
                                                        <div className="img mr_5">
                                                            <Image src={icon_sua} alt="Chỉnh sửa " />
                                                        </div>
                                                        <p className="color_blue font_w5">Sửa</p>
                                                    </Link>
                                                    <button data-name="hoang1" data-id="146" className="btn_xoa d_flex c-pointer " onClick={handleXoaQues}>
                                                        <span className="color_blue mr_10">|</span>
                                                        <div className="img mr_5">
                                                            <Image src={icon_xoa} alt="Xóa" />
                                                        </div>
                                                        <p className="color_red font_w5">Xóa</p>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {
                                            myArray.map((item : model,index : number)=>(
                                                <tr className="xoa_tc_tr146 con_tieuchi_145" key={index}>

                                                <td>
                                                    <p>{index}</p>
                                                </td>
                                                <td className="with350_im">
                                                    <p className="text_a_l color_blue left-10 with250_im ">
                                                        <Link className="color_blue elipsis1" href="quan_ly_tieu_chi_danh_gia_chi_tiet_146.html">{item.name}</Link>
                                                    </p>
                                                </td>
                                                <td>
                                                    <p>{item.type}</p>
                                                </td>
                                                <td>
                                                    <p className="chunghieng">{item.diem}</p>
                                                </td>
                        
                                                <td>
                                                    <p>
                                                        {item.date} </p>
                                                </td>
                                                <td>
                                                    <label className="switch_tatmo" onClick={()=>setAgainChek(index)}>
                                                        <input data-id="146" className="js_trangthai" value="1" type="checkbox" />
                                                            <span className={`${"slider round" } ${item.state ? 'sliderCLick sliderClick': ''}`}></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <div className="sua_xoa d_flex content_c ">
                                                        <a href="/quan_ly_tieu_chi_danh_gia_chinh_sua_146.html" className="btn_chinhsua position_r d_flex mr_10">
                                                            <div className="img mr_5">
                                                                <Image src={icon_sua} alt="Chỉnh sửa " />
                                                            </div>
                                                            <p className="color_blue font_w5">Sửa</p>
                                                        </a>
                                                        <button data-name="hoang1" data-id="146" className="btn_xoa d_flex c-pointer ">
                                                            <span className="color_blue mr_10">|</span>
                                                            <div className="img mr_5">
                                                                <Image src={icon_xoa} alt="Xóa" />
                                                            </div>
                                                            <p className="color_red font_w5">Xóa</p>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                    <tbody className="show_apend">
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

                    </div>
                </div>
            </div>
            <div className={`${"popup popup_500 popup_xoa popup_xoa_tieuchi"} ${xoaQues ? '': 'block' }`} /*style="display: block;"*/>
                <div className="container">
                    <div className="content">
                        <div className="popup_header">
                            <h4 className="name_header">Xóa tiêu chí</h4>
                            <div className="img close_popup cursor-pointer" onClick={handleXoaQues}>
                                <Image src={icon_close} alt="đóng" />
                            </div>
                        </div>
                        <div className="popup_body">
                            <p className="cont_1">Bạn có chắc chắn muốn xóa tiêu chí <span /*style="width: 300px; margin-left: -30px;"*/ className="font_wB show_xoa_ten elipsis1">hoang1</span></p>
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
            <script type="text/javascript" src="../js/jquery-3.4.1.min.js" async></script>
            <script type="text/javascript" src="../js/trangchung.js" async></script>
            <script type="text/javascript" src="../js/select2.min.js" async></script>
            <script type="text/javascript" src="../js/manh.js" async></script>
            <script type="text/javascript"></script>

        </div>
    );
};
export default TieuChiDanhGia;