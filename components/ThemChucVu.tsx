import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import x from "@/public/assets/img/x.png";
import Select from "react-select";
import axios from "axios";
import { token, baseURL } from '@/components/utils/constant';

const arrayTest = [
  { value: "0", label: "Tất cả chức vụ" },
  { value: "1", label: "Phó ban dự án" },
  { value: "2", label: "Nhân viên Part time" },
  { value: "3", label: "Phó tổ trưởng" },
  { value: "4", label: "Trưởng ban dự án" },
  { value: "5", label: "Phó Tổng Giám đốc thường trực" },
  { value: "6", label: "Phó Tổng Giám đốc" },
  { value: "7", label: "Thành viên Hội đồng quản trị" },
  { value: "8", label: "Tổng Giám đốc" },
  { value: "9", label: "Chủ tịch tập đoàn" },
  { value: "10", label: "Phó Chủ tịch tập đoàn" },
  { value: "11", label: "Tổng Giám Đốc Tập Đoàn" },
  { value: "12", label: "Nhóm Phó" },
  { value: "13", label: "Phó Tổng Giám Đốc Tập Đoàn" },
];
const arrayTest1 = [
  { value: "0", label: "Chọn vị trí đặt chức vụ" },
  { value: "1", label: "Trước Sinh viên thực tập" },
  { value: "2", label: "Trước Trưởng nhóm" },
  { value: "3", label: "Phó tổ trưởng" },
];
interface MyComponent {
  popUp: () => void;
  openCheck: boolean;
}
const defaultSelectedPosition = arrayTest[0];
const defaultSelectedPosition2 = arrayTest1[0];
// const ThemChucVu : React.FC<MyComponent> =({popUp,openCheck, func1}: any)=> {
const ThemChucVu: React.FC<MyComponent & { func1: any }> = ({
  openCheck,
  popUp,
  func1,
}) => {
    console.log(func1)

  const [selectedPosition, setSelectedPosition] = useState(
    defaultSelectedPosition
  );
  const [selectedPosition2, setSelectedPosition2] = useState(
    defaultSelectedPosition2
  );
  const handlePositionChange = (selectedOption: any) => {
    setSelectedPosition(selectedOption);
  };
  const handlePositionChange2 = (selectedOption: any) => {
    setSelectedPosition2(selectedOption);
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
        id_chucvu: selectedPosition.value,
        ten_chucvu: selectedPosition.label,
        vitri_chucvu: selectedPosition2.value, // Sử dụng giá trị vitri_yeucau
        id_phongban: idchucvu,
      };

      const response = await axios.post(
        // "http://localhost:3012/api/DGNL/LoTrinhThangTien/themchucvu",
        `${baseURL}${'/api/DGNL/LoTrinhThangTien/themchucvu'}`,

        
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
                <h4 className="size-18 font-bold h4_chucvu">Thêm chức vụ</h4>
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
                      Chức vụ<span className="chudo">*</span>
                    </p>
                    <div className="select_no_muti ">
                      <Select
                        options={arrayTest}
                        onChange={handlePositionChange}
                        value={selectedPosition}
                      />
                    </div>
                  </div>
                  <div className="bot-15">
                    <p className="chuden font-medium size-15 bot-5">
                      Vị trí đặt chức vụ<span className="chudo">*</span>
                    </p>
                    <div className="select_no_muti">
                      <Select
                        options={arrayTest1}
                        onChange={handlePositionChange2}
                        value={selectedPosition2}
                      />
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

export default ThemChucVu;
