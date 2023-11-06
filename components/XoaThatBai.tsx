import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import popoup from '@/public/assets/img/done.png'

interface MyComponent {
    title : string
    checked: boolean
}
const XoaThanhCon : React.FC<MyComponent> =({title,checked}) => {
    const [openPop,setOpenPop] =useState(checked)
    useEffect(()=>{
        setOpenPop(checked)
    },[checked])
    return (
        <div className={`${'popup popup_500 popup_thanhcong '} ${checked ? '' : 'block'}`}>
             <div className='container'>
                
                    <div className='popup_body'>
                        <div className='img'>
                            <Image src={popoup}  alt='V'/>
                        </div>
                        <p className="text_a_c ">Xóa kế hoạch đánh giá <span className="font_wB show_xoa_ten">{title}</span> thành công!</p>
                        <div className="popup_btn">
                            <div className="btn btn_xanh close_popup close_popup_back">
                            Đóng
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default XoaThanhCon;