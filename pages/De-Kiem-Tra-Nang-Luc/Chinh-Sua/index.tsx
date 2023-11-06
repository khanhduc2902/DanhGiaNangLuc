
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
import cong from '@/public/assets/img/cong.png'
import close from '@/public/assets/img/close.png'
import search from '@/public/assets/img/kinhlup.png'
import icon_plus from '@/public/assets/img/icon_plus.png'
import icon_xoa from '@/public/assets/img/icon_xoa.png'
const searchState = ['Người dùng tự thiết lập', 'Hệ thống sinh đề theo điều khiển'];
const searchState2 = ['Trắc nghiệm', 'Tự luận', 'Trắc nghiệm và tự luận'];
const searchStatement = ['Đóng', 'Mở'];
const searchArrayLoai = ['Tester1', 'Tester2', 'Tester3', 'Tester4', 'Tester5', 'Tester6', 'Tester7']
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
const LoaiArray = ['Chọn loại', 'Yếu', 'Trung bình', 'Khá', 'Giỏi', 'Xuất sắc']
const Page = () => {
    /* xoa quess */
    const [xoaQues, setXoaQues] = useState(true)
    const handleXoaQues = () => {
        setXoaQues(!xoaQues)

    }
    /* Hinh thuwc tao de */
    const [onstation, setOnstation] = useState(true)
    const handleOnStation = () => {
        setOnstation(!onstation)
    }
    const handleCancleStation = () => {
        setOnstation(true)
    }
    /*Thiet Lap Phan Loaji Danh gia */
    const [onPhanLoai, setOnPhanLoai] = useState(true)
    const handleOnPhanLoai = () => {
        setOnPhanLoai(!onPhanLoai)
    }
    /* Chon Loai */
    const [onLoai, setOnLoai] = useState(true)
    const handleLoai = () => {
        setOnLoai(!onLoai)
    }
    const [Loai, setLoai] = useState('Chọn loại')
    const handleSetLoai = (event: string) => {
        setLoai(event)
    }
    /* Them phan Loai danh gia */
    const [myArray, setMyArray] = useState([1]); // Initialize the array with initial values

    const addItem = () => {
        // Using the spread operator to create a new array with the additional item
        setMyArray([...myArray, 1]);
    };

    const removeItem = (indexToRemove: number) => {
        // Using the filter method to create a new array without the item at the specified index
        setMyArray(myArray.filter((item: number, index) => index !== indexToRemove));
    };
    /* Chon loai trac nghiem*/
    const [myArrayLoai, setMyArrayLoai] = useState<string[]>([]); // Initialize the array with initial values

    const addItemLoai = (event: string) => {
        // Using the spread operator to create a new array with the additional item
        setMyArrayLoai([...myArrayLoai, event]);
    };

    const removeItemLoai = (indexToRemove: number) => {
        // Using the filter method to create a new array without the item at the specified index
        setMyArrayLoai(myArrayLoai.filter((item: string, index) => index !== indexToRemove));
    };
    /* Chon loai tu luan*/
    const [myArrayTuLuan, setMyArrayTuLuan] = useState<string[]>([]); // Initialize the array with initial values

    const addItemTL = (event: string) => {
        // Using the spread operator to create a new array with the additional item
        setMyArrayTuLuan([...myArrayTuLuan, event]);
    };

    const removeItemTL = (indexToRemove: number) => {
        // Using the filter method to create a new array without the item at the specified index
        setMyArrayTuLuan(myArrayTuLuan.filter((item: string, index) => index !== indexToRemove));
    };
   

    /* Hinh thuc tao de*/
    const [titleState, setTitleSate] = useState('Người dùng tự thiết lập')
    const [filteredData, setFilteredData] = useState(searchState);
    const handleSearch = (query: string) => {
        const filteredResults = searchState.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };
    const handleInputChange = (event: any) => {

        handleSearch(event.target.value);
    };
    const [taoDe, setTaoDe] = useState(true)
    const handleTaoDe = () => {
        setTaoDe(!taoDe)
    }
    /*Hinh thuc de kiemtra */
    const [titleStateDekT, setTitleSateDeKT] = useState('Trắc nghiệm')
    const [filteredDataKT, setFilteredDataKT] = useState(searchState2);
    const handleSearchKT = (query: string) => {
        const filteredResults = searchState2.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };
    const handleInputChangeKT = (event: any) => {

        handleSearchKT(event.target.value);
    };
    const [deKT, setDeKT] = useState(true)
    const handleDeKT = () => {
        setDeKT(!deKT)
    }
    /* trang thai */
    const [onstatement, setOnstatement] = useState(true)
    const handleOnstatement = () => {
        setOnstatement(!onstatement)
    }
    const [titleStatement, setTitleStatement] = useState('Mở')
    const [stateOn, setStateOn] = useState(true)
    const [filteredStatement, setFilteredStatement] = useState(searchStatement);
    const handleStatement = (query: string) => {
        const filteredResults = searchStatement.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };
    const handleInputStatement = (event: any) => {

        handleSearch(event.target.value);
    };

    /*tieu chi tong hop */
    const [complex, setComplex] = useState(true)
    const handleOnComplex = () => {
        setComplex(!complex)
    }
    const [titleComplex, setTitleComplex] = useState('Select')

    const searchComplex = JSON.parse(sessionStorage.getItem('arrayTieuChi') || '[]');
    const [filteredComplex, setFilteredComplex] = useState(searchComplex);

    const handleComplex = (query: string) => {
        const filteredResults = searchComplex.filter((item: any) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };
    const handleInputComplex = (event: any) => {

        handleComplex(event.target.value);
    };

    /* open pop up */

    /* get ten de ktra nang luc nhan vien */
    const [tieuChi, setTieuChi] = useState('')
    const getTenTieuChi = (event: any) => {
        setTieuChi(event.target.value);
    }
    /*get nguoi tao */
    const [owner, setOwner] = useState('Vu Hoang Anh')
    /* get diem */
    const [diem, setDiem] = useState(0)
    const handleDiem = (event: any) => {
        setDiem(event.target.value)
    }
    /*get data */
    const [ghiChu, setGhiChu] = useState('')
    /* Luu model */
    const currentDate = new Date().toLocaleDateString("en-GB")


    let model = {}



    const handleSave = () => {
        if (diem <= 0 || diem >= 10) alert('Nhap Lai diem. 0 <= diem <= 9')
        else {
            model = { name: tieuChi, ghiChu: ghiChu, diem: diem, type: titleState, owner: owner, date: currentDate, state: stateOn }
            let pushData = [];
            pushData = JSON.parse(sessionStorage.getItem('arrayTieuChi') || '[]')

            sessionStorage.setItem('arrayTieuChi', JSON.stringify([...pushData, model]));
            Router.push('/De-Danh-Gia-Nang-Luc')
            console.log(model)

        }
    }


    /* searchinng */
    const [keHoach, setKeHoach] = useState('Tìm kiếm theo tên tiêu chí đánh giá')
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
    /* popUp chon Loai cau hoi trac nghiem*/
    const [onQues, setOnQues] = useState(true)
    const handleOnQues = () => {
        setOnQues(!onQues)
    }

    /* popUp chon Loai cau hoi tu luan*/
    const [onQuesTL, setOnQuesTL] = useState(true)
    const handleOnQuesTL = () => {
        setOnQuesTL(!onQuesTL)
    }
    

    const [onOfKh, setOnOffKh] = useState(true)
    return (
        <div className='main'>
            <Navbar urlBack='/De-Kiem-Tra-Nang-Luc' />
            <div className="main_body">
                <div className="body_ql_tieuchi body_ql_tieuchi_danhgia">
                    <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
                        <Link href="/De-Danh-Gia-Nang-Luc">
                            <div className="flex center-height right-10 c-pointer">
                                <Image src={back} alt="Quay lai" />
                            </div>
                        </Link>
                        <p className='font-bold'>Đề đánh giá năng lực / thêm mới</p>
                    </div>
                    <div className="header_d width_100">
                        <h4 className='font-bold'>Thêm mới đề kiểm tra</h4>
                    </div>
                    <div className="body width_100">
                        {/*form thêm mới tiêu chí con (block người và ngày) */}
                        <form className="form form_tieuchi form_them_tieuchi form_them_tieuchi_con" >
                            <div className="container">

                                <div className="form_container">
                                    <div className="form_group position_r group_loai_tc tieuchi_1  ">
                                        <label className="hover_thongtin d_flex align_c c-pointer">
                                            <span>Hình thức tạo đề<span className="color_red">*</span></span>

                                        </label>
                                        <div className='mt-1'>
                                            <span className={`${"select2 select2-container select2-container--default"} ${"w-full"}`} dir="ltr" data-select2-id="select2-data-1-v4qz" >
                                                <div className={`${"select_no_muti rounded-sm"} ${'relative w-full text-sm border border-slate-300 mr-4'}`}>
                                                    <div className='flex cursor-pointer' onClick={handleTaoDe}>

                                                        <p className='pr-1 py-2 pl-2 w-full' >{titleState}</p>
                                                        <span className="absolute right-0 pr-1 pt-4" role="presentation"><Image src={icon_so} alt=""></Image>
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <ul className={taoDe ? 'hidden' : `${"js_select_2 w-full absolute z-50 bg-white overflow-y-scroll h-28 rounded-b-md border border-x-slate-400 border-b-slate-400 displaynone_scroll"} `}>
                                                            <li className='m-1 ml-2'><input type="search" className='px-2 border border-slate-600 w-40 outline-none py-3 rounded-none' onChange={handleInputChange} /></li>
                                                            {
                                                                filteredData.map((item, index) => {
                                                                    return (<li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' key={index} onClick={() => { setTitleSate(item); setTaoDe(!taoDe) }}>{item}</li>)
                                                                })
                                                            }
                                                        </ul>
                                                    </div>

                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form_group position_r group_loai_tc tieuchi_1  ">
                                        <label className="hover_thongtin d_flex align_c c-pointer">
                                            <span>Hình thức đề kiểm tra<span className="color_red">*</span></span>

                                        </label>
                                        <div className='mt-1'>
                                            <span className={`${"select2 select2-container select2-container--default"} ${"w-full"}`} dir="ltr" data-select2-id="select2-data-1-v4qz" >
                                                <div className={`${"select_no_muti rounded-sm"} ${'relative w-full text-sm border border-slate-300 mr-4'}`}>
                                                    <div className='flex cursor-pointer' onClick={handleDeKT}>

                                                        <p className='pr-1 py-2 pl-2 w-full' >{titleStateDekT}</p>
                                                        <span className="absolute right-0 pr-1 pt-4" role="presentation"><Image src={icon_so} alt=""></Image>
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <ul className={deKT ? 'hidden' : `${"js_select_2 w-full absolute z-50 bg-white overflow-y-scroll h-36 rounded-b-md border border-x-slate-400 border-b-slate-400 displaynone_scroll"} `}>
                                                            <li className='m-1 ml-2'><input type="search" className='px-2 border border-slate-600 w-40 outline-none py-3 rounded-none' onChange={handleInputChangeKT} /></li>
                                                            {
                                                                filteredDataKT.map((item, index) => {
                                                                    return (<li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' key={index} onClick={() => { setTitleSateDeKT(item); setDeKT(!deKT) }}>{item}</li>)
                                                                })
                                                            }
                                                        </ul>
                                                    </div>

                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${"form_container"} ${(titleState === 'Người dùng tự thiết lập' ? '' : 'hidden')}`}>
                                    <div className="form_group group_ten">
                                        <label>Tên đề kiểm tra năng lực nhân viên<span className="color_red">*</span></label>
                                        <input type="text" className="ten" name="ten" placeholder="Nhập tên đề kiểm tra" onChange={getTenTieuChi} value={tieuChi} />
                                    </div>
                                    <div className="form_group form_group_block">
                                        <label>Người tạo</label>
                                        <input type="text" className="nguoi_tao" name="ten" value='le tuan anh 12' disabled={true} />
                                    </div>

                                </div>
                                <div className={`${'hethong_sinhde'} ${titleState === 'Hệ thống sinh đề theo điều khiển' ? '' : 'hidden'}`}>
                                    <div className="form_container">
                                        <div className="form_group form_group_block">
                                            <label>Người tạo</label>
                                            <input type="text" className="nguoi_tao" name="ten" value='le tuan anh 12' disabled={true} />
                                        </div>
                                        <div className="form_group form_group_block flex">
                                            <div className="form_group form_group_block">
                                                <label>Ngày tạo</label>
                                                <input type="text" className="nguoi_tao" name="ten" value={currentDate} disabled={true} />
                                            </div>
                                            <div className="form_group form_group_block">
                                                <label>Thang điểm<span className="color_red">*</span></label>
                                                <input type="text" className="nguoi_tao" name="ten" value='10' disabled={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${"form_container"} ${(titleState === 'Người dùng tự thiết lập' ? '' : 'hidden')}`}>
                                    <div className="form_group form_group_block">
                                        <label>Ngày tạo</label>
                                        <input type="text" className="nguoi_tao" name="ten" value={currentDate} disabled={true} />
                                    </div>
                                    <div className="form_group form_group_block">
                                        <label>Thang điểm<span className="color_red">*</span></label>
                                        <input type="text" className="nguoi_tao" name="ten" value='10' disabled={true} />
                                    </div>
                                </div>

                                { /*Dang trac nghiemmmm  */}
                                <div className={`${"dang_tracnghiem"} ${(titleState === 'Hệ thống sinh đề theo điều khiển' && (titleStateDekT ==='Trắc nghiệm' || titleStateDekT === 'Trắc nghiệm và tự luận')) ? '' : 'hidden'}`} data-select2-id="select2-data-65-sgnq">
                                    <h4 className="font_ss16 font_wB chuxanh bot-15 hethong_sinhde" >Điều kiện câu hỏi trắc nghiệm</h4>
                                    <div className="form_container hethong_sinhde" >
                                        <div className="form_group ">
                                            <label >Tổng số câu hỏi trắc nghiệm trong đề kiểm tra<span className="color_red">*</span></label>
                                            <input type="text" className="socauhoi" id="sodiem_ch_input" name="" value="" placeholder="Nhập số câu hỏi" />
                                        </div>
                                        <div className="form_group po_ra">
                                            <label >Thời gian thực hiện <span className="color_red">*</span></label>
                                            <input type="text" className="time_thuchien " name="" value="" placeholder="Nhập thời gian" id="time_thuchien_input" />
                                            <span className="po_ab chuden size-14 text_phut">Phút</span>
                                        </div>

                                    </div>
                                    <div className="form_container hethong_sinhde relative" data-select2-id="select2-data-64-fuqo">
                                        <div /*style="width: 49%;"*/ className="form_group select_no_muti " data-select2-id="select2-data-63-8ac7">
                                            <label className="one_line2 ">Chọn loại</label>
                                            <div /*style="margin-top: 5px;"*/ data-select2-id="select2-data-62-gug4 " className='mt-1' onClick={handleOnQues}>


                                                <span className="select2 select2-container select2-container--default select2-container--below w-full " dir="ltr" data-select2-id="select2-data-47-5f4m" /*style="width: 125.725px;"*/ >
                                                    <span className="selection">
                                                        <span className="select2-selection select2-selection--multiple set_min_height250px" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false">
                                                            <ul className="select2-selection__rendered" id="select2--container">

                                                                {
                                                                    myArrayLoai.map((item: string, index: number) => (
                                                                        <li key={index} className="select2-selection__choice" title="Tester 2" data-select2-id="select2-data-86-rcxo">
                                                                            <button type="button" className="select2-selection__choice__remove" tabIndex={-1} title="Remove item" onClick={() => removeItemLoai(index)} aria-label="Remove item" aria-describedby="select2--container-choice-j2ed-112"><span aria-hidden="true">×</span></button>
                                                                            <span className="select2-selection__choice__display" id="select2--container-choice-j2ed-112">{item}</span>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>

                                                            <span className="select2-search select2-search--inline">
                                                                <textarea className="select2-search__field w-full" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" autoComplete="off" aria-label="Search" aria-describedby="select2--container" placeholder="Chọn loại câu hỏi" ></textarea>
                                                            </span>
                                                            <span className={`${"select2-container select2-container--default select2-container--open"} ${onQues ? 'hidden' : 'set_absolute_chonLoai'}`} /*style="position: absolute; top: 295.6px; left: 351.438px;"*/>
                                                                <span className="select2-dropdown select2-dropdown--above" dir="ltr" /*style="width: 548.287px;"*/>
                                                                    <span className="select2-results">
                                                                        <ul className="select2-results__options" role="listbox" aria-multiselectable="true" id="select2--results" aria-expanded="true" aria-hidden="false">

                                                                            {
                                                                                searchArrayLoai.map((item: string, index: number) => (
                                                                                    <li key={index} className={`${"select2-results__option select2-results__option--selectable"} ${'set_hover_hilight'}`} id="select2--result-4cus-113" role="option" data-select2-id="select2-data-select2--result-4cus-113" aria-selected="true" onClick={() => addItemLoai(item)}>{item}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className='form_group'>
                                            {
                                                myArrayLoai.map((item: string, index: number) => (
                                                    <div className="khoi_boder bot-15" key={index}>
                                                        <div className="bot-5">
                                                            <label >{item}<span className="color_red">*</span>
                                                            </label>
                                                        </div>
                                                        <input type="number" min={0} max={10} className="set_input_socauhoi" name="" placeholder="Nhập số câu hỏi (có 0 câu hỏi) " />
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>

                                    <div className="hethong_sinhde bot-15 c-pointer hieuung" >
                                        <div className="sinhdekiemtra flex a_center j_center ">
                                            <p className="size-14 chutrang">Sinh đề kiểm tra trắc nghiệm</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                { /*Dang tu Luannnnn  */}
                                <div className={`${"dang_tracnghiem"} ${(titleState === 'Hệ thống sinh đề theo điều khiển' && (titleStateDekT ==='Tự luận' || titleStateDekT === 'Trắc nghiệm và tự luận')) ? '' : 'hidden'}`} 
                                data-select2-id="select2-data-65-sgnq">
                                    <h4 className="font_ss16 font_wB chuxanh bot-15 hethong_sinhde" >Điều kiện câu hỏi tự luận</h4>
                                    <div className="form_container hethong_sinhde" >
                                        <div className="form_group ">
                                            <label >Số câu hỏi tự luận trong đề kiểm tra<span className="color_red">*</span></label>
                                            <input type="text" className="socauhoi" id="sodiem_ch_input" name="" value="" placeholder="Nhập số câu hỏi" />
                                        </div>
                                        <div className="form_group po_ra">
                                            <label >Thời gian thực hiện <span className="color_red">*</span></label>
                                            <input type="text" className="time_thuchien " name="" value="" placeholder="Nhập thời gian" id="time_thuchien_input" />
                                            <span className="po_ab chuden size-14 text_phut">Phút</span>
                                        </div>

                                    </div>
                                    <div className="form_container hethong_sinhde relative" data-select2-id="select2-data-64-fuqo">
                                        <div /*style="width: 49%;"*/ className="form_group select_no_muti " data-select2-id="select2-data-63-8ac7">
                                            <label className="one_line2 ">Chọn loại</label>
                                            <div /*style="margin-top: 5px;"*/ data-select2-id="select2-data-62-gug4 " className='mt-1' onClick={handleOnQuesTL}>


                                                <span className="select2 select2-container select2-container--default select2-container--below w-full " dir="ltr" data-select2-id="select2-data-47-5f4m" /*style="width: 125.725px;"*/ >
                                                    <span className="selection">
                                                        <span className="select2-selection select2-selection--multiple set_min_height250px" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false">
                                                            <ul className="select2-selection__rendered" id="select2--container">

                                                                {
                                                                    myArrayTuLuan.map((item: string, index: number) => (
                                                                        <li key={index} className="select2-selection__choice" title="Tester 2" data-select2-id="select2-data-86-rcxo">
                                                                            <button type="button" className="select2-selection__choice__remove" tabIndex={-1} title="Remove item" onClick={() => removeItemTL(index)} aria-label="Remove item" aria-describedby="select2--container-choice-j2ed-112"><span aria-hidden="true">×</span></button>
                                                                            <span className="select2-selection__choice__display" id="select2--container-choice-j2ed-112">{item}</span>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>

                                                            <span className="select2-search select2-search--inline">
                                                                <textarea className="select2-search__field w-full" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" autoComplete="off" aria-label="Search" aria-describedby="select2--container" placeholder="Chọn loại câu hỏi" ></textarea>
                                                            </span>
                                                            <span className={`${"select2-container select2-container--default select2-container--open"} ${onQuesTL ? 'hidden' : 'set_absolute_chonLoai'}`} /*style="position: absolute; top: 295.6px; left: 351.438px;"*/>
                                                                <span className="select2-dropdown select2-dropdown--above" dir="ltr" /*style="width: 548.287px;"*/>
                                                                    <span className="select2-results">
                                                                        <ul className="select2-results__options" role="listbox" aria-multiselectable="true" id="select2--results" aria-expanded="true" aria-hidden="false">

                                                                            {
                                                                                searchArrayLoai.map((item: string, index: number) => (
                                                                                    <li key={index} className={`${"select2-results__option select2-results__option--selectable"} ${'set_hover_hilight'}`} id="select2--result-4cus-113" role="option" data-select2-id="select2-data-select2--result-4cus-113" aria-selected="true" onClick={() => addItemTL(item)}>{item}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className='form_group'>
                                            {
                                                myArrayTuLuan.map((item: string, index: number) => (
                                                    <div className="khoi_boder bot-15" key={index}>
                                                        <div className="bot-5">
                                                            <label >{item}<span className="color_red">*</span>
                                                            </label>
                                                        </div>
                                                        <input type="number" min={0} max={10} className="set_input_socauhoi" name="" placeholder="Nhập số câu hỏi (có 0 câu hỏi) " />
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>

                                    <div className="hethong_sinhde bot-15 c-pointer hieuung" >
                                        <div className="sinhdekiemtra flex a_center j_center ">
                                            <p className="size-14 chutrang">Sinh đề kiểm tra tự luận</p>
                                        </div>
                                    </div>
                                    
                                </div>


                                <div className={`${"form_group group_ghi_chu"} ${(titleState === 'Người dùng tự thiết lập' ? '' : 'hidden')}`}>
                                    <label >Ghi chú</label>
                                    <Input_ckeditor input_name='editor' handleChange={(event: any) => setGhiChu(event)} />
                                </div>

                            </div>
                            <div className={`${"hethong_sinhde mt-5"} ${(titleState === 'Hệ thống sinh đề theo điều khiển' && (titleStateDekT ==='Trắc nghiệm' || titleStateDekT === 'Trắc nghiệm và tự luận')) ? '' : 'hidden'}`} id="show_phuhop_tn" >
                                        <div className="dang_tracnghiem" >
                                            <h4 className="font_ss16 font_wB chuxanh bot-15 ">Danh sách đề kiểm tra trắc nghiệm phù hợp</h4>
                                            <div className="body_ql_tieuchi body_ql_de">
                                                <div className="khoibang">
                                                    <div  className="bangchung overflow-x-auto mb-4 " id="bang_chung">
                                                        <table className="bangchinh tieu_chi set_min-width100">
                                                            <tbody className="op_sp_hethong">
                                                                <tr>
                                                                    <th>
                                                                        <p className="phantucon">Chọn</p>
                                                                    </th>
                                                                    <th>
                                                                        <p className="phantucon">Đề kiểm tra</p>
                                                                    </th>
                                                                    <th>
                                                                        <p className="phantucon">Ghi chú</p>
                                                                    </th>

                                                                    <th className='w-28'>
                                                                        <p className="phantucon">Chức năng</p>
                                                                    </th>
                                                                </tr>
                                                                <tr className="show_chung_hethong">
                                                                    <td colSpan={5}>
                                                                        <p className="chudo">Số lượng câu hỏi trắc nghiệm không đủ</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${"hethong_sinhde mt-5"} ${(titleState === 'Hệ thống sinh đề theo điều khiển' && (titleStateDekT ==='Tự luận' || titleStateDekT === 'Trắc nghiệm và tự luận')) ? '' : 'hidden'}`} id="show_phuhop_tn" >
                                        <div className="dang_tracnghiem" >
                                            <h4 className="font_ss16 font_wB chuxanh bot-15 ">Danh sách đề kiểm tra tự luận phù hợp</h4>
                                            <div className="body_ql_tieuchi body_ql_de">
                                                <div className="khoibang">
                                                    <div  className="bangchung overflow-x-auto mb-4 " id="bang_chung">
                                                        <table className="bangchinh tieu_chi set_min-width100">
                                                            <tbody className="op_sp_hethong">
                                                                <tr>
                                                                    <th>
                                                                        <p className="phantucon">Chọn</p>
                                                                    </th>
                                                                    <th>
                                                                        <p className="phantucon">Đề kiểm tra</p>
                                                                    </th>
                                                                    <th>
                                                                        <p className="phantucon">Ghi chú</p>
                                                                    </th>

                                                                    <th className='w-28'>
                                                                        <p className="phantucon">Chức năng</p>
                                                                    </th>
                                                                </tr>
                                                                <tr className="show_chung_hethong">
                                                                    <td colSpan={5}>
                                                                        <p className="chudo">Số lượng câu hỏi trắc nghiệm không đủ</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*danh sach cau hoi trasc nghiem */}
                            <div className={`${((titleState === 'Người dùng tự thiết lập' && (titleStateDekT === 'Trắc nghiệm' || titleStateDekT === 'Trắc nghiệm và tự luận')) ? '' : 'hidden')}`}>
                                <div className={`${"d_flex space_b width_100 align_c color_blue"} `}>
                                    <h4 className="font_ss16 font_wB">Danh sách câu hỏi trắc nghiệm</h4>
                                    <div className="btn_them_tieuchi d_flex align_c cursor_p" onClick={handleOnStation}>
                                        <div className="img">
                                            <Image src={cong} alt="Thêm" />
                                        </div>
                                        <p className="font_s14 font_w5">Thêm câu hỏi</p>
                                    </div>
                                </div>
                                <div className="bang_tieuchi_danhgia mb_20">
                                    <div className="khoibang">
                                        <div className="bangchung">
                                            <table className="bangchinh tieu_chi_fix1359 tess">
                                                <tbody className="op_sp">
                                                    <tr>
                                                        <th>
                                                            <p className="phantucon">STT</p>
                                                        </th>
                                                        <th className='w-3/5'>
                                                            <p className="phantucon">Câu hỏi</p>
                                                        </th>
                                                        <th>
                                                            <p className="phantucon">Số điểm</p>
                                                        </th>
                                                        <th >
                                                            <p className="phantucon">Chức năng</p>
                                                        </th>
                                                    </tr>
                                                    <tr className="row_table chungchung">
                                                        <td>1</td>
                                                        <td>
                                                            <p /*style="width: 580px;"*/ className="text_a_l one_line2">what??</p>
                                                        </td>
                                                        <td className="tongcon">10</td>
                                                        <td>
                                                            <div data-id-ch="428" className="btn_xoa d_flex c-pointer j_center hieuung">
                                                                <div className="img mr_5">
                                                                    <Image src={icon_xoa} alt="Xóa" />
                                                                </div>
                                                                <p className="color_red font_w5">Xóa</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*danh sach cau hoi trasc nghiem */}
                            <div className={`${((titleState === 'Người dùng tự thiết lập' && (titleStateDekT === 'Tự luận' || titleStateDekT === 'Trắc nghiệm và tự luận')) ? '' : 'hidden')}`}>
                                <div className={`${"d_flex space_b width_100 align_c color_blue"} `}>
                                    <h4 className="font_ss16 font_wB">Danh sách câu hỏi tự luận</h4>
                                    <div className="btn_them_tieuchi d_flex align_c cursor_p" onClick={handleOnStation}>
                                        <div className="img">
                                            <Image src={cong} alt="Thêm" />
                                        </div>
                                        <p className="font_s14 font_w5">Thêm câu hỏi</p>
                                    </div>
                                </div>
                                <div className="bang_tieuchi_danhgia mb_20">
                                    <div className="khoibang">
                                        <div className="bangchung">
                                            <table className="bangchinh tieu_chi_fix1359 tess">
                                                <tbody className="op_sp">
                                                    <tr>
                                                        <th>
                                                            <p className="phantucon">STT</p>
                                                        </th>
                                                        <th className='w-3/5'>
                                                            <p className="phantucon">Câu hỏi</p>
                                                        </th>
                                                        <th>
                                                            <p className="phantucon">Số điểm</p>
                                                        </th>
                                                        <th >
                                                            <p className="phantucon">Chức năng</p>
                                                        </th>
                                                    </tr>
                                                    <tr className="row_table chungchung">
                                                        <td>1</td>
                                                        <td>
                                                            <p /*style="width: 580px;"*/ className="text_a_l one_line2">what??</p>
                                                        </td>
                                                        <td className="tongcon">10</td>
                                                        <td>
                                                            <div data-id-ch="428" className="btn_xoa d_flex c-pointer j_center hieuung">
                                                                <div className="img mr_5">
                                                                    <Image src={icon_xoa} alt="Xóa" />
                                                                </div>
                                                                <p className="color_red font_w5">Xóa</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>                


                            <div className="thiet_lap d_flex mb_20">
                                <h4 className="color_blue font_wB font_ss16 mr_20">
                                    Thiết lập phân loại đánh giá:
                                </h4>
                                <div className="container_thietlap">
                                    <div className="d_flex align_c mr_30">
                                        <input type="radio" name="drone" id="radio_macdinh" value='1' checked={onPhanLoai} onClick={handleOnPhanLoai} className="mr_5 outline_none" />
                                        <label >Mặc định</label>
                                    </div>
                                    <div className="d_flex align_c">
                                        <input type="radio" name="drone" id="radio_khac" value="2" checked={!onPhanLoai} onClick={handleOnPhanLoai} className="mr_5 outline_none" />
                                        <label>Khác</label>
                                    </div>
                                </div>
                            </div>

                            <div className={`${onPhanLoai ? "body_ql_tieuchi phanloai_danhgia phanloai_danhgia_macdinh" : 'hidden'}`} >
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
                            <div className={`${onPhanLoai ? 'hidden' : "body_ql_tieuchi phanloai_danhgia phanloai_danhgia_khac"}`} /*style="display: block;"*/>

                                <div className="header_d width_100">
                                    <h4>Phân loại đánh giá</h4>
                                </div>
                                <div className="body width_100">
                                    {
                                        myArray.map((item: number, index: number) => (
                                            <div className="container_form_4_tong" key={index}>
                                                <div className="container_form_4 d_flex  ">
                                                    <div className="form_group phanloaithu_1">
                                                        <label >Từ <span className="color_red">*</span></label>
                                                        <input type="text" className="arr_tt_sp tu" name="tu_diem" placeholder="Nhập số điểm" />
                                                    </div>
                                                    <div className="form_group ">
                                                        <label >Đến<span className="color_red">*</span></label>
                                                        <input type="text" className="arr_tt_sp den mc_den1" name="den_diem" placeholder="Nhập số điểm" />
                                                    </div>
                                                    <div className="form_group">

                                                        <label >Loại<span className="color_red">*</span></label>
                                                        <div className="select_no_muti">
                                                            <span className="select2 select2-container select2-container--default w-full"
                                                                dir="ltr" data-select2-id="select2-data-2-0ck4" /*style="width: 100%;"*/
                                                                onClick={handleLoai}>
                                                                <span className="selection">
                                                                    <ul className={`${"set_selection_type "} ${onLoai ? 'hidden' : ''}`} >

                                                                        {
                                                                            LoaiArray.map((item: string, index: number) => (
                                                                                <li key={index} onClick={() => handleSetLoai(item)}>
                                                                                    {item}
                                                                                </li>
                                                                            )

                                                                            )
                                                                        }
                                                                    </ul>
                                                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-loai_danhgia-wg-container" aria-controls="select2-loai_danhgia-wg-container">
                                                                        <span className="select2-selection__rendered" id="select2-loai_danhgia-wg-container" role="textbox" aria-readonly="true" title="Chọn loại">{Loai}</span>
                                                                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b>
                                                                        </span></span></span>

                                                                <span className="dropdown-wrapper" aria-hidden="true"></span></span>

                                                        </div>
                                                    </div>
                                                    <div className="form_group form_btn d_flex content_c">
                                                        <button type="button" className="btn btn_xoa_loai btn_trang" onClick={() => removeItem(index)}>Xóa</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }



                                    <div className="themmoi_form " onClick={addItem}>
                                        <div data-num="1" className="btn btn_xanh themmoi_loai">
                                            <div className="img mr_10">
                                                <Image src={icon_plus} alt="Thêm mới" />
                                            </div>
                                            <p>Thêm loại</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Danh sach cau hoi trac nghiem*/}
                            <div className={`${"p_man popup popup_680 popup_them_tieuchi"} ${onstation ? '' : 'block'}`} /*style="display: block;"*/>
                                <div className="container container_fix">
                                    <div className="content">
                                        <div className="popup_header">
                                            <h4 className="name_header">Danh sách câu hỏi trắc nghiệm</h4>
                                            <button type='button' className="img close_popup" onClick={handleCancleStation}>
                                                <Image src={close} alt="đóng" />
                                            </button>
                                        </div>
                                        <div className="popup_body">
                                            <div className="thanh_search width_100 ">
                                                <div className="search-qlnv_fixed">
                                                    <div className="khoi_search_center">
                                                        <div className="left_search_fixed select_no_muti ql_tieuchi_m ">

                                                            <span className="select2 select2-container select2-container--default select2-container--below select2-container--open width_check100" dir="ltr" data-select2-id="select2-data-4-plru"><span className="selection">
                                                                <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="true" tabIndex={0} aria-disabled="false" aria-labelledby="select2--container" aria-controls="select2--container" aria-owns="select2--results">
                                                                    <span className="select2-selection__rendered" id="select2--container" role="textbox" aria-readonly="true" title="Tìm kiếm theo tên tiêu chí đánh giá" onClick={() => { setOnOffKh(!onOfKh); }}>
                                                                        {keHoach}
                                                                    </span>
                                                                    <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                                                                <span className={onOfKh ? 'hidden' : `${"dropdown-wrapper"} ${"relative z-20 flex justify-center "}`} >
                                                                    <ul id="" className={`${'absolute w-full bg-slate-100  py-2 mb-2 overflow-y-scroll h-52 snap-y border-b border-x border-slate-400 rounded-b-lg'} ${'displaynone_scroll'}`} >
                                                                        <li className='mx-2 mb-1'><input type='search' className='py-1 border-solid border outline-none border-slate-400 rounded-none w-full' onChange={handleInputChangeKH} value={searchQueryKH} /></li>
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
                                                            <Image src={search} className="kinhlup right-position-15" alt="timkiem" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form>
                                                <div className="container_khoibang">
                                                    <div className="a_khoibang ">
                                                        <div className="khoibang">
                                                            <div className="bangchung bangchung_1 ">
                                                                <table className="bangchinh">
                                                                    <tbody><tr>
                                                                        <th>
                                                                            <p className="phantucon">STT</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className="phantucon">Câu hỏi</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className="phantucon">Số điểm</p>
                                                                        </th>
                                                                        <th><input className="js_check_tc_tong" type="checkbox" /></th>
                                                                    </tr>
                                                                    </tbody></table>
                                                            </div>
                                                        </div>
                                                        <div className="khoibang khoibang_2">
                                                            <div className="bangchung bangchung_2 ">
                                                                <table className="bangchinh bang_tieuchi">
                                                                    <tbody>
                                                                        <tr className="js_cha_tc js_check_tc_con cha_tieuchi_137">

                                                                            <td>
                                                                                <p>1</p>
                                                                            </td>

                                                                            <td>
                                                                                <div className="d_flex btn_soxuong">
                                                                                    <p className="mr_10 font_w5">Tester 1</p>

                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <p>10</p>
                                                                            </td>
                                                                            <td>
                                                                                <input type="checkbox" className="js_check_tc_con" value="1" />
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="popup_btn m_edit">
                                                    <button type="button" className="btn btn_trang btn_140  mr_68 close_popup" onClick={handleCancleStation}>Hủy</button>
                                                    <button type="button" className="btn btn_xanh btn_140 submit_add_tc " onClick={handleCancleStation}>
                                                        Hoàn thành
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_btn d_flex content_c mt_25">
                                <Link href='/De-Danh-Gia-Nang-Luc' className="btn btn_trang btn_168 mr_60 outline_none" >Hủy</Link>
                                <button type="button" className="ajax_them_tc btn btn_xanh btn_168 outline_none" onClick={handleSave}>Lưu</button>
                            </div>
                        </form>
                        {/*<!--end form thêm mới tiêu chí 1 -->*/}
                    </div>
                </div >
            </div >
            
        </div >
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