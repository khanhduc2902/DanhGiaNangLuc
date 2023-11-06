"use client";
import React from "react";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/img/ep_logo.png";
import chamhoi from "@/public/assets/img/chamhoi.png";
import data from "@/components/arrayXoaPhieu";
import imageP from "@/public/assets/js/PhieuDanhGia";
import x from "@/public/assets/img/x.png";
import axios from "axios";
import { token, baseURL } from "@/components/utils/constant";

const Page = () => {
  const [onOfKh, setOnOffKh] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [departmentData, setDepartmentData] = useState([]);
  const [getListThanhVien, setgetListThanhVien] = useState<any>([]);
  const [selectedDepId, setSelectedDepId] = useState(null);
  const [selectedDepName, setSelectedDepName] = useState("");
  const [searchDepId, setSearchDepId] = useState(null);

  const handleOnOfKH = () => {
    setOnOffKh(!onOfKh);
  };

  const [titleName, setTitleName] = useState("");
  const [onInternTable, setOnInternTable] = useState(true);

  const hanldeInternTable = (dep_id: any) => {
    setOnInternTable(!onInternTable);
    setSelectedDepId(dep_id);
  };

  //  tìm kiếm Phong ban
  const [searchResults, setSearchResults] = useState<any>([]);
  const [roomState, setRoomState] = useState("Tìm kiếm phòng ban");
  const [room, setRoom] = useState(true);
  const [searchRoom, setSearchRoom] = useState("");
  const [filteredRoom, setFilteredRoom] = useState(
    Object.values(searchResults)
  );

  const handleSearchRoom = (query: string) => {
    setSearchRoom(query);
    const filteredResults = Object.values(searchResults).filter(
      (item: any) =>
        item &&
        item.dep_name &&
        item.dep_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRoom(filteredResults);
  };

  // all phòng ban
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          // "http://localhost:3012/api/DGNL/LoTrinhThangTien/SearchResult",
          `${baseURL}${"/api/DGNL/LoTrinhThangTien/SearchResult"}`,

          null,
          config
        );
        setSearchResults(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
        setIsLoading(false);
      }
    };
    fetchSearchResults();
  }, []);

  // render
  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        let response;
        if (searchDepId !== null) {
          response = await axios.post(
            // "http://localhost:3012/api/DGNL/LoTrinhThangTien/renderPhongBan",
            `${baseURL}${"/api/DGNL/LoTrinhThangTien/renderPhongBan"}`,

            { dep_id: searchDepId },
            config
          );
        } else {
          response = await axios.post(
            `${baseURL}${"/api/DGNL/LoTrinhThangTien/renderPhongBan"}`,
            null,
            config
          );
        }
        setDepartmentData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
        setIsLoading(false);
      }
    };

    fetchDepartmentData();
  }, [searchDepId]);

  // List user
  useEffect(() => {
    const fetchgetListThanhVien = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          // "http://localhost:3012/api/DGNL/LoTrinhThangTien/getListThanhVien",
          `${baseURL}${"/api/DGNL/LoTrinhThangTien/getListThanhVien"}`,

          null,
          config
        );
        setgetListThanhVien(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
        setIsLoading(false);
      }
    };
    fetchgetListThanhVien();
  }, []);

  return (
    <>
      <div className="main">
        <Header />
        <div className="main_body">
          <div className="tieuchidanhgia box-qlinhanvien">
            <p className="chuden size-14 tieude1024 bot-15">{titleName}</p>
            <div className="search-qlnv">
              <div className="khoi_left">
                <div className="leftsearch select_no_muti ql_tieuchi_m">
                  <span className="select2 select2-container select2-container--default select2-container--below select2-container--open width_check100">
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        tabIndex={0}
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2--container"
                          title="Tìm kiếm theo tên kế hoạch đánh giá"
                          onClick={handleOnOfKH}
                        >
                          {roomState}
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>
                    <span
                      className={
                        onOfKh
                          ? "hidden"
                          : `${"dropdown-wrapper"} ${"relative z-20 flex justify-center "}`
                      }
                    >
                      <ul
                        id=""
                        className={`${"absolute w-full bg-slate-100  py-2 mb-2 overflow-y-scroll h-52 snap-y border-b border-x border-slate-400 rounded-b-lg"} ${"displaynone_scroll"}`}
                      >
                        <li className="mx-2 mb-1">
                          <input
                            type="search"
                            className="outline-none py-1 border-solid border rounded-none border-slate-400"
                            onChange={(e) => handleSearchRoom(e.target.value)}
                            placeholder="search"
                            value={searchRoom}
                          />
                        </li>
                        <li
                          className="cursor-pointer hover:bg-blue-400 hover:text-white p-1 text-sm py-2"
                          onClick={() => {
                            setOnOffKh(!onOfKh);
                          }}
                        >
                          Tìm kiếm theo phòng ban
                        </li>
                        <div>
                          {isLoading ? (
                            <p>Đang tải...</p>
                          ) : (
                            <ul>
                              {searchRoom !== ""
                                ? Object.values(filteredRoom).map(
                                    (item: any, index: number) => {
                                      return (
                                        <li
                                          key={index}
                                          className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                          value="2672"
                                          onClick={() => {
                                            setOnOffKh(!onOfKh);
                                            setSearchDepId(item.dep_id);
                                            setRoomState(item.dep_name);
                                            setRoom(!room);
                                          }}
                                        >
                                          {item.dep_name}
                                        </li>
                                      );
                                    }
                                  )
                                : Object.values(searchResults).map(
                                    (item: any, index: number) => {
                                      return (
                                        <li
                                          key={index}
                                          className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                          value="2672"
                                          onClick={() => {
                                            setOnOffKh(!onOfKh);
                                            setSearchDepId(item.dep_id);
                                            setRoomState(item.dep_name);
                                            setRoom(!room);
                                          }}
                                        >
                                          {item.dep_name}
                                        </li>
                                      );
                                    }
                                  )}
                            </ul>
                          )}
                        </div>
                      </ul>
                    </span>
                  </span>
                  <Image
                    src={imageP.kinhlup}
                    className="kinhlup right-position-15"
                    alt="timkiem"
                  />
                </div>
              </div>
              <div className="rightsearch flex center-height">
                <div className="flex rightsearch_con2">
                  <button className="hidden button btn-nentrang-chuxanh un-m-r center-height br-10 size-16 c-pointer tongso_xoavv">
                    <p className=" chuxanh font-medium">Xóa vĩnh viễn</p>
                  </button>
                  <button className="hidden button nenxanh-chutrang un-m-r center-height br-10 size-16 c-pointer tongso_khoiphuc">
                    <p className=" chutrang font-medium ">Khôi phục</p>
                  </button>
                  <Link href="/huong_dan.html">
                    <div className="huongdan flex center-height ">
                      <Image src={chamhoi} className="wh36" alt="" />
                      <p className="left-10 font-medium size-15">Hướng dẫn</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {isLoading ? (
            <p>Đang tải...</p>
          ) : (
            <div className="flex wrap">
              {Object.values(departmentData).map(
                (department: any, index: any) => {
                  if (typeof department == "object") {
                    return (
                      <div
                        key={index}
                        className="show_phong_4221 m_lotrinh nentrang bot-20 right-20 all_dep"
                      >
                        <div className="lotrinh_con">
                          <Link
                            onClick={() => {
                              setSelectedDepName(department.dep_name);
                              localStorage.setItem(
                                "selectedDepName",
                                department.dep_name
                              );
                              localStorage.setItem(
                                "selectedDepId",
                                department.dep_id
                              );
                            }}
                            href="/Lo-Trinh-Thang-Tien/Chi-Tiet"
                            className="chuden size-16 font-medium c-pointer"
                          >
                            {department.dep_name}
                          </Link>

                          <p className="chuden font-medium size-15 bot-20 top-20">
                            Chức vụ:{" "}
                            <span className="chuden size-14 left-10">
                              {department.tong_chucvu}
                            </span>
                          </p>
                          <div
                            data-pb={department.dep_id}
                            className="flex center-height js_thanhvien c-pointer"
                            onClick={() => hanldeInternTable(department.dep_id)}
                          >
                            <p className="chuden size-14 right-10">
                              Thành viên:
                            </p>
                            <div className="flex center-height left-5">
                              {department.users ? (
                                department.users
                                  .slice(0, 4)
                                  .map(() => (
                                    <Image
                                      src={logo}
                                      className="wh26_ra left_am10"
                                      alt=""
                                    />
                                  ))
                              ) : (
                                <p>Không có thành viên.</p>
                              )}
                              <div className="bonus flex center-center left_am chutrang size-14">
                                {department.users
                                  ? department.users.length > 4
                                    ? department.users.length - 4
                                    : 0
                                  : ""}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </div>
          )}
        </div>
      </div>
      <div className={`${"show_thanhvien"} ${onInternTable ? "" : "block"}`}>
        <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
          <div className="">
            <p className="size-18 font-bold text_js">Thành viên</p>
          </div>
          <div className="flex center-height c-pointer x_close">
            <Image src={x} alt="Huong dan" onClick={hanldeInternTable} />
          </div>
        </div>
        <div className="nentrang scroll_y_500  br-b-10 ">
          <div className="scrollx_pop bangchung_2">
            {getListThanhVien.data &&
              Object.values(getListThanhVien.data)
                .filter(
                  (result: any) =>
                    result.inForPerson?.employee.dep_id === selectedDepId
                )
                .map((result: any, index) => {
                  return (
                    <div className="flex m_hang" key={index}>
                      <div className="khoi_stt  flex center-center">
                        <p className="size-14">{index + 1}</p>
                      </div>
                      <div className="flex khoi_nv center-height left-20">
                        <Image
                          src={logo}
                          className="wh26_ra left_am10 left-10"
                          alt=""
                        />

                        <a className="chuden left-10 size-14">
                          {result.userName}
                        </a>
                      </div>
                      <div className="khoi_phongban center-height flex left-10">
                        <p className="elipsis1 size-14 chuden">
                          {/* {result.inForPerson.employee.dep_id} */}
                          {result.qlc[0]?.dep_name || " "}
                        </p>
                      </div>
                      <div className="khoi_chucvu center-center flex left-20">
                        <p className="elipsis1 size-14 chuden">
                          {result.chucvu[0]?.ten_chucvu || " "}
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
