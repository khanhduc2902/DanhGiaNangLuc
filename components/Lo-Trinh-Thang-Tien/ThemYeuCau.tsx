import React, { useState } from "react";
import Image from "next/image";
import x from "@/public/assets/img/x.png";
import Select from "react-select";
import axios from "axios";
import { token, baseURL } from '@/components/utils/constant';

const arrayTest1 = [
  {
    value: "Chọn vị trí đặt yêu cầu công việc",
    label: "Chọn vị trí đặt yêu cầu công việc",
  },
  { value: "1", label: "Trên đầu" },
  { value: "2", label: "Dưới cùng" },
];
interface MyComponent {
  popUp: () => void;
  openCheck: boolean;
}

const defaultSelectedPosition = arrayTest1[0];
const ThemYeuCau: React.FC<MyComponent & { func1: any }> = ({
  openCheck,
  popUp,
  func1,
}) => {
//   console.log(func1);
 
  const [inputName, setInputName] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(
    defaultSelectedPosition
  );
  const [description, setDescription] = useState("");

  const handleChange = (e: any) => {
    setInputName(e.target.value);
  };

  const handlePositionChange = (selectedOption: any) => {
    setSelectedPosition(selectedOption);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSave = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const idchucvu = localStorage.getItem("selectedDepId");
      const requestData = {
        id_chucvu: func1,
        ten_yeucau: inputName,
        vitri_yeucau: selectedPosition.value, // Sử dụng giá trị vitri_yeucau
        id_pb: idchucvu,
        mota_yeucau: description,
      };

      const response = await axios.post(
        // "http://localhost:3012/api/DGNL/LoTrinhThangTien/themYccv",
        `${baseURL}${'/api/DGNL/LoTrinhThangTien/themYccv'}`,

        requestData,
        config
      );

      console.log("Kết quả sau khi thêm:", response.data);
      popUp();
      window.location.reload();
    } catch (error) {
      console.error("Lỗi khi thêm yêu cầu công việc:", error);
    }
  };

  return (
    <div>
      <div
        id="popup_show_suachucvu"
        className={`${"popup set_nonepaddingtop"} ${
          openCheck ? "" : "set_fleximport"
        }`}
      >
        <div className=" pop">
          <div className=" ">
            <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
              <div className="">
                <h4 className="size-18 font-bold h4_chucvu">
                  Thêm yêu cầu công việc
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
                    <div className="form_group_block form_group ">
                      <input
                        placeholder="a"
                        type="text"
                        className="nguoi_tao set_bg_white"
                        onChange={handleChange}
                        value={inputName}
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
                        value={selectedPosition}
                      />
                    </div>
                  </div>
                  <div className="bot-15">
                    <p className="chuden font-medium size-15 bot-5">
                      Mô tả yêu cầu công việc<span className="chudo">*</span>
                    </p>
                    <div className="border_input textarea">
                      <textarea
                        placeholder="a"
                        name="mota_congviec"
                        className="mota_congviec"
                        onChange={handleDescriptionChange}
                        value={description}
                      ></textarea>
                    </div>
                  </div>
                  <div className="khoibutton_form top-25">
                    <div
                      className={`${"btn close btn-nentrang-chuxanh br-5 vienxanh font-medium size-15 c-pointer btnhuy"}`}
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

export default ThemYeuCau;
