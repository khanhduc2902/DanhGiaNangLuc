
import Navbar from '@/pages/Du-Lieu-Xoa-Gan-Day/Navbar';
import React, { useState, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import back from '@/public/assets/img/back.png';
import Link from 'next/link';
import icon_i from '@/public/assets/img/icon_i.png'
import icon_so from '@/public/assets/img/icon_so.png'
import MyEditor from './MyCkeditor'
import sao_xanh from '@/public/assets/img/xanh_2.png'
import nguoi_xanh from '@/public/assets/img/xanh_3.png'
import doc_xanh from '@/public/assets/img/xanh_8.png'
import Router from 'next/router';
import ngoisao from '@/public/assets/img/xanh_4.png'
import caibut from '@/public/assets/img/xanh_1.png'
import doc from '@/public/assets/img/xanh_7.png'
import next from '@/public/assets/img/next_trang.png'
import prev from '@/public/assets/img/pre_trang.png'
import { compareAsc, parseISO, set } from 'date-fns';
import hinhnguoi from '@/public/assets/img/xanh_5.png'
import DanhGiaNangLuc from './DanhGiaNangLuc';
import NguoiDanhGia from './NguoiDanhGia';
import KiemTraNangLuc from './KiemTraNangLuc';
const searchState = ['Không lặp lại', 'Lặp lại hàng ngày', 'Lặp lại hàng tuần', 'Lặp lại hàng tháng', 'Lặp lại hàng năm'];
const searchState1 = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
const searchStatement = ['Đề đánh giá', 'Đề kiểm tra', 'Đề đánh giá và đề kiểm tra'];
interface MyObject {
    // Định nghĩa các thuộc tính của object của bạn
    start: string;
    end: string;
    // ...
}
interface MyComponent{
    title: string;
    typeCheck: string;
    typeCount: number;
}
const DeDanhGia : React.FC<MyComponent> = ({title,typeCheck,typeCount}) => {
    /* Hinh thuc ke hoach */

    const [onstation, setOnstation] = useState(true)
    const handleOnStation = () => {
        setOnstation(!onstation)
    }
    const [titleState, setTitleSate] = useState('Không lặp lại')

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
    /* Chon thu */

    const [onstation1, setOnstation1] = useState(true)
    const handleOnStation1 = () => {
        setOnstation1(!onstation1)
    }
    const [titleState1, setTitleSate1] = useState('Thứ 2')

    const [filteredData1, setFilteredData1] = useState(searchState1);
    const handleSearch1 = (query: string) => {
        const filteredResults = searchState1.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData1(filteredResults);
    };
    const handleInputChange1 = (event: any) => {

        handleSearch1(event.target.value);
    };
    /* Chon loai ke hoach danh gias */
    const [onstatement, setOnstatement] = useState(true)
    const handleOnstatement = () => {
        setOnstatement(!onstatement)
    }
    const [titleStatement, setTitleStatement] = useState(typeCheck)
    const [checkedType, setCheckedType] = useState(typeCount)
    const [stateOn, setStateOn] = useState(true)
    const [filteredStatement, setFilteredStatement] = useState(searchStatement);
    const handleStatement = (query: string) => {
        const filteredResults = searchStatement.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredStatement(filteredResults);
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
    /* thoi gian lic*/
    const [showTime, setShowTime] = useState(true)
    const [dateStart, setDateStart] = useState('')
    const [dateEnd, setDateEnd] = useState('')

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDateStart(event.target.value);
        
    };
    const handleDateChange2 = (event: ChangeEvent<HTMLInputElement>) => {
        setDateEnd(event.target.value);
       
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
    const handleTime = () => {
        setShowTime(!showTime)

    }
    /* quay lai ke tiep */
    const [count, setCount] = useState(1)
    const handlePrev = () => {
        if (count <= 1) setCount(1)
        else setCount(count - 1)
    }
    const handleNext = () => {
        if (titleStatement === 'Đề đánh giá và đề kiểm tra') {
            if (count >= 4) console.log('max size')
            else setCount(count + 1)
        }
        else {
            if (count >= 3) console.log('max size')
            else setCount(count + 1)
        }

    }
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
    
    const handleCKEchange = (e:any) =>{
        setGhiChu(e.value)
    }
   

    /* Luu model */
    const currentDate = new Date().toLocaleDateString("en-GB")

    const [promptShown, setPromptShown] = useState(false);
    let model = {}


    const handleSave = () => {
        if (diem <= 0 || diem >= 10) alert('Nhap Lai diem. 0 <= diem <= 9')
        else {
            model = { name: tieuChi, ghiChu: ghiChu, diem: diem, type: titleState, owner: owner, date: currentDate, state: stateOn }
            let pushData = [];
            pushData = JSON.parse(sessionStorage.getItem('arrayTieuChi') || '[]')

            sessionStorage.setItem('arrayTieuChi', JSON.stringify([...pushData, model]));
            Router.push('/Quan-Li-Tieu-Chi-Danh-Gia')
            console.log(model)

        }
    }
    const [checked, setChecked] = useState(true)
    const handleCheckedDi = () => {
        setChecked(!checked)
    }
    const [onPopUp, setOnPopUp] = useState(true)
    /* get gio */
    const [startHour,setStartHour] =useState('')
    const [endHour, setEndHour] = useState('')
    const handleStartHour = (event : any) =>{
        setStartHour(event.target.value)
    }
    const handleEndHour = (event : any) =>{
        setEndHour(event.target.value)
    }
    
    return (
        <div className='main'>
            <Navbar urlBack='/Ke-Hoach-Danh-Gia' />
            <div className="main_body">
                <div className="body_ql_tieuchi body_ql_tieuchi_danhgia">
                    <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
                        <Link href="/Ke-Hoach-Danh-Gia">
                            <div className="flex center-height right-10 c-pointer">
                                <Image src={back} alt="Quay lai" />
                            </div>
                        </Link>
                        <p className='font-bold'>Quản lý kế hoạch đánh giá / {title}</p>
                    </div>
                    <div className="header_them_kehoach header_them_kehoach_buoc_dau">
                        <div className="container_img_1">
                            <div className={`${"container_img"} ${checkedType === 0 ? '' : 'hidden'}`}>
                                <div className={`${"img"} `} >
                                    <Image src={caibut} alt="Bước 1" />
                                </div>
                                <div className={`${"img img_right img_xam"} ${(1 < count && count <= 3) ? 'img_xanh' : ''}`}>
                                    <Image src={(1 < count && count <= 3) ? sao_xanh : ngoisao} alt="Bước 2" />
                                </div>
                                <div className={`${"img img_right img_xam"} ${(count=== 3) ? 'img_xanh' : ''}`}>
                                    <Image src={count === 3 ? nguoi_xanh : hinhnguoi} alt="Bước 3" />
                                </div>
                            </div>
                        </div>
                        <div className={`${"container_img_2"} ${checkedType === 1 ? '' : 'hidden'}`}>
                            <div className="container_img ">
                                <div className="img">
                                    <Image src={caibut} alt="Bước 1" />
                                </div>
                                <div className={`${"img img_right img_xam"} ${(1 < count && count <= 3) ? 'img_xanh' : ''}`}>
                                    <Image src={(1 < count && count <= 3) ? doc_xanh : doc} alt="Bước 2" />
                                </div>
                                <div className={`${"img img_right img_xam"} ${(count=== 3) ? 'img_xanh' : ''}`}>
                                    <Image src={count === 3 ? nguoi_xanh : hinhnguoi} alt="Bước 3" />
                                </div>
                            </div>
                        </div>
                        <div className={`${"container_img_3"} ${checkedType === 2 ? '' : 'hidden'}`}>
                            <div className="container_img ">
                                <div className="img">
                                    <Image src={caibut} alt="Bước 1" />
                                </div>
                                <div className={`${"img img_right img_xam"} ${(1 < count && count <= 4) ? 'img_xanh' : ''}`}>
                                    <Image src={(1 < count && count <= 4) ? sao_xanh : ngoisao} alt="Bước 2" />
                                </div>
                                <div className={`${"img img_right img_xam"} ${(2 < count && count <= 4) ? 'img_xanh' : ''}`}>
                                    <Image src={(2 < count && count <= 4) ? doc_xanh : doc} alt="Bước 2" />
                                </div>
                                <div className={`${"img img_right img_xam"} ${( count === 4) ? 'img_xanh' : ''}`}>
                                    <Image src={count === 4 ? nguoi_xanh : hinhnguoi} alt="Bước 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {count === 1 ?
                        (<>
                            <div className="header_d width_100">
                                <h4 className='font-bold'>Thêm mới kế hoạch đánh giá</h4>
                            </div>
                            <div className="body width_100">
                                {/*form thêm mới tiêu chí con (block người và ngày) */}
                                <form className="form form_tieuchi form_them_tieuchi form_them_tieuchi_con" >
                                    <div className="container">
                                        <div className="form_container">
                                            <div className="form_group width_50 set_marginbottom5px">
                                                <label>Tên kế hoạch đánh giá<span className="color_red">*</span></label>
                                                <input type="text" className="ten" name="ten" placeholder="Nhập tên Kế hoạch đánh giá" onChange={getTenTieuChi} value={tieuChi} />
                                            </div>
                                            <div className={`${"form_group group_tc_con set_marginbottom5px"} `}>
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

                                        </div>
                                        <div className="form_container ">
                                            <div className="form_group group_trang_thai ">
                                                <label > Chọn loại kế hoạch đánh giá <span className="color_red">*</span></label>
                                                <span className={`${"select2 select2-container select2-container--default"} ${"w-full"}`} >
                                                    <div className={`${"select_no_muti rounded-sm"} ${'relative w-full text-sm border border-slate-300 mr-4'}`}>
                                                        <div className='flex cursor-pointer overflow-ellipsis' onClick={handleOnstatement}>

                                                            <p className='pr-1 py-2 pl-2 w-full ' >{titleStatement}</p>
                                                            <span className="absolute right-0 pr-1 pt-4" role="presentation"><Image src={icon_so} alt=""></Image>
                                                            </span>
                                                        </div>

                                                        <div>
                                                            <ul className={onstatement ? 'hidden' : `${"js_select_2 w-full absolute z-50 bg-white overflow-y-scroll h-32 rounded-b-md border border-x-slate-400 border-b-slate-400 displaynone_scroll"} `}>
                                                                <li className='m-1 ml-2'><input type="search" className='px-2 border border-slate-600 w-40 outline-none py-3 rounded-none' onChange={handleInputStatement} /></li>

                                                                {
                                                                    filteredStatement.map((item: any, index: number) => (
                                                                        <li key={index} className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' onClick={() => { setTitleStatement(item); setOnstatement(!onstatement); setStateOn(false); setCheckedType(index) }}>{item}</li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </span>
                                            </div>
                                            <div className="form_group width_50">
                                                <label className="">
                                                    <span>Chọn hình thức kế hoạch lặp lại</span>

                                                </label>
                                                <div className=' w-full'>
                                                    <span className={`${"select2 select2-container select2-container--default"} ${"w-full"}`} dir="ltr" data-select2-id="select2-data-1-v4qz" >
                                                        <div className='d_flex'>
                                                            <div className={`${"select_no_muti chon_lap width_100 rounded-sm"} ${'relative text-sm border border-slate-300 '}`}>
                                                                <div className='flex cursor-pointer' onClick={handleOnStation}>

                                                                    <p className='pr-1 py-2 pl-2 w-36' >{titleState}</p>
                                                                    <span className="absolute right-0 pr-1 pt-4" role="presentation"><Image src={icon_so} alt=""></Image>
                                                                    </span>
                                                                </div>

                                                                <div>
                                                                    <ul className={onstation ? 'hidden' : `${"js_select_2 w-full absolute z-50 bg-white overflow-y-scroll h-32 rounded-b-md border border-x-slate-400 border-b-slate-400 displaynone_scroll"} `}>
                                                                        <li className='m-1 ml-2'><input type="search" className='px-2 border border-slate-600 w-40 outline-none py-3 rounded-none' onChange={handleInputChange} /></li>
                                                                        {
                                                                            filteredData.map((item, index) => {
                                                                                return (<li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' key={index} onClick={() => { setTitleSate(item); setOnstation(!onstation) }}>{item}</li>)
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className={`${"select_no_muti thu rounded-sm"} ${'relative set_45percent text-sm border border-slate-300 ml-5'} ${titleState === 'Lặp lại hàng tuần' ? '' : 'hidden'}`}>
                                                                <div className='flex cursor-pointer' onClick={handleOnStation1}>

                                                                    <p className='pr-1 py-2 pl-2 w-36' >{titleState1}</p>
                                                                    <span className="absolute right-0 pr-1 pt-4" role="presentation"><Image src={icon_so} alt=""></Image>
                                                                    </span>
                                                                </div>

                                                                <div>
                                                                    <ul className={onstation1 ? 'hidden' : `${"js_select_2 w-full absolute z-50 bg-white overflow-y-scroll h-32 rounded-b-md border border-x-slate-400 border-b-slate-400 displaynone_scroll"} `}>
                                                                        <li className='m-1 ml-2'><input type="search" className='px-2 border border-slate-600 w-40 outline-none py-3 rounded-none' onChange={handleInputChange1} /></li>
                                                                        {
                                                                            filteredData1.map((item, index) => {
                                                                                return (<li className='hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1' key={index} onClick={() => { setTitleSate1(item); setOnstation1(!onstation1) }}>{item}</li>)
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form_container form_container_4">
                                            <div className='form_group'>
                                                <div className="bot-15">
                                                    <p className="chuden font-medium size-15 ">Từ ngày:</p>

                                                    <input id="datebd-input" type="date" value={dateStart} onChange={handleDateChange} />

                                                    <p className="errol_time chudo top-5 hidden size-12 font-medium chunghieng">
                                                        Thời gian bắt đầu phải nhỏ hơn kết thúc</p>
                                                </div>
                                            </div>
                                            <div className='form_group'>
                                                <div className="bot-15">
                                                    <p className="chuden font-medium size-15 ">Đến ngày:</p>

                                                    <input id="datekt-input" type="date" value={dateEnd} onChange={handleDateChange2} />

                                                </div>
                                            </div>
                                            <div className="form_group manh_time ">
                                                <label >Giờ bắt đầu đánh giá<span className="color_red">*</span></label>
                                                <input type="time" name="gio_batdau" className="gio_bd set_height36px" onChange={handleStartHour} value={startHour}/>
                                            </div>

                                            <div className="form_group manh_time ">
                                                <label >Giờ kết thúc đánh giá<span className="color_red">*</span></label>
                                                <input type="time" name="gio_ketthuc" className="gio_kt set_height36px" onChange={handleEndHour} value={endHour}/>
                                            </div>
                                        </div>
                                        <div className="form_container form_container_4">


                                        </div>
                                        <div className="form_group group_ghi_chu">
                                            <label >Ghi chú</label>
                                            <Input_ckeditor input_name='editor' 
                                             handleChange={handleCKEchange} />
                                             
                                        </div>
                                    </div>


                                </form>
                                {/*<!--end form thêm mới tiêu chí 1 -->*/}
                            </div>
                        </>) : (<>
                        {
                            (count === 2 )  ? (
                                <>
                                    { 
                                        (checkedType === 0) ?
                                            <DanhGiaNangLuc /> : (
                                                <>
                                                {
                                                    (checkedType === 1) ? <KiemTraNangLuc /> : (
                                                        <DanhGiaNangLuc />
                                                    )
                                                }
                                                </>
                                            )
                                        
                                    }
                                </>
                                
                            ) : ( 
                                <>
                                {
                                    (count === 3) ? (
                                        <> 
                                        {
                                            (checkedType === 0 || checkedType === 1) ?
                                            <NguoiDanhGia /> : <KiemTraNangLuc />
                                        }
                                        </>
                                    ): <NguoiDanhGia />
                                    
                                }
                                </>
                                
                            )
                        }
                            
                        </>)
                    }
                    <div className="form_btn sm:flex content_c mt_25 w-full">
                        <div className='left-14 top-5'>
                            <Link href='/Quan-Li-Tieu-Chi-Danh-Gia' className="btn btn_trang btn_168 outline_none right-5">Hủy</Link>
                        </div>
                        
                        <div className='flex top-5'>
                            <button type="button" className={`${"ajax_them_tc btn btn_xanh btn_168 outline_none right-5 "} ${count > 1 ? '' : 'hidden'}`} onClick={handlePrev}>
                                <div className='d_flex items-center'>
                                    <div className="img height_15">
                                        <Image src={prev} alt="back" />
                                    </div>
                                    <p className='ml_10'>Quay lại</p>

                                </div>
                            </button>
                            <button type="button" className="ajax_them_tc btn btn_xanh btn_168 outline_none right-5" onClick={handleNext}>
                                <div className='d_flex items-center'>
                                    <p className='mr_10'>Tiếp tục</p>
                                    <div className="img height_15">
                                        <Image src={next} alt="Tiếp tục" />
                                    </div>
                                </div>
                            </button>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
    );
};
export function Input_ckeditor({ value, handleChange, input_name }: any) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState('');

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

export default DeDanhGia;