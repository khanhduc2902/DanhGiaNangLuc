import React from 'react';
import x from '@/public/assets/img/x.png'
import Image from 'next/image';
import { token, baseURL } from "@/components/utils/constant";
import axios from "axios";

interface MyComponent {
    popUp: () => void,
    openCheck: boolean,
    name: string
}

const Xoa = ({ popUp, openCheck, name , id, title}: any) => {
    const handleXoa = async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
    
          const response = await axios.post(
            `${baseURL}/api/DGNL/LoTrinhThangTien/deleteYccv`,
            {
              id: id,
             
            },
            config
          );
    
        //   setChinhsua(response.data.data);
    
          // Đặt cờ `openCheck` về `false` để đóng popup sau khi lưu thành công
        //   popUp();
          // Hiển thị thông báo
          window.alert("Xóa thành công.");
    
          // Tải lại trang
          window.location.reload();
        } catch (error) {
          console.error("Lỗi khi gọi API:", error);
        }
      };
    console.log("xoa id title", id, title)
    return (
        <div>
            <div id="popup_before_cv" className={`${"popup set_nonepaddingtop"} ${openCheck ? '' : 'set_fleximport'}`}>
                <div className={`${"pop"}`}>
                    <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
                        <div className="changesize18">
                            <h4 className="size-18 font-bold h4_change">Xoá {name}</h4>
                        </div>
                        <div className="flex center-height c-pointer x_close" onClick={popUp}>
                            <Image src={x} alt="Huong dan" />
                        </div>
                    </div>
                    <div className="nentrang br-b-10">
                        <div className="boder_pop_before">
                            <div className="text-center size-15 text_before_change bot-5">Bạn có chắc chắn muốn xoá {title} này không?</div>

                            <div className="khoibutton_form top-70">
                                <div className="btn close btn-nentrang-chuxanh br-5 vienxanh font-medium size-15 c-pointer btnhuy_before" onClick={popUp}>
                                    Hủy
                                </div>
                                <div className="btn close btn-nenxanh-chutrang br-5 vienxanh font-medium size-15 c-pointer btnxoa_chucvu" id-cv="255" onClick={handleXoa} >
                                    Đồng ý
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Xoa;