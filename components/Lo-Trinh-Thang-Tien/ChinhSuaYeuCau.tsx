

import React, { useEffect, useState } from "react";
import Image from "next/image";
import x from "@/public/assets/img/x.png";
import Select from "react-select";
import { token, baseURL } from "@/components/utils/constant";
import axios from "axios";

interface ChinhSuaYeuCauProps {
  popUp: () => void;
  openCheck: boolean;
  id: number;
  title: string;
  desc: string;
}
const arrayTest1 = [
  {
    value: "Chọn vị trí đặt yêu cầu công việc",
    label: "Chọn vị trí đặt yêu cầu công việc",
  },
  { value: "Dưới cùng", label: "Dưới cùng" },
];

const ChinhSuaYeuCau: React.FC<ChinhSuaYeuCauProps> = ({
  popUp,
  openCheck,
  id,
  title,
  desc,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDesc, setEditedDesc] = useState(desc);
  const handleChangetitle = (e: any) => {
    setEditedTitle(e.target.value);
    // setEditedDesc(e.target.value);
  };
  const handleChangedesc = (e: any) => {
    // setEditedTitle(e.target.value);
    setEditedDesc(e.target.value);
  };

  const [chinhsua, setChinhsua] = useState<any>([]);
  
  const handleSave = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(
        `${baseURL}/api/DGNL/LoTrinhThangTien/editYccv`,
        {
          id: id,
          mota_yeucau: editedDesc,
          vitri_yeucau: 1,
          ten_yeucau: editedTitle,
        },
        config
      );

      setChinhsua(response.data.data);

      // Đặt cờ `openCheck` về `false` để đóng popup sau khi lưu thành công
      popUp();
      // Hiển thị thông báo
      window.alert("Chỉnh sửa thành công.");

      // Tải lại trang
      window.location.reload();
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

//   console.log("chinhsua", chinhsua);
  return (
    <div>
      <div
        id="popup_show_suachucvu"
        className={`popup ${openCheck ? "" : "set_fleximport"}`}
      >
        <div className="pop">
          <div className="">
            <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
              <div className="">
                <h4 className="size-18 font-bold h4_chucvu">
                  Chỉnh sửa yêu cầu công việc
                </h4>
              </div>
              <div
                className="flex center-height c-pointer x_close"
                onClick={popUp}
              >
                <Image src={x} alt="Huong dan" />
              </div>
            </div>
            <form action="" method="post" id="show_suachucvu">
              <div className="nentrang br-b-10">
                <div className="padding-20">
                  <div className="bot-15">
                    <p className="chuden font-medium size-15 bot-5">
                      Tên yêu cầu công việc<span className="chudo">*</span>
                    </p>
                    <div className="form_group_block form_group">
                      <input
                        type="text"
                        value={editedTitle}
                        className="nguoi_tao set_bg_white"
                        onChange={handleChangetitle}
                        placeholder="a"
                      />
                    </div>
                  </div>
                  <div className="bot-15">
                    <p className="chuden font-medium size-15 bot-5">
                      Vị trí đặt yêu cầu công việc
                      <span className="chudo">*</span>
                    </p>
                    <div className="select_no_muti">
                      <Select
                        options={arrayTest1}
                        placeholder="Chọn vị trí đặt chức vụ"
                      />
                    </div>
                  </div>
                  <div className="bot-15">
                    <p className="chuden font-medium size-15 bot-5">
                      Mô tả yêu cầu công việc<span className="chudo">*</span>
                    </p>
                    <div className="border_input textarea">
                      <textarea
                        name="mota_congviec"
                        className="mota_congviec"
                        value={editedDesc}
                        onChange={handleChangedesc}
                        placeholder="a"
                      ></textarea>
                    </div>
                  </div>
                  <div className="khoibutton_form top-25">
                    <div
                      className={`btn close btn-nentrang-chuxanh br-5 vienxanh font-medium size-15 c-pointer btnhuy`}
                      onClick={popUp}
                    >
                      Hủy
                    </div>
                    <button
                      type="button"
                      className="btn btn-nenxanh-chutrang br-5 vienxanh font-medium size-15 c-pointer btnluu_datchucvu"
                      onClick={handleSave}
                    >
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChinhSuaYeuCau;
