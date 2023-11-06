
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
const arrayLoai =['Chọn loại','Yếu','Trung bình','Khá','Giỏi','Xuất sắc']
const Page = () => {
    /* Them tieu chi */

    const [onstation, setOnstation] = useState(true)
    const handleOnStation = () => {
        setOnstation(!onstation)
    }
    const handleCancleStation = () =>{
        setOnstation(true)
    }
    /*Thiet Lap Phan Loaji Danh gia */
    const [onPhanLoai,setOnPhanLoai] = useState(true)
    const handleOnPhanLoai = () =>{
        setOnPhanLoai(!onPhanLoai)
    }
   
    /* Them phan Loai danh gia */
    const [myArray, setMyArray] = useState([1]); // Initialize the array with initial values
    const [stateOn, setStateOn] = useState([true])
    const [indexCheck,setIndexCheck] = useState(1)
    const addItem = () => {
        // Using the spread operator to create a new array with the additional item
        setMyArray([...myArray, 1]);
        setStateOn([...stateOn, true]);
        setTitleStatement([...titleStatement,'Chọn loại']);
    };
    const removeItem = (indexToRemove : number) => {
        // Using the filter method to create a new array without the item at the specified index
        setMyArray(myArray.filter((item:number, index) => index !== indexToRemove));
        setStateOn(stateOn.filter((item:boolean, index) => index !== indexToRemove));
        setTitleStatement(titleStatement.filter((item:string, index) => index !== indexToRemove));
    };
    const cutcut = (index : number) =>{
        stateOn[index]= !stateOn[index]
        setStateOn([...stateOn])
        setIndexCheck(index)
    }
    const titleOnClick = (index : number,value:string) =>{
        titleStatement[index]=value
        setTitleStatement([...titleStatement])
        console.log(titleStatement)
    }
    const [titleStatement, setTitleStatement] = useState(['Chọn loại'])
    
    const [filteredStatement, setFilteredStatement] = useState(arrayLoai);
    const handleStatement = (query: string) => {
        const filteredResults = arrayLoai.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredStatement(filteredResults);
    };
    const handleInputStatement = (event: any) => {

        handleStatement(event.target.value);
    };



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
    const [onOfKh, setOnOffKh] = useState(true)
    return (
        <div className='main'>
            <Navbar urlBack='/De-Danh-Gia-Nang-Luc' />
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
                        <h4>Thêm mới đề đánh giá năng lực</h4>
                    </div>
                    <div className="body width_100">
                        {/*form thêm mới tiêu chí con (block người và ngày) */}
                        <form className="form form_tieuchi form_them_tieuchi form_them_tieuchi_con" >
                            <div className="container">
                                <div className="form_container">
                                    <div className="form_group group_ten">
                                        <label>Tên đề đánh giá năng lực <span className="color_red">*</span></label>
                                        <input type="text" className="ten" name="ten" placeholder="Nhập tên đề đánh giá năng lực" onChange={getTenTieuChi} value={tieuChi} />
                                    </div>
                                    <div className={`${"form_group form_group_block group_nguoi_tao group_tc_cha"} `}>
                                        <label >Người tạo</label>
                                        <input type="text" data-nguoitao="1763" className="nguoi_tao" name="nguoi_tao" value={owner} />
                                    </div>
                                </div>

                                <div className="form_container">
                                    <div className={`${"form_group form_group_block group_ngay_tao group_tc_cha"} `}>
                                        <label >Ngày tạo</label>
                                        <input type="text" data-ngaytao="1690514069" className="ngay_tao" name="ngay_tao" value={currentDate} />
                                    </div>


                                    <div className={`${"form_group form_group_block group_nguoi_tao group_tc_cha"} `}>
                                        <label >Thang điểm</label>
                                        <input type="text" data-nguoitao="1763" className="nguoi_tao" name="nguoi_tao" value='10' />
                                    </div>
                                </div>
                                <div className="form_group group_ghi_chu">
                                    <label >Ghi chú</label>
                                    <Input_ckeditor input_name='editor' handleChange={(event: any) => {setGhiChu(event), console.log(event.target.value)}} />
                                </div>

                            </div>
                            <div className="d_flex space_b width_100 align_c color_blue">
                                <h4 className="font_ss16 font_wB">Tiêu chí đánh giá</h4>
                                <div className="btn_them_tieuchi d_flex align_c cursor_p" onClick={handleOnStation}>
                                    <div className="img">
                                        <Image src={cong} alt="Thêm tiêu chí" />
                                    </div>
                                    <p className="font_s14 font_w5">Thêm tiêu chí</p>
                                </div>
                            </div>
                            <div className="bang_tieuchi_danhgia mb_20">
                                <div className="khoibang">
                                    <div className="bangchung">
                                        <table className="bangchinh tieu_chi_fix1359 tess">
                                            <tbody className="op_sp">
                                                <tr>
                                                    <th>
                                                        <p className="phantucon">ID</p>
                                                    </th>
                                                    <th>
                                                        <p className="phantucon">Tên tiêu chí</p>
                                                    </th>
                                                    <th>
                                                        <p className="phantucon">Thang điểm</p>
                                                    </th>
                                                    <th>
                                                        <p className="phantucon">Chức năng</p>
                                                    </th>
                                                </tr>

                                            </tbody>
                                            <tbody><tr className="nentrang-chuden  ">
                                                <td >
                                                    <p className="text_a_l"><span>Tổng điểm: </span>
                                                        <span className="tb_td_er color_red"></span>
                                                    </p>
                                                </td>
                                                <td className="show_tong" colSpan={2}>0</td>

                                            </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <div className="thiet_lap d_flex mb_20">
                                <h4 className="color_blue font_wB font_ss16 mr_20">
                                    Thiết lập phân loại đánh giá:
                                </h4>
                                <div className="container_thietlap">
                                    <div className="d_flex align_c mr_30">
                                        <input type="radio" name="drone" id="radio_macdinh" value='1' checked={onPhanLoai} onClick={handleOnPhanLoai}className="mr_5 outline_none" />
                                        <label >Mặc định</label>
                                    </div>
                                    <div className="d_flex align_c">
                                        <input type="radio" name="drone" id="radio_khac" value="2" checked={!onPhanLoai} onClick={handleOnPhanLoai}className="mr_5 outline_none" />
                                        <label>Khác</label>
                                    </div>
                                </div>
                            </div>
                           
                                <div className={`${onPhanLoai ? "body_ql_tieuchi phanloai_danhgia phanloai_danhgia_macdinh" : 'hidden'}`} >
                                    <div className="header_d width_100">
                                        <h4>Phân loại đánh giá</h4>
                                    </div>
                                    <div className="body width_100">
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
                                        myArray.map((item:number,index:number)=>(
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
                                                    onClick={()=>{
                                                        cutcut(index)
                                                    }}>
                                                        <span className="selection">
                                                        <ul className={`${"set_selection_type "} ${stateOn[index] ? 'hidden' : ''}`} >
                                                                
                                                                {
                                                                    arrayLoai.map((item : string,index:number) =>(
                                                                        <li key={index} onClick={()=>{
                                                                            titleOnClick(indexCheck,item)
                                                                        }}>
                                                                            {item}
                                                                        </li>
                                                                    )

                                                                    )
                                                                }
                                                            </ul>
                                                            <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-loai_danhgia-wg-container" aria-controls="select2-loai_danhgia-wg-container">
                                                            <span className="select2-selection__rendered" id="select2-loai_danhgia-wg-container" role="textbox" aria-readonly="true" title="Chọn loại">{titleStatement[index]}</span>
                                                            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b>
                                                            </span></span></span>
                                                           
                                                            <span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                        
                                                </div>
                                            </div>
                                            <div className="form_group form_btn d_flex content_c">
                                                <button type="button" className="btn btn_xoa_loai btn_trang" onClick={()=>removeItem(index)}>Xóa</button>
                                            </div>
                                        </div>
                                        </div>
                                        ))
                                    }
                                    
                                        
                                        
                                        <div className="themmoi_form " >
                                            <div data-num="1" className="btn btn_xanh themmoi_loai"onClick={addItem}>
                                                <div className="img mr_10">
                                                    <Image src={icon_plus} alt="Thêm mới" />
                                                </div>
                                                <p>Thêm loại</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            
                            <div className={`${"p_man popup popup_680 popup_them_tieuchi"} ${onstation ? '':'block'}`} /*style="display: block;"*/>
                                <div className="container container_fix">
                                    <div className="content">
                                        <div className="popup_header">
                                            <h4 className="name_header">Danh sách tiêu chí</h4>
                                            <button type='button' className="img close_popup" onClick={handleCancleStation}>
                                                <Image src={close}alt="đóng" />
                                            </button>
                                        </div>
                                        <div className="popup_body">
                                            <div className="thanh_search width_100 ">
                                                <div className="search-qlnv_fixed">
                                                <div className="khoi_search_center">
                                                    <div className="left_search_fixed select_no_muti ql_tieuchi_m ">

                                                        <span className="select2 select2-container select2-container--default select2-container--below select2-container--open width_check100" dir="ltr" data-select2-id="select2-data-4-plru"><span className="selection">
                                                            <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="true" tabIndex={0} aria-disabled="false" aria-labelledby="select2--container" aria-controls="select2--container" aria-owns="select2--results">
                                                                <span className="select2-selection__rendered" id="select2--container" role="textbox" aria-readonly="true" title="Tìm kiếm theo tên tiêu chí đánh giá" onClick={() =>{setOnOffKh(!onOfKh); }}>
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
                                                        <div className="khoibang overflow-y-scroll">
                                                            <div className="bangchung bangchung_2 set_height630px ">
                                                                <table className="bangchinh set_width100per">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th>
                                                                                <p className="phantucon">STT</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className="phantucon">Tên tiêu chí</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className="phantucon">Thang điểm</p>
                                                                            </th>
                                                                        <th><input className="js_check_tc_tong" type="checkbox" /></th>
                                                                    </tr>  
                                                                    {
                                                                            searchArray.map((item:any,index:number)=>(
                                                                                <tr key={index} className="js_cha_tc js_check_tc_con cha_tieuchi_137">

                                                                                    <td>
                                                                                        <p>137</p>
                                                                                    </td>

                                                                                    <td>
                                                                                        <div className="d_flex btn_soxuong">
                                                                                            <p className="mr_10 font_w5">Tester 1</p>
                                                                                            <div className="img so_xoay so_xoaypop_137">
                                                                                                <Image src={icon_so}alt="Sổ xuống" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p>10</p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <input type="checkbox" className="js_check_tc_con" value="137" />
                                                                                    </td>
                                                                                </tr>
                                                                            ))
                                                                        }
                                                                
                                                                    </tbody>
                                                                    
                                                                    </table>
                                                            </div>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="popup_btn m_edit">
                                            <button type="button" className="btn btn_trang btn_140  mr_68 close_popup" onClick={handleCancleStation}>Hủy</button>
                                            <button type="button" className="btn btn_xanh btn_140 submit_add_tc "  onClick={handleCancleStation}>
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
                    <button type="button" className="ajax_them_tc btn btn_xanh btn_168 outline_none" >Lưu</button>
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