
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
import add_img from '@/public/assets/img/add_img_ch.png';
import tuLuan from '@/public/assets/img/hoi_1.png'
import tracnghiem from '@/public/assets/img/hoi_2.png'
import HopKiem from '@/public/assets/img/hoi_3.png'
import icon_plus from '@/public/assets/img/icon_plus.png'
const searchState = ['Test1', 'Test2', 'test3'];
const searchStatement = ['Đóng', 'Mở'];


const Page = () => {
    /* Loai tieu chi */

    const [onstation, setOnstation] = useState(true)
    const handleOnStation = () => {
        setOnstation(!onstation)
    }
    const [titleState, setTitleSate] = useState('Chọn loại câu hỏi')

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

    /* trang thai */
    const [onstatement, setOnstatement] = useState(true)
    const handleOnstatement = () => {
        setOnstatement(!onstatement)
    }
    const [titleStatement, setTitleStatement] = useState('Tự luận')
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

    /* get ten tieu chi */
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

    const [promptShown, setPromptShown] = useState(false);
    let model = {}



    const handleSave = () => {
        if (diem <= 0 || diem >= 10) alert('Nhap Lai diem. 0 <= diem <= 9')
        else {

            Router.push('/Danh-Sach-Cau-Hoi')
            console.log(model)

        }
    }

    const [onPopUp, setOnPopUp] = useState(true)
    /* cau hoi trac nghiem */
    const [onPhanLoai, setOnPhanLoai] = useState(true)
    const handleOnPhanLoai = () => {
        setOnPhanLoai(!onPhanLoai)
    }
    /* them moi cau hoi trac ghiem */
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
    /* Hop kiem */
    const [onHopKiem, setOnHopKiem] = useState(true)
    const handleOnHopKiem = () => {
        setOnHopKiem(!onHopKiem)
    }
    /* them moi cau hoi trac ghiem */
    /* Them phan Loai danh gia */
    const [myArray1, setMyArray1] = useState([1]); // Initialize the array with initial values

    const addItem1 = () => {
        // Using the spread operator to create a new array with the additional item
        setMyArray1([...myArray1, 1]);
    };

    const removeItem1 = (indexToRemove: number) => {
        // Using the filter method to create a new array without the item at the specified index
        setMyArray1(myArray1.filter((item: number, index) => index !== indexToRemove));
    };
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
                        <p>Quản lí câu hỏi / Thêm mới</p>
                    </div>
                    <div className="header_d width_100">
                        <h4>Thêm mới tiêu chí</h4>
                    </div>
                    <div className="body width_100">
                        {/*form thêm mới tiêu chí con (block người và ngày) */}
                        <form className="form form_tieuchi form_them_tieuchi form_them_tieuchi_con" >
                            <div className="container">
                                <div className="form_container">
                                    <div className="form_group group_trang_thai ">
                                        <label > Hình thức câu hỏi <span className="color_red">*</span></label>
                                        <span className={`${"select2 select2-container select2-container--default"} ${"w-full"}`} >
                                            <div className={`${"select_no_muti rounded-sm"} ${'relative w-full text-sm border border-slate-300 mr-4'}`}>
                                                <div className='flex cursor-pointer' onClick={handleOnstatement}>

                                                    <p className='pr-1 py-2 pl-2 w-36' >
                                                        <div className="d_flex align_c">
                                                            <div className="img mr_10">
                                                                {
                                                                    (titleStatement === 'Tự luận') ? (
                                                                        <Image src={tuLuan} alt='tu luan' />
                                                                    ) : (
                                                                        <>
                                                                            {
                                                                                (titleStatement === 'Trắc nghiệm') ? (
                                                                                    <Image src={tracnghiem} alt='tu luan' />
                                                                                ) : (
                                                                                    <Image src={HopKiem} alt='tu luan' />
                                                                                )
                                                                            }
                                                                        </>
                                                                    )
                                                                }

                                                            </div>
                                                            <p>{titleStatement}</p>
                                                        </div>

                                                    </p>
                                                    <span className="absolute right-0 pr-1 pt-4" role="presentation"><Image src={icon_so} alt=""></Image>
                                                    </span>
                                                </div>

                                                <div>
                                                    <ul className={onstatement ? 'hidden' : `${"js_select_2 w-full absolute z-50 bg-white overflow-y-scroll h-28 rounded-b-md border border-x-slate-400 border-b-slate-400 displaynone_scroll"} `}>
                                                        <li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' onClick={() => { setTitleStatement('Tự luận'); setOnstatement(!onstatement); setStateOn(false) }}>
                                                            <div className='flex'>
                                                                <div className='img mr_10'>
                                                                    <Image src={tuLuan} alt='tu luan' />
                                                                </div>

                                                                <p>Tự luận</p>
                                                            </div>

                                                        </li>
                                                        <li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' onClick={() => { setTitleStatement('Trắc nghiệm'); setOnstatement(!onstatement); setStateOn(true) }}>

                                                            <div className='flex'>
                                                                <div className='img mr_10'>
                                                                    <Image src={tracnghiem} alt='trac nghiem' />
                                                                </div>

                                                                <p>Trắc nghiệm</p>
                                                            </div>

                                                        </li>
                                                        <li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' onClick={() => { setTitleStatement('Hộp kiểm'); setOnstatement(!onstatement); setStateOn(false) }}>
                                                            <div className='flex'>
                                                                <div className='img mr_10'>
                                                                    <Image src={HopKiem} alt='trac nghiem' />
                                                                </div>

                                                                <p>Hộp kiểm</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </span>
                                    </div>

                                    <div className="form_group position_r group_loai_tc tieuchi_1  ">
                                        <label className="hover_thongtin d_flex align_c c-pointer">
                                            <span>Loại câu hỏi</span>

                                        </label>
                                        <div className='mt-1'>
                                            <span className={`${"select2 select2-container select2-container--default"} ${"w-full"}`} dir="ltr" data-select2-id="select2-data-1-v4qz" >
                                                <div className={`${"select_no_muti rounded-sm"} ${'relative w-full text-sm border border-slate-300 mr-4'}`}>
                                                    <div className='flex cursor-pointer' onClick={handleOnStation}>

                                                        <p className='pr-1 py-2 pl-2 w-36' >{titleState}</p>
                                                        <span className="absolute right-0 pr-1 pt-4" role="presentation"><Image src={icon_so} alt=""></Image>
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <ul className={onstation ? 'hidden' : `${"js_select_2 w-full absolute z-50 bg-white overflow-y-scroll h-28 rounded-b-md border border-x-slate-400 border-b-slate-400 displaynone_scroll"} `}>

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

                                        <div className="modal_loai_tieuchi modal_loai_tieuchi_1" >
                                            <p>Tiêu chí đơn: Là tiêu chí con thuộc tiêu chí tổng hợp.</p>
                                        </div>
                                        <div className="modal_loai_tieuchi modal_loai_tieuchi_2" >
                                            <p>Tiêu chí tổng hợp: Là tiêu chí có thể gồm nhiều tiêu chí con
                                                khác.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_container ">
                                    <div className="form_group group_ten">
                                        <label>Số điểm <span className="color_red">*</span></label>
                                        <input type="text" className="ten" name="ten" placeholder="Nhập số điểm" onChange={handleDiem} value={diem} />
                                    </div>
                                    <div className={`${"form_group group_tc_con display w-full"} ${(titleState === 'Tiêu chí đơn') ? '' : 'hidden'}`}>
                                        <label > Tiêu chí tổng hợp <span className="color_red ">*</span></label>

                                        <span className={`${"select2 select2-container select2-container--default"} ${"w-full"}`} dir="ltr" data-select2-id="select2-data-1-v4qz" >
                                            <div className={`${"select_no_muti rounded-sm"} ${'relative w-full text-sm border border-slate-300 mr-4'}`}>
                                                <div className='flex cursor-pointer' onClick={handleOnComplex}>

                                                    <p className='pr-1 py-2 pl-2 w-36' >{titleComplex}</p>
                                                    <span className="absolute right-0 pr-1 pt-4" role="presentation"><Image src={icon_so} alt=""></Image>
                                                    </span>
                                                </div>

                                                <div>
                                                    <ul className={complex ? 'hidden' : `${"js_select_2 w-full absolute z-50 bg-white overflow-y-scroll h-28 rounded-b-md border border-x-slate-400 border-b-slate-400 displaynone_scroll"} `}>
                                                        <li className='m-1 ml-2'><input type="search" className='px-2 border border-slate-600 w-40 outline-none py-3 rounded-none' onChange={handleInputComplex} /></li>
                                                        {
                                                            filteredComplex.map((item: any, index: number) => {
                                                                return (<li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' key={index} onClick={() => { setTitleComplex(item.name); setComplex(!complex) }}>{item.name}</li>)
                                                            })
                                                        }
                                                    </ul>
                                                </div>

                                            </div>
                                        </span>
                                    </div>

                                    <div className="form_group po_ra">
                                        <label>Thời gian thực hiện <span className="color_red">*</span></label>
                                        <input type="text" className="time_thuchien_input" name="ten" placeholder="Nhập thời gian" onChange={getTenTieuChi} value={tieuChi} />
                                        <span className="po_ab chuden size-14 text_phut">Phút</span>
                                    </div>
                                </div>
                                <div className="form_group group_ghi_chu">
                                    <div className='flex space'>

                                        <label >Câu hỏi <span className="color_red">*</span></label>

                                        <div className="flex j_end c-pointer add_image w-52">
                                            <Image src={add_img} alt="" />
                                            <span className="chuxanh size-14 left-5">Chọn ảnh</span>
                                        </div>
                                    </div>
                                    <Input_ckeditor input_name='editor' handleChange={(event: any) => setGhiChu(event)} />
                                </div>

                                <div className={`${"form_group group_ghi_chu"} ${(titleStatement === 'Tự luận') ? '' : 'hidden'}`}>
                                    <label >Đáp án <span className="color_red">*</span></label>
                                    <Input_ckeditor input_name='editor' handleChange={(event: any) => setGhiChu(event)} />
                                </div>
                                <div className={`${"form_group display_none sel_dang_2_dapan dangchung_dapan block"} ${(titleStatement === 'Trắc nghiệm') ? '' : 'hidden'}`} >
                                    <label >Đáp án<span className="color_red">*</span></label>
                                    <div className="m_boder_tracnghiem">
                                        {
                                            myArray.map((item:number,index:number)=>(
                                                <div className="tuychon mt_5 tochung" key={index}>
                                                <div className="container_tuychon container_tuychon1">
                                                    <div className="tuychon_header width_100 d_flex space_b align_c">
                                                        <div className='al_center tuychon_input d_flex width_70  mr_20'>
                                                            <input type="radio" name="drone" id="radio_macdinh" value='1'  onClick={handleOnPhanLoai} className="mr_5 outline_none" />
                                                            <input type="text" placeholder="Nhập đáp án, chọn để đánh dấu là đáp án đúng,enter để thêm đáp án " name="" className="ten_tuychon keypress_l" />
                                                            <div className="them_anh width_30 flex space_b a_end">
                                                                <p className="color_red size-14 c-pointer top-20" onClick={()=>removeItem(index)}>Xoá</p>
                                                                {/*<div className="btn_them_anh  item d_flex mr_20">
                                                                                <div className="img mr_5">
                                                                                    
                                                                                </div>
                                                                                <p>Thêm ảnh</p>
                                                                            </div>
                                                                <input type="file" className="add_tracnghiemanh" />*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            ))
                                        }
                                        
                                        
                                    </div>
                                    <div className="btn_them_tuychon hieuung d_flex align_c cursor_p " onClick={addItem}>
                                        <div className="img mr_10">
                                            <Image src={icon_plus} alt="Thêm tùy chọn" />
                                        </div>
                                        <p className="color_blue font_s14">Thêm tùy chọn</p>
                                    </div>
                                </div>
                                <div className={`${"form_group display_none sel_dang_2_dapan dangchung_dapan block"} ${(titleStatement === 'Hộp kiểm') ? '' : 'hidden'}`} >
                                    <label >Đáp án<span className="color_red">*</span></label>
                                    <div className="m_boder_hopkiem">
                                        {
                                            myArray1.map((item:number,index:number)=>(
                                                <div className="tuychon mt_5 tochung_hopkiem" key={index}>
                                                <div className="container_tuychon container_tuychon1">
                                                    <div className="tuychon_header width_100 d_flex space_b align_c">
                                                        <div className='al_center tuychon_input d_flex width_70  mr_20'>
                                                            <input type="checkbox" name="drone" id="radio_macdinh" value='1'  onClick={handleOnHopKiem} className="mr_5 outline_none" />
                                                            <input type="text" placeholder="Nhập đáp án, chọn để đánh dấu là đáp án đúng,enter để thêm đáp án " name="" className="ten_tuychon keypress_l" />
                                                            <div className="them_anh width_30 flex space_b a_end">
                                                                <p className="color_red size-14 c-pointer top-20" onClick={()=>removeItem1(index)}>Xoá</p>
                                                                {/*<div className="btn_them_anh  item d_flex mr_20">
                                                                                <div className="img mr_5">
                                                                                    
                                                                                </div>
                                                                                <p>Thêm ảnh</p>
                                                                            </div>
                                                                <input type="file" className="add_tracnghiemanh" />*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            ))
                                        }
                                        
                                        
                                    </div>
                                    <div className="btn_them_tuychon hieuung d_flex align_c cursor_p " onClick={addItem1}>
                                        <div className="img mr_10">
                                            <Image src={icon_plus} alt="Thêm tùy chọn" />
                                        </div>
                                        <p className="color_blue font_s14">Thêm tùy chọn</p>
                                    </div>
                                </div>
                            </div>

                            <div className="form_btn d_flex content_c mt_25">
                                <Link href='/Danh-Sach-Cau-Hoi' className="btn btn_trang btn_168 mr_60 outline_none">Hủy</Link>
                                <button type="button" className="ajax_them_tc btn btn_xanh btn_168 outline_none" onClick={handleSave}>Lưu</button>
                            </div>
                        </form>
                        {/*<!--end form thêm mới tiêu chí 1 -->*/}
                    </div>
                </div>
            </div>
        </div>
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