import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import thietlap from '@/public/assets/img/thietlap.png'
import Header from '@/components/Header';
import x from '@/public/assets/img/x.png'
import plus from '@/public/assets/img/icon_plus.png'
const arrayLoai= [
    'Chọn loại','Yếu','Trung bình','Khá','Giỏi','Xuất sắc'
]
const CaiDat = () => {
    /* open thiet lap */
    const [thietlap1, setThietlap1] = useState(true)
    const handleThietlap1 = () => {
        setThietlap1(!thietlap1)
    }
    /* open thiet lap 2 */
    const [thietlap2, setThietlap2] = useState(true)
    const handleThietlap2 = () => {
        setThietlap2(!thietlap2)
    }
    /* setting them moi xoa*/ 
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
        
    }
    /* chon loai */
    const [onstatement, setOnstatement] = useState(true)
    const handleOnstatement = () => {
        setOnstatement(!onstatement)
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
    
    console.log(stateOn)
    console.log(titleStatement)
    return (
        <>
            <div className="main">
                <Header />
                <div className="main_body">
                    <div className="m_thangdiem">
                        <p className="chuden size-14 tieude1024 bot-15">Cài đặt / Thang điểm</p>
                        <div className="flex">
                            <div className="khoi2">
                                <div className="thangdiem shadow10 bot-20">
                                    <div className="nenxanh-chutrang ">
                                        <div className="padding15 flex space">
                                            <p className="size-16 font-bold">Thang điểm</p>
                                            <div className="flex c-pointer" onClick={handleThietlap1}>
                                                <div className="right-5">
                                                    <Image src={thietlap} alt="Thiết lập thang điểm" />
                                                </div>
                                                <p className="size-14">Thiết lập</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="nentrang">
                                        <div className="padding15 flex space">
                                            <p className="size-16 font-medium chuden">Thang điểm:<span className="left-10 text_thangdiem"><label className="td_trc_cd lay_gtr_nay">10</label>
                                            </span></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="thangdiem shadow10">
                                    <div className="nenxanh-chutrang ">
                                        <div className="padding15 flex space">
                                            <p className="size-16 font-bold">Phân loại đánh giá</p>
                                            <div className="flex c-pointer nut_thiet_lap_pl " onClick={handleThietlap2}>
                                                <div className="right-5">
                                                    <Image src={thietlap} alt="phân loại đánh giá" />
                                                </div>
                                                <p className="size-14">Thiết lập</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=" show_ajax">
                                        <div className="td_trc_cd ">

                                            <div className="padding15 khoicon nentrang">
                                                <div className=" flex">
                                                    <p className="cacmuc">Khá:</p>
                                                    <p className="cacketqua">1 -&gt; 5 </p>
                                                </div>
                                            </div>
                                            <div className="padding15 khoicon nentrang">
                                                <div className=" flex">
                                                    <p className="cacmuc">Xuất sắc:</p>
                                                    <p className="cacketqua">6 -&gt; 10 </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="show_thietlapid " className={`${"popup set_nonepaddingtop"} ${thietlap1 ? '' : 'set_fleximport'}`}>
                <div className="show_thietlap pop">
                    <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
                        <div className="changesize18">
                            <h4 className="size-18 font-bold">Thiết lập thang điểm cho hệ thống</h4>
                        </div>
                        <div className="flex center-height c-pointer x_close" onClick={handleThietlap1}>
                            <Image src={x} alt="Hướng dẫn" />
                        </div>
                    </div>
                    <div className="nentrang br-b-10" data-select2-id="select2-data-12-4wtd">
                        <form id="form_thangdiem" method="post" >
                            <div className="padding-20" >
                                <div className="bot-15 " >
                                    <p className="chuden font-medium size-15 bot-5">Thang điểm<span className="chudo">*</span></p>
                                    <div className="select_no_muti " id="nhap_sodiem" >
                                        <select className="js_select_2 select2-hidden-accessible" name="nhap_sodiem" id="select_nhap_sodiem" tabIndex={-1} >
                                            <option value="10" >10</option>
                                            <option value="100" >100</option>
                                            <option value="0" >Khác</option>
                                        </select>
                                        <span className="select2 select2-container select2-container--default select2-container--below select2-container--focus set_width100per">
                                            <span className="selection">
                                                <span className="select2-selection select2-selection--single" tabIndex={0}  >
                                                    <span className="select2-selection__rendered" id="select2-select_nhap_sodiem-container" >10</span>
                                                    <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                                </span>
                                            </span>
                                            <span className="dropdown-wrapper" aria-hidden="true"></span>
                                        </span>
                                    </div>
                                </div>

                                <div className="bot-15 opacity-5 " id="nhap_thangdiem">
                                    <p className="chuden font-medium size-15 bot-5">Thiết lập thang điểm</p>
                                    <div id="thangdiem_hethong" className=" border_input text ">

                                        <input type="text" name="nhap_thangdiem" placeholder="Nhập thang điểm" className="size-14 chuden i_thangdiem " />
                                    </div>
                                </div>
                                <div className="khoibutton_form top-25 bot-20">
                                    <button className="btn close btn-nentrang-chuxanh br-5 vienxanh font-medium size-15 c-pointer ">
                                        Hủy
                                    </button>
                                    <button type="submit" name="tl_thangdiem" className="btn  btn-nenxanh-chutrang br-5 vienxanh font-medium size-15  c-pointer btnluu_thangdiem">
                                        Đồng ý
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="show_phanloaidanhgiaid" className={`${"popup set_nonepaddingtop"} ${thietlap2 ? '':'set_fleximport'}`}>
                <div className="popto">
                    <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
                        <div className="changesize18">
                            <h4 className="size-18 font-bold">Phân loại đánh giá</h4>
                        </div>
                        <div className="flex center-height c-pointer x_close" onClick={handleThietlap2}>
                            <Image src={x} alt="Đóng" />
                        </div>
                    </div>
                    <div className="nentrang br-b-10">
                        <form action="" method="post" id="frm_phanloai_danhgia" >
                            <div className="padding-20">
                                <div className="mkhoiphanloai">
                                    <div className="khoiphanloai">
                                        <div className="khoiphanloaicon">
                                            {
                                                myArray.map((item: any, index: number) =>(
                                                    <div className="khoiphanloaiconcon flex  space bot-15 " key={index}>
                                                        <div className="div145">
                                                            <p className="chuden font-medium size-15 bot-5">Từ <span className="chudo">*</span>
                                                            </p>
                                                            <div className="border_input text">
                                                                <input value="6" type="text" name="pldg_diemtu" placeholder="Nhập số điểm" className="size-14 chuden arr_tt_sp tu" />
                                                            </div>
                                                        </div>
                                                        <div className="div145">
                                                            <p className="chuden font-medium size-15 bot-5">Đến <span className="chudo">*</span>
                                                            </p>
                                                            <div className="border_input text">
                                                                <input value="10" type="text" name="pldg_diemden" placeholder="Nhập số điểm" className="size-14 chuden arr_tt_sp den mc_den1" />
                                                            </div>
                                                        </div>
                                                        <div className="div145">
                                                            <p className="chuden font-medium size-15 bot-5">Loại <span className="chudo">*</span></p>
                                                            <div className="select_no_muti relative">
                                                                
                                                                <span className="select2 select2-container select2-container--default set_width100per" onClick={()=>cutcut(index)} >
                                                                    <span className="selection">
                                                                        <span className="select2-selection select2-selection--single" tabIndex={0}>
                                                                            <span className="select2-selection__rendered" id="select2--container"  title="Xuất sắc">{titleStatement[index]}</span>
                                                                            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <ul  className={`${"js_select_2 arr_tt_sp loai absolute bg-slate-100  block w-full overflow-y-scroll displaynone_scroll z-50"} ${stateOn[index] ? 'hidden':''}`} tabIndex={-1}>
                                                                    
                                                                    {
                                                                        filteredStatement.map((item : any, index : number) =>(
                                                                            <li key={index}  className='cursor-pointer hover:bg-blue-400 hover:text-white p-1 text-sm py-2'
                                                                            onClick={()=>{
                                                                                titleOnClick(indexCheck,item)
                                                                                
                                                                            }}
                                                                            value={index}>{item}</li>
                                                                        ))
                                                                    }
                                                                </ul>            
                                                            </div>
                                                        </div>
                                                        <div className="div145 xoaphanloai c-pointer" onClick={()=>removeItem(index)}>
                                                            Xóa
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            
                                        </div>
                                    </div>
                                    <div data-num="1" className="themmoiphanloai nenxanh-chutrang flex  center-center c-pointer">
                                        <div className="flex" onClick={addItem}>
                                            <div className="right-10 top-5">
                                                <Image src={plus} alt="Thêm loại" />
                                            </div>
                                            
                                            <p>Thêm loại</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="khoibutton_form top-25 bot-5">
                                    <button type='button' className="btn close btn-nentrang-chuxanh br-5 vienxanh font-medium size-15 c-pointer " onClick={handleThietlap2}>
                                        Hủy
                                    </button>
                                    <button type='button' onClick={handleThietlap2} name="tl_phanloai" className="btn btn-nenxanh-chutrang br-5 vienxanh font-medium size-15 c-pointer btnluu_phanloai">
                                        Đồng ý
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>

    );
};

export default CaiDat;