import React, { use, useEffect } from "react";
import { useState } from "react";
import Header from "../../Du-Lieu-Xoa-Gan-Day/Navbar";
import Image from "next/image";
import Link from "next/link";
import data from "@/components/arrayXoaPhieu";
import back from "@/public/assets/img/back.png";
import bacham from "@/public/assets/img/3cham.png";
import xemds from "@/public/assets/img/xemds.png";
import xoamn from "@/public/assets/img/xoamn.png";
import them from "@/public/assets/img/them.png";
import left from "@/public/assets/img/left.png";
import right from "@/public/assets/img/right.png";
import themchucvu from "@/public/assets/img/themchucvu.png";
import x from "@/public/assets/img/x.png";
import logo from "@/public/assets/img/ep_logo.png";
import chinhsua from "@/public/assets/img/chinhsua.png";
import ThemChucVu from "@/components/ThemChucVu";
import XemDanhsach from "@/components/Lo-Trinh-Thang-Tien/XemDanhSach";
import ChinhSua from "@/components/Lo-Trinh-Thang-Tien/ChinhSua";
import ThemYeuCau from "@/components/Lo-Trinh-Thang-Tien/ThemYeuCau";
import Xoa from "@/components/Lo-Trinh-Thang-Tien/Xoa";
import YeuCau from "@/components/Lo-Trinh-Thang-Tien/YeuCau";
import axios from "axios";
import { config } from "process";
import { token, baseURL } from "@/components/utils/constant";

const Page = () => {
  //   const [onOfKh, setOnOffKh] = useState(true);
  const [chucVuData, setChucVuData] = useState([]);
  const [chucVuData1, setChucVuData1] = useState([]);

  const [yccvData, setYccvData] = useState([]);
console.log('yccvdata', yccvData);
  /*On off xem danh sach tat ca nhan vien*/
  const [vice, setVice] = useState(true);
  const handleVice = () => {
    setVice(!vice);
  };
  /* chinh sua */
  const [repair, setRepair] = useState(true);
  const handleRepair = () => {
    setRepair(!repair);
  };
  /*them yeu cau  con viec */
  const [add, setAdd] = useState(true);
  const handleAdd = () => {
    setAdd(!add);
  };
  /* cac chuc nang*/
  const [func1, setFunc1] = useState(null);
  const [func2, setFunc2] = useState(null);
  const [chucVuFunc1, setChucVuFunc1] = useState<any>(null);

  const handleFunc1 = (id_chucvu: any) => {
    setFunc1(func1 === id_chucvu ? null : id_chucvu);
  };
  const handleFunc2 = (id: any) => {
    setFunc2(func2 === id ? null : id);
  };
  console.log(func1);
  console.log(func2);

  /* xxoa */
  const [xoa, setXoa] = useState(true);
  const handleXoa = () => {
    setXoa(!xoa);
  };

  /*Mo them moi */
  const [popOpen, setPopOpen] = useState(true);
  const handlePopOpen = () => {
    setPopOpen(!popOpen);
  };

  // user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const idPhongBan = localStorage.getItem("selectedDepId");

        const response = await axios.post(
          // "http://localhost:3012/api/DGNL/LoTrinhThangTien/getListThanhVienchitiet",
          `${baseURL}${"/api/DGNL/LoTrinhThangTien/getListThanhVienchitiet"}`,

          {
            dep_id: idPhongBan,
            position_id: func1,
          },
          config
        );

        setChucVuFunc1(response.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };
    if (func1) {
      fetchData();
    } else {
      setChucVuFunc1(null);
    }
  }, [func1]);

  // render bảng
  const fetchData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const idPhongBan = localStorage.getItem("selectedDepId");
      const response = await axios.post(
        // "http://localhost:3012/api/DGNL/LoTrinhThangTien/getListChucVuChiTiet",
        `${baseURL}${"/api/DGNL/LoTrinhThangTien/getListChucVuChiTiet"}`,
        {
          id_phongban: idPhongBan,
        },
        config
      );

      setChucVuData(response.data.data);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // xóa chức vụ
  const handleDeleteChucVu = async () => {
    try {
      if (func2 !== null) {
        const confirmDelete = window.confirm(
          "Bạn có chắc chắn muốn xóa không?"
        );
        if (confirmDelete) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          // Gửi yêu cầu xóa chức vụ bằng API
          const response = await axios.post(
            // "http://localhost:3012/api/DGNL/LoTrinhThangTien/deleteChucVu",
            `${baseURL}${"/api/DGNL/LoTrinhThangTien/deleteChucVu"}`,

            { id: func2 },
            config
          );

          // Sau khi xóa, gọi hàm fetchChucVuData để cập nhật danh sách chức vụ
          fetchData();
        }
        // Sau khi xóa, đặt lại giá trị deleteChucVuId về null để không thực hiện xóa lần nữa
        // setDeleteChucVuId(null);
      }
    } catch (error) {
      console.error("Lỗi khi xóa chức vụ:", error);
    }
  };

  const handleDeleteYccv = async () => {
    try {
      if (func2 !== null) {
        const confirmDelete = window.confirm(
          "Bạn có chắc chắn muốn xóa không?"
        );
        if (confirmDelete) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          // Gửi yêu cầu xóa chức vụ bằng API
          const response = await axios.post(
            // "http://localhost:3012/api/DGNL/LoTrinhThangTien/deleteYccv",
            `${baseURL}${"/api/DGNL/LoTrinhThangTien/deleteYccv"}`,

            
            { id: func2 },
            config
          );

          // Sau khi xóa, gọi hàm fetchChucVuData để cập nhật danh sách chức vụ
          fetchData();
        }

        // Sau khi xóa, đặt lại giá trị deleteChucVuId về null để không thực hiện xóa lần nữa
        // setDeleteChucVuId(null);
      }
    } catch (error) {
      console.error("Lỗi khi xóa chức vụ:", error);
    }
  };
console.log("tesst yccv:", chucVuData)
  return (
    <>
      <div className="main">
        <Header urlBack="/Lo-Trinh-Thang-Tien" />
        <div className="main_body">
          <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
            <Link href="/Lo-Trinh-Thang-Tien">
              <div className="flex center-height right-10 c-pointer">
                <Image src={back} alt="Quay lai" />
              </div>
            </Link>
            <p>Lộ trình thăng tiến / Chi tiết</p>
          </div>
          <div className="m_lotrinh_chitiet po_r">
            <div className="thanh_dk">
              <div className="turn turn_left" id="turn_left">
                <Image src={left} alt="sang trái" />
              </div>
              <div className=" turn turn_right" id="turn_right">
                <Image src={right} alt="sang phải" />
              </div>
            </div>
            <div className="flex nenxanh-chutrang space br-t-10   tieude_phongban2 ">
              <div className=" flex center-height">
                <p className="size-16 font-bold">
                  {localStorage.getItem("selectedDepName")}
                </p>
              </div>
              <div
                className="flex center-height c-pointer js_themchucvu"
                onClick={handlePopOpen}
              >
                <Image
                  src={themchucvu}
                  className="flex center-height"
                  alt="them chuc vu"
                />
                <p className="size-14">Thêm chức vụ</p>
              </div>
            </div>
            <div className="nentrang over_scroll_x">
              <div className="scrollx_lotrinhchitiet">
                <div className=" m_chitiet_phongban  flex">
                  {Object.values(chucVuData).map((chucVu: any, index) => {
                    if (typeof chucVu === "object") {
                      console.log("CHECK LOG CV");
                      console.log(chucVu);
                      return (
                        <div key={index} className="chitiet_phongban nenxam">
                          <div className="flex space nenxam chichi">
                            <div>
                              <p
                                className="chuden size-15 font-medium bot-5 "
                                onClick={handleFunc2}
                              >
                                {chucVu.ten_chucvu}
                              </p>
                              <div className="flex">
                                <p className="chuden size-14">
                                  Yêu cầu:{" "}
                                  {chucVu.yccvData ? chucVu.yccvData.length : 0}
                                </p>
                                <p className="left-10 chuden size-14">
                                  Thành viên:{" "}
                                  {chucVu.usersData
                                    ? chucVu.usersData.length
                                    : 0}
                                </p>
                              </div>
                            </div>

                            <div className="c-pointer js_menu_curd">
                              <Image
                                src={bacham}
                                className=""
                                alt="them chuc vu"
                                onClick={() => {
                                  handleFunc1(chucVu.id_chucvu); // Gọi handleFunc1 sau khi đã set localStorage
                                  handleFunc2(chucVu.id);
                                  // console.log("check id:", handleFunc2(chucVu.id))
                                }}
                              />
                              <div
                                className={`${"show_menu_curd nentrang set_width200px"} ${
                                  func1 === chucVu.id_chucvu ? "block" : ""
                                }`}
                              >
                                <div
                                  className="nd_con_menu_curd flex center-height"
                                  onClick={handleRepair}
                                >
                                  <Image
                                    src={chinhsua}
                                    className="flex center-height right-10"
                                    alt="chinh sua"
                                  />
                                  <p className="chuden size-14">
                                    Chỉnh sửa chức vụ
                                  </p>
                                </div>

                                <div
                                  className="nd_con_menu_curd flex center-height br-t-10 js_thanhvien c-pointer"
                                  onClick={handleVice}
                                >
                                  <Image
                                    src={xemds}
                                    className="flex center-height right-10"
                                    alt="xem danh sach"
                                  />
                                  <p className="chuden size-14">
                                    Xem danh sách thành viên
                                  </p>
                                </div>

                                <div
                                  data-id-chucvu="5"
                                  data-id-pb="713"
                                  className="nd_con_menu_curd flex center-height add_yccv"
                                  onClick={handleAdd}
                                >
                                  <Image
                                    src={them}
                                    className="flex center-height right-10"
                                    alt="chinh sua"
                                  />
                                  <p className="chuden size-14">
                                    Thêm yêu cầu công việc
                                  </p>
                                </div>
                                <div
                                  id-cv="235"
                                  className="nd_con_menu_curd flex center-height br-b-10 js_xoachucvu"
                                  // onClick={handleXoa}
                                  // onClick={handleXoa}
                                  onClick={handleDeleteChucVu}
                                >
                                  <Image
                                    src={xoamn}
                                    className="flex center-height right-10"
                                    alt="chinh sua"
                                  />
                                  <p className="chuden size-14">Xóa chức vụ</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {chucVu?.yccvData?.map((yc: any, index: number) => {
                            return (
                              <YeuCau
                                key={index}
                                title={yc?.ten_yeucau}
                                desc={yc?.mota_yeucau}
                                id={yc?.id}
                              />
                            );
                          })}
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChinhSua popUp={handleRepair} openCheck={repair} />
      <ThemChucVu popUp={handlePopOpen} openCheck={popOpen} func1={func1} />
      <XemDanhsach
        lengthArray={chucVuFunc1 ? chucVuFunc1?.length : 0}
        checkPop={handleVice}
        popUp={vice}
        id_chucvu={chucVuFunc1?.id_chucvu}
        chucVuFunc1={chucVuFunc1}
      />
      <ThemYeuCau popUp={handleAdd} openCheck={add} func1={func1} />
      <Xoa popUp={handleXoa} openCheck={xoa} name="chức vụ" />
    </>
  );
};

export default Page;
