import React, { useState } from "react";
import Image from "next/image";
import chamx from "@/public/assets/img/3chamx.png";
import xoamn from "@/public/assets/img/xoamn.png";
import chinhsua from "@/public/assets/img/chinhsua.png";
import { useAmp } from "next/amp";
import ChinhSuaYeuCau from "./ChinhSuaYeuCau";
import Xoa from "./Xoa";

const YeuCau = ({
  id,
  title,
  desc,
}: {
  id: number;
  title: string;
  desc: string;
}) => {
  /* mo popop up */
console.log("id", id)
  const [popUp, setPopUp] = useState(true);
  const handlePopUp = () => {
    setPopUp(!popUp);
  };
  /* CHinh sua */
  const [repair, setRepair] = useState(true);
  const handleRepair = () => {
    setRepair(!repair);
  };
  /* Xoa */
  const [xoa, setXoa] = useState(true);
  const handleXoa = () => {
    setXoa(!xoa);
  };
 

  return (
    <>
      <div className="nentrang chichi tung_yc">
        <div>
          <p className="chuden size-15 font-medium bot-5">
            {title}
          </p>
          <p className="chuden size-14 lineheight16">{desc}</p>
        </div>

        <div className="flex just-end c-pointer js_menu_curd2">
          <div onClick={handlePopUp}>
            <Image src={chamx} className="" alt="them chuc vu" />
          </div>
          <div
            className={`${"show_menu_curd2 nentrang set_top_10px set_width200px"} ${
              popUp ? "" : "block"
            }`}
          >
            <div
              className="nd_con_menu_curd br-t-10 flex center-height sua_yccv mt-1"
              onClick={handleRepair}
            >
              <Image
                src={chinhsua}
                className="flex center-height right-10"
                alt="chinh sua"
              />
              <p className="chuden size-14">Chỉnh sửa yêu cầu công việc</p>
            </div>
            <div
              className="nd_con_menu_curd flex center-height br-b-10 js_xoa_yc"
              onClick={handleXoa}
            >
              <Image
                src={xoamn}
                className="flex center-height right-10"
                alt="chinh sua"
              />
              <p className="chuden size-14">Xóa yêu cầu công việc</p>
            </div>
          </div>
        </div>
      </div>
      <ChinhSuaYeuCau popUp={handleRepair} openCheck={repair} id={id} title={title} desc={desc}/>
      <Xoa popUp={handleXoa} openCheck={xoa} name="yêu cầu công việc" id={id} title={title}/>
    </>
  );
};

export default YeuCau;
