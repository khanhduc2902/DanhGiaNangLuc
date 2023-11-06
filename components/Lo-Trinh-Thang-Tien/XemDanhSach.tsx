// export default XemDanhsach;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import x from "@/public/assets/img/x.png";
import logo from "@/public/assets/img/ep_logo.png";

interface MyComponent {
  lengthArray: number;
  checkPop: () => void;
  popUp: boolean;
}

const XemDanhsach: React.FC<MyComponent & { id_chucvu: number,chucVuFunc1: any }> = ({
  lengthArray,
  checkPop,
  popUp,
  id_chucvu,
  chucVuFunc1
   // Accept id_chucvu as a prop
}) => {
  
  const [ds, setDs] = useState<any>([]); // Use Member[] for type safety

  // console.log(chucVuFunc1);
  // console.log("CHECK OBJ");
  // console.log(Object.values(chucVuFunc1));

  const renderTableRows = () => {
   

    return Object.values(chucVuFunc1)?.map((user: any, index: any) => {
      if (typeof user == "object") {
        return (
          <div className="flex m_hang" key={index}>
          <div className="khoi_stt  flex center-center">
            <p className="size-14">{index + 1}</p>
          </div>
          <div className="flex khoi_nv center-height left-20">
            <Image src={logo} className="wh26_ra left_am10 left-10" alt="" />
            <a className="chuden left-10 size-14">{user.userName}</a>
          </div>
          <div className="khoi_phongban center-height flex left-10">
            <p className="elipsis1 size-14 chuden">
              {localStorage.getItem("selectedDepName")}
            </p>
          </div>
          <div className="khoi_chucvu center-center flex left-20">
            <p className="size-14 chuden">
              {user.chucvu?.[0]?.ten_chucvu || "N/A"}
            </p>
          </div>
        </div>
        );
      } 
      else {
          return null;
      }
    });
  };
  return (
    <div>
      <div className={`${"show_thanhvien"} ${popUp ? "" : "block"}`}>
        <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
          <div className="">
            <p className="size-18 font-bold text_js">Thành viên</p>
          </div>
          <div className="flex center-height c-pointer x_close">
            <Image src={x} alt="Huong dan" onClick={checkPop} />
          </div>
        </div>
        <div className="nentrang scroll_y_500  br-b-10 ">
          <div className="scrollx_pop bangchung_2">
            {chucVuFunc1 ? renderTableRows() : <p>No data</p>}
          </div>
        </div>
      </div>

    </div>
  );
};

export default XemDanhsach;
