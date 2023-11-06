
import Navbar from '@/pages/Du-Lieu-Xoa-Gan-Day/Navbar';
import React, { useState, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import back from '@/public/assets/img/back.png';
import Link from 'next/link';
import icon_i from '@/public/assets/img/icon_i.png'
import icon_so from'@/public/assets/img/icon_so.png'
import MyEditor from '@/components/MyCkeditor'
import parseISO from 'date-fns/parseISO';
import Router from 'next/router';
const searchState = ['Tiêu chí tổng hợp', 'Tiêu chí đơn'];
const searchStatement = ['Đóng', 'Mở'];


const Page = () => {
    /* Loai tieu chi */
    
    const [onstation, setOnstation] = useState(true)
    const handleOnStation = () => {
        setOnstation(!onstation)    
    }
    const [titleState, setTitleSate] = useState('Tiêu chí tổng hợp')
    
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
    const [titleStatement, setTitleStatement] = useState('Mở')
    const [stateOn,setStateOn] =useState(true)
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
        const filteredResults = searchComplex.filter((item : any) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };
    const handleInputComplex = (event: any) => {
   
        handleComplex(event.target.value);
    };

    /* open pop up */

    /* get ten tieu chi */
    const [tieuChi,setTieuChi] = useState('')
    const getTenTieuChi = (event : any) =>{
        setTieuChi(event.target.value);  
    }
    /*get nguoi tao */
    const [owner,setOwner] = useState('Vu Hoang Anh')
    /* get diem */
    const [diem,setDiem] =useState(0)
    const handleDiem = (event : any) =>{
        setDiem(event.target.value)
    }
    /*get data */
    const [ghiChu,setGhiChu]= useState('')
    /* Luu model */
    // useEffect(()=>{
    //     console.log(ghiChu)
    // },[ghiChu])
    const currentDate = new Date().toLocaleDateString("en-GB")
    
    const [promptShown, setPromptShown] = useState(false);
    let model = {}
     
    
    
    const handleSave = () =>{
        if(diem <= 0 || diem >= 10) alert('Nhap Lai diem. 0 <= diem <= 9')
        else {
          model ={name:tieuChi,ghiChu:ghiChu,diem:diem,type:titleState,owner:owner,date:currentDate,state:stateOn}
          let pushData = [];
          pushData= JSON.parse(sessionStorage.getItem('arrayTieuChi') || '[]')
          
          sessionStorage.setItem('arrayTieuChi',JSON.stringify([...pushData,model]));  
          Router.push('/Quan-Li-Tieu-Chi-Danh-Gia')
            console.log(model)
            
    }}
    
    const [onPopUp,setOnPopUp] = useState(true)
    
    return (
        <div className='main'>
            <Navbar urlBack='/Quan-Li-Tieu-Chi-Danh-Gia' />
            <div className="main_body">
                <div className="body_ql_tieuchi body_ql_tieuchi_danhgia">
                    <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
                        <Link href="/Quan-Li-Tieu-Chi-Danh-Gia">
                            <div className="flex center-height right-10 c-pointer">
                                <Image src={back} alt="Quay lai" />
                            </div>
                        </Link>
                        <p>Danh sách lý tiêu chí đánh giá / Thêm mới</p>
                    </div>
                    <div className="header_d width_100">
                        <h4 className='font-bold'>Thêm mới tiêu chí</h4>
                    </div>
                    <div className="body width_100">
                        {/*form thêm mới tiêu chí con (block người và ngày) */}
                        <form className="form form_tieuchi form_them_tieuchi form_them_tieuchi_con" >
                            <div className="container">
                                <div className="form_container">
                                    <div className="form_group group_ten">
                                        <label>Tên tiêu chí <span className="color_red">*</span></label>
                                        <input type="text" className="ten" name="ten" placeholder="Nhập tên tiêu chí" onChange={getTenTieuChi} value={tieuChi}/>
                                    </div>
                                    
                                    <div className="form_group position_r group_loai_tc tieuchi_1  ">
                                        <label className="hover_thongtin d_flex align_c c-pointer">
                                            <span>Loại tiêu chí</span>
                                            <Image src={icon_i} alt="Thông tin" className="ml_10 mr_5" />
                                            <span className="font_s14 color_blue font_wn">Thông tin</span>
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
                                                            <li className='m-1 ml-2'><input type="search" className='px-2 border border-slate-600 w-40 outline-none py-3 rounded-none' onChange={handleInputChange} /></li>
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
                                    <div className="form_group group_trang_thai ">
                                        <label > Trạng thái <span className="color_red">*</span></label>
                                        <span className={`${"select2 select2-container select2-container--default"} ${"w-full"}`} >
                                                <div className={`${"select_no_muti rounded-sm"} ${'relative w-full text-sm border border-slate-300 mr-4'}`}>
                                                    <div className='flex cursor-pointer' onClick={handleOnstatement}>

                                                        <p className='pr-1 py-2 pl-2 w-36' >{titleStatement}</p>
                                                        <span className="absolute right-0 pr-1 pt-4" role="presentation"><Image src={icon_so} alt=""></Image>
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <ul className={onstatement ? 'hidden' : `${"js_select_2 w-full absolute z-50 bg-white overflow-y-scroll h-28 rounded-b-md border border-x-slate-400 border-b-slate-400 displaynone_scroll"} `}>
                                                            <li className='m-1 ml-2'><input type="search" className='px-2 border border-slate-600 w-40 outline-none py-3 rounded-none' onChange={handleInputStatement} /></li>
                                                            <li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1'  onClick={() => { setTitleStatement('Mở'); setOnstatement(!onstatement); setStateOn(true) }}>Mở</li>
                                                            <li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1'  onClick={() => { setTitleStatement('Đóng'); setOnstatement(!onstatement); setStateOn(false) }}>Đóng</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </span>
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
                                                                filteredComplex.map((item :any, index : number) => {
                                                                    return (<li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' key={index} onClick={() => { setTitleComplex(item.name); setComplex(!complex) }}>{item.name}</li>)
                                                                })
                                                            }
                                                        </ul>
                                                    </div>

                                                </div>
                                            </span>
                                    </div>

                                    <div className={`${"form_group form_group_block group_nguoi_tao group_tc_cha"} ${(titleState === 'Tiêu chí đơn') ? 'hidden' : ''}`}>
                                        <label >Người tạo</label>
                                            <input type="text" data-nguoitao="1763" className="nguoi_tao" name="nguoi_tao" value={owner} />
                                        </div>
                                </div>
                                <div className="form_container">
                                    <div className={`${"form_group form_group_block group_ngay_tao group_tc_cha"} ${(titleState === 'Tiêu chí đơn') ? 'hidden' : ''}`}>
                                        <label >Ngày tạo</label>
                                        <input type="text" data-ngaytao="1690514069" className="ngay_tao" name="ngay_tao" value={currentDate} />
                                    </div>
                                    <div className={`${"form_group group_tc_con mr_20 "} ${(titleState === 'Tiêu chí đơn') ? '' : 'hidden'}`}>
                                        <div className=" d_flex m_tieuc_480">
                                            <div className="form_group form_group_block group_nguoi_tao  ">
                                                <label >Người tạo</label>
                                                <input type="text" className="nguoi_tao" name="nguoi_tao" data-nguoitao="1763" value={owner} />
                                            </div>
                                            <div className="form_group form_group_block group_ngay_tao">
                                                <label >Ngày tạo</label>
                                                <input type="text" data-ngaytao="1690514069" className="ngay_tao" name="ngay_tao" value={currentDate} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form_group  group_thang_diem">
                                        <label >Số điểm <span className="color_red">*</span></label>
                                        <input type="text" className="thang_diem" name="thang_diem" placeholder="Nhập số điểm" onChange={handleDiem} />
                                    </div>
                                </div>
                                <div className="form_group group_ghi_chu">
                                    <label >Ghi chú</label>
                                    <Input_ckeditor input_name='editor' handleChange={(event: any)=>setGhiChu(event)} />
                                </div>
                            </div>

                            <div className="form_btn d_flex content_c mt_25">
                                <Link href='/Quan-Li-Tieu-Chi-Danh-Gia' className="btn btn_trang btn_168 mr_60 outline_none">Hủy</Link>
                                <button type="button"   className="ajax_them_tc btn btn_xanh btn_168 outline_none"  onClick={handleSave}>Lưu</button>
                            </div>
                        </form>
                        {/*<!--end form thêm mới tiêu chí 1 -->*/}
                    </div>
                </div>
            </div>
        </div>
    );
};
export function Input_ckeditor({ value,handleChange,input_name }: any) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState();
  
    useEffect(() => {
      setEditorLoaded(true);
    }, []);
    return (
        <MyEditor
          name={input_name}
          onChange={(data:any) => {
            setData(data);
            handleChange(data)
          }}
          editorLoaded={editorLoaded}
          value={value}
        />
    )
}
  
export default Page;