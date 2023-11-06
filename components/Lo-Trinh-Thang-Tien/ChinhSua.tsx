import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import x from '@/public/assets/img/x.png'
import Select from 'react-select'


const arrayTest1 = [
    {value:'Chọn vị trí đặt chức vụ',label:'Chọn vị trí đặt chức vụ'},
    {value:'Trước Sinh viên thực tập',label:'Trước Sinh viên thực tập'},
    {value:'Trước Trưởng nhóm',label:'Trước Trưởng nhóm'},
    {value:'Phó tổ trưởng',label:'Phó tổ trưởng'},
]
interface MyComponent{
   popUp:() => void,
   openCheck: boolean
}
const ChinhSua : React.FC<MyComponent> =({popUp,openCheck})=> {
    
    return (
        <div>
            <div id="popup_show_suachucvu" className={`${"popup set_nonepaddingtop"} ${openCheck ? '':'set_fleximport'}`}>
                <div className=" pop">
                    <div className=" ">
                        <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
                            <div className="">
                                <h4 className="size-18 font-bold h4_chucvu">Thêm chức vụ</h4>
                            </div>
                            <div className="flex center-height c-pointer x_close" onClick={popUp}>
                                <Image src={x} alt="Huong dan" />
                            </div>
                        </div>
                        <form action="" method="post" id="show_suachucvu" >
                            <div className="nentrang br-b-10">
                                <div className="padding-20">
                                    <div className="bot-15">
                                        <p className="chuden font-medium size-15 bot-5">Chức vụ<span className="chudo">*</span></p>
                                        <div className="form_group_block form_group">
                                            <input placeholder='a' type="text"  className="nguoi_tao" name="nguoi_tao" value="Phó tổ trưởng" />
                                        </div>
                                </div>
                                <div className="bot-15">
                                    <p className="chuden font-medium size-15 bot-5">Vị trí đặt chức vụ<span className="chudo">*</span></p>
                                    <div className="select_no_muti">
                                        <Select options={arrayTest1} placeholder='Chọn vị trí đặt chức vụ'/>
                                    </div>
                                </div>
                                <div className="khoibutton_form top-25">
                                    <div className={`${"btn close btn-nentrang-chuxanh br-5 vienxanh font-medium size-15 c-pointer btnhuy"}`} onClick={popUp}>
                                        Hủy
                                    </div>
                                    <button type="button" className="btn btn-nenxanh-chutrang br-5 vienxanh font-medium size-15 c-pointer btnluu_datchucvu" onClick={popUp}>
                                        Lưu
                                    </button>
                                </div>
                            </div>
                    </div>
                </form>
            </div>
        </div>
            </div >
        </div >
    );
};

export default ChinhSua;