"use client";
import React from "react";
import { useState, ChangeEvent, useEffect } from "react";
import imageFile from "@/public/assets/js/TrangchuPage";
import imageP from "@/public/assets/js/PhieuDanhGia";
import Image from "next/image";
import Header from "@/components/Header";
import {token, baseURL} from "@/components/utils/constant"

interface MyObject {
  // Định nghĩa các thuộc tính của object của bạn
  start: string;
  end: string;
  // ...
}
import axios from "axios";


const pointArray = [
  "Sắp xếp theo số điểm",
  "Không sắp xếp số điểm",
  "Số điểm giảm dần",
  "Số điểm tăng dần",
];

const arrayNumber = ["2", "5", "10", "20", "50", "100"];

const KetQuaNhanVien = () => {

  const [danhGia, setDanhGia] = useState(true);
  const [sapXepDiem, setSapXepDiem] = useState(true);
  const [onOfKh, setOnOffKh] = useState(true);
  const handleRoom = () => {
    setRoom(!room);
    setDanhGia(true);
    setSapXepDiem(true);
    setOnOffKh(true);
  };
  const handleDanhGia = () => {
    setDanhGia(!danhGia);
    setRoom(true);
    setSapXepDiem(true);
    setOnOffKh(true);
  };
  const handleSapXep = () => {
    setSapXepDiem(!sapXepDiem);
    setDanhGia(true);
    setRoom(true);
    setOnOffKh(true);
  };
  const handleOnOfKH = () => {
    setOnOffKh(!onOfKh);
    setDanhGia(true);
    setRoom(true);
    setSapXepDiem(true);
  };

  const [hienThi, setHienThi] = useState("10");
  const [onOfHT, setOnOfHT] = useState(true);

  const [pagination, setPagination] = useState(89);
  /* display popup */

  /* Tim Kiem theo nhan vien*/
  const [staff, setStaff] = useState("Tìm kiếm nhân viên");
//   const [searchStaff, setSearchStaff] = useState("");
//   const [filteredDataStaff, setFilteredDataStaff] = useState(searchName);
//   const handleSearchStaff = (query: string) => {
//     const filteredResults = searchName.filter((item) =>
//       item.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredDataStaff(filteredResults);
//   };
//   const handleInputChangeStaff = (event: any) => {
//     setSearchStaff(event.target.value);
//     // handleSearchStaff(event.target.value);
//   };
  /* Tim Kiem theo phong ban*/

  /* Tim Kiem theo ke hoach danh gia*/
  const [keHoach, setKeHoach] = useState("Tất cả kế hoạch đánh giá");
//   const [searchQueryKH, setSearchQueryKH] = useState("");
//   const [filteredDataKH, setFilteredDataKH] = useState(khArray);
//   const handleSearchKH = (query: string) => {
//     const filteredResults = khArray.filter((item) =>
//       item.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredDataKH(filteredResults);
//   };
//   const handleInputChangeKH = (event: any) => {
//     setSearchQueryKH(event.target.value);
//     handleSearchKH(event.target.value);
//   };
  /* Khong sap xeo so diem*/
  const [point, setPoint] = useState("Sắp xếp theo số điểm");
  const [searchPoint, setSearchPoint] = useState("");
  const [filteredPoint, setFilteredPoint] = useState(pointArray);
  const handleSearchPoint = (query: string) => {
    const filteredResults = pointArray.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPoint(filteredResults);
  };
  const handleInputChangePoint = (event: any) => {
    setSearchPoint(event.target.value);
    handleSearchPoint(event.target.value);
  };

  const handleScrollLeft = () => {
    const scrollableContent = document.getElementById("scrollableContent");
    if (scrollableContent) {
      // Move the scroll bar 50 pixels to the left (adjust as needed)
      scrollableContent.scrollLeft -= 10;
      console.log("checkkkkk");
    }
  };

  /* next and prev button */




  //   Phong ban
  const [allPB, setAllPB] = useState<any>([]);
  const [roomState, setRoomState] = useState("Tìm kiếm phòng ban");
  const [room, setRoom] = useState(true);
  const [searchRoom, setSearchRoom] = useState("");
  const [filteredRoom, setFilteredRoom] = useState(Object.values(allPB));

  const handleSearchRoom = (query: string) => {
    setSearchRoom(query);
    const filteredResults = Object.values(allPB).filter(
      (item: any) =>
        item &&
        item.dep_name &&
        item.dep_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRoom(filteredResults);
  };

//   all KHDG
  const [allKHDG, setAllKHDG] = useState<any>([]);
  const [khdgState, setKhdgState] = useState("Tìm kiếm kế hoạch");
  const [khdg, setKhdg] = useState(true);
  const [searchKhdg, setSearchKhdg] = useState("");
  const [filteredKhdg, setFilteredKhdg] = useState(Object.values(allKHDG));

  const handleSearchKhdg = (query: string) => {
    setSearchKhdg(query);
    const filteredResults = Object.values(allKHDG).filter(
      (item: any) =>
        item &&
        item.kh_ten &&
        item.kh_ten.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredKhdg(filteredResults);
  };

//   all user
  const [allUser, setAllUser] = useState<any>([]);
  const [userState, setUserState] = useState("Tìm kiếm Nhân viên");
  const [user, setUser] = useState(true);
  const [searchUser, setSearchUser] = useState("");
  const [filteredUser, setFilteredUser] = useState(Object.values(allUser));

  const handleSearchUser = (query: string) => {
    setSearchUser(query);
    const filteredResults = Object.values(allUser).filter(
      (item: any) =>
        item &&
        item.userName &&
        item.userName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUser(filteredResults);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const responsePB = await axios.post(
          // "http://localhost:3012/api/DGNL/KetQuaDanhGia/allPhongBan",
          `${baseURL}${'/api/DGNL/KetQuaDanhGia/allPhongBan'}`,

          null,
          config
        );
        setAllPB(responsePB.data.data);

        const responseKHDG = await axios.post(
          // "http://localhost:3012/api/DGNL/KetQuaDanhGia/allKhdg",
          `${baseURL}${'/api/DGNL/KetQuaDanhGia/allKhdg'}`,

          null,
          config
        );
        setAllKHDG(responseKHDG.data.data);

        const responseUser = await axios.post(
          // "http://localhost:3012/api/DGNL/KetQuaDanhGia/allusers",
          `${baseURL}${'/api/DGNL/KetQuaDanhGia/allusers'}`,

          null,
          config
        );
        setAllUser(responseUser.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
      }
    };
    fetchData();
  }, []);

  const [render, setRender] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          // "http://localhost:3012/api/DGNL/KetQuaDanhGia/KetQuaDanhGiaCuaToi",
          `${baseURL}${'/api/DGNL/KetQuaDanhGia/KetQuaDanhGiaCuaToi'}`,

          null,
          config
        );
       
        setRender(response.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
      }
    };
    fetchData();
  }, []);
// console.log("render: ", render)

  return (
    <div>
      <div className="main">
        <Header />
        <div className="main_body">
          <div className="phieudanhgia box-qlinhanvien">
            <p className="chuden size-14 tieude1024 bot-15">
              Quản lý kết quả đánh giá
            </p>

            <div className="flex space">
              <div className="flex wrap space">
                <div
                  className={`${"select_no_muti danhmucdanhgia"} ${"w-52 relative text-sm border border-slate-300 mb-3 mr-4"}`}
                >
                  <div className="flex cursor-pointer" onClick={handleRoom}>
                    <p className="pl-3 py-2 w-48 truncate ">{roomState}</p>
                    <span className="pt-4 mr-3" role="presentation">
                      <Image src={imageFile.icon_so} alt=""></Image>
                    </span>
                  </div>
                  <div>
                    <ul
                      className={
                        room
                          ? "hidden"
                          : `${"js_select_2 absolute z-50 bg-white overflow-y-scroll h-60 rounded-b-md border border-x-slate-400 border-b-slate-400"} ${"displaynone_scroll"}`
                      }
                    >
                      <li className="m-1 ml-2">
                        <input
                        placeholder={roomState}
                          title="Tất cả phòng ban"
                          type="search"
                          className="py-1 px-3 border border-slate-400 outline-none"
                          onChange={(e) => handleSearchRoom(e.target.value)}
                          value={searchRoom}
                        />
                      </li>
                      {searchRoom !== ""
                        ? // Render danh sách dựa trên input nếu có nội dung trong searchRoom
                          Object.values(filteredRoom).map(
                            (item: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                  value="2672"
                                  onClick={() => {
                                    setRoomState(item.dep_name);
                                    setRoom(!room);
                                  }}
                                >
                                  {item.dep_name}
                                </li>
                              );
                            }
                          )
                        : // Hoặc render danh sách ban đầu nếu không có nội dung trong searchRoom
                          Object.values(allPB).map(
                            (item: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                  value="2672"
                                  onClick={() => {
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
                  </div>
                </div>
                <div
                  className={`${"select_no_muti danhmucdanhgia"} ${"w-64 relative text-sm border border-slate-300 mb-3 mr-4"}`}
                >
                  <div className="flex cursor-pointer" onClick={handleDanhGia}>
                    <p className="pl-3 py-2 w-56 truncate">Tất cả kế hoạch đánh giá</p>
                    <span className="ml-1 pt-4" role="presentation">
                      <Image src={imageFile.icon_so} alt=""></Image>
                    </span>
                  </div>
                  <ul
                    className={
                      danhGia
                        ? "hidden"
                        : `${"js_select_2 absolute z-50 bg-white overflow-y-scroll h-60 rounded-b-md border border-x-slate-400 border-b-slate-400 "} ${"displaynone_scroll"} `
                    }
                  >
                    <li className="m-1 ml-2">
                      <input
                        title="a"
                        placeholder={khdgState}
                        type="search"
                        className="py-1 px-3 w-full border border-slate-400 outline-none"
                        onChange={(e) => handleSearchKhdg(e.target.value)}
                        
                      
                      />
                    </li>
                
                        {searchKhdg !== ""
                        ? // Render danh sách dựa trên input nếu có nội dung trong searchRoom
                          Object.values(filteredKhdg).map(
                            (item: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                  value="2672"
                                  onClick={() => {
                                    setKhdgState(item.kh_ten);
                                    setKhdg(!khdg);
                                  }}
                                >
                                  {item.kh_ten}
                                </li>
                              );
                            }
                          )
                        : // Hoặc render danh sách ban đầu nếu không có nội dung trong searchRoom
                          Object.values(allKHDG).map(
                            (item: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                  value="2672"
                                  onClick={() => {
                                    setKhdgState(item.kh_ten);
                                    setKhdg(!khdg);
                                  }}
                                >
                                  {item.kh_ten}
                                </li>
                              );
                            }
                          )}
                   
                  </ul>
                </div>
                <div
                  className={`${"select_no_muti danhmucdanhgia"} ${"w-52 relative text-sm border border-slate-300"} `}
                >
                  <div className="flex cursor-pointer" onClick={handleSapXep}>
                    <p className="pl-3 py-2 w-48 truncate">{point}</p>
                    <span className="mr-3 pt-4" role="presentation">
                      <Image src={imageFile.icon_so} alt=""></Image>
                    </span>
                  </div>
                  <ul
                    className={
                      sapXepDiem
                        ? "hidden"
                        : `${"js_select_2 absolute z-50 bg-white overflow-y-scroll h-40.5 rounded-b-md border border-x-slate-400 border-b-slate-400 "} ${"displaynone_scroll"}`
                    }
                  >
                    <li className="m-1 ml-2">
                      <input
                        title="a"
                        type="search"
                        className="py-1 px-3 border border-slate-400 outline-none"
                        onChange={handleInputChangePoint}
                        value={searchPoint}
                      />
                    </li>

                    {filteredPoint.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="hover:bg-blue-400  hover:text-white  cursor-pointer py-1.5 px-1"
                          value="1220"
                          onClick={() => {
                            setPoint(item);
                            setSapXepDiem(!sapXepDiem);
                          }}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="tieude375 top-15">
                  <a href="/huong_dan.html#phieu" target="_blank" className="">
                    <div className="huongdan flex center-height ">
                      <Image src={imageP.chamhoi} className="wh36" alt="" />
                      <p className="left-10 font-medium size-15">Hướng dẫn</p>
                    </div>
                  </a>
                </div>
              </div>

              <a
                href="/huong_dan.html#phieu"
                target="_blank"
                className="none375"
              >
                <div className="huongdan flex center-height ">
                  <Image src={imageP.chamhoi} className="wh36" alt="" />
                  <p className="left-10 font-medium size-15">Hướng dẫn</p>
                </div>
              </a>
            </div>

            <div className="search-qlnv">
              <div className="khoi_left">
                <div className="leftsearch select_no_muti ql_tieuchi_m">
                  <span
                    className="select2 select2-container select2-container--default select2-container--below select2-container--open width_check100"
                    dir="ltr"
                    data-select2-id="select2-data-4-plru"
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="true"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2--container"
                        aria-controls="select2--results"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2--container"
                          role="textbox"
                          aria-readonly="true"
                          title="Tìm kiếm theo tên kế hoạch đánh giá"
                          onClick={handleOnOfKH}
                        >
                          {staff}
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
                            title="Search input"
                            placeholder={userState}
                            type="search"
                            className="outline-none py-1 border-solid border rounded-none border-slate-400"
                            onChange={(e) => handleSearchUser(e.target.value)}
                            // value={searchStaff}
                          />
                        </li>
                        {searchUser !== ""
                        ? // Render danh sách dựa trên input nếu có nội dung trong searchRoom
                          Object.values(filteredUser).map(
                            (item: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                  value="2672"
                                  onClick={() => {
                                    setUserState(item.userName);
                                    setUser(!user);
                                  }}
                                >
                                  {item.userName}
                                </li>
                              );
                            }
                          )
                        : // Hoặc render danh sách ban đầu nếu không có nội dung trong searchRoom
                          Object.values(allUser).map(
                            (item: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                  value="2672"
                                  onClick={() => {
                                    setUserState(item.userName);
                                    setUser(!user);
                                  }}
                                >
                                  {item.userName}
                                </li>
                              );
                            }
                          )}

                        {/* {Object.values(allUser).map(
                          (item: any, index: number) => {
                            return (
                              <li
                                key={index}
                                className="cursor-pointer hover:bg-blue-400 hover:text-white p-1 text-sm py-2"
                                // onClick={() => {
                                //   setStaff(item.userName);
                                //   setOnOffKh(!onOfKh);
                                // }}
                              >
                                {item.userName}
                              </li>
                            );
                          }
                        )} */}
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
            </div>
            <div className="khoibang po_r">
              <div className="thanh_dk">
                <div
                  className={`${"turn turn_left"} `}
                  id="scrollLeftButton"
                  onClick={handleScrollLeft}
                >
                  <Image src={imageP.left} alt="sang trái" />
                </div>
                <div className=" turn turn_right" id="turn_right">
                  <Image src={imageP.right} alt="sang phải" />
                </div>
              </div>
              <div className={`${"bangchung"} `} id="scrollableContent">
                <table className={`${"bangchinh chuden"} ${""}`}>
                  <tbody>
                    <tr>
                      <th className="">
                        <p className="phantucon">STT</p>
                      </th>
                      <th>
                        <p className="phantucon">Mã NV</p>
                      </th>
                      <th>
                        <p className="phantucon">Họ tên</p>
                      </th>
                      <th>
                        <p className="phantucon">Phòng ban</p>
                      </th>

                      <th>
                        <p className="phantucon">Chức vụ</p>
                      </th>
                      <th>
                        <p className="phantucon">Kế hoạch đánh giá</p>
                      </th>
                      <th>
                        <p className="phantucon">Phiếu đánh giá</p>
                      </th>
                      <th>
                        <p className="phantucon">Điểm trung bình</p>
                      </th>
                      <th>
                        <p className="phantucon">Xếp loại</p>
                      </th>
                    </tr>
                  </tbody>
              
                  <tbody className="show_apend">
                    {Object.values(render).map((item: any, index: any) => {
                      if (typeof item == "object") {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.ma_nv}</td>
                            <td>{item.name}</td>          
                            <td>{item.ten_pb}</td>
                            <td>{item.ten_chucvu}</td>
                            <td>{item.ke_hoach_danhgia}</td>
                            <td>{item.phieu_danhgia}</td>
                            <td>{item.tong_diem}</td>
                            <td>Gioi</td>
                          </tr>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-[500px]:flex-col center-height space top-20">
          <div className=" max-[500px]:flex-col">
            <div className="flex center-height relative justify-center">
              <p className="right-10"> Hiển thị:</p>
              <div className="select_no_muti select_no_muti_chon">
                <span
                  className="select2 select2-container select2-container--default width_check100"
                  dir="ltr"
                  data-select2-id="select2-data-6-50ah"
                >
                  <span
                    className="selection"
                    onClick={() => setOnOfHT(!onOfHT)}
                  >
                    <span
                      className={`${"select2-selection select2-selection--single"} ${"pl-4"}`}
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-chon_ban_ghi-container"
                      aria-controls="select2-chon_ban_ghi-container"
                    >
                      {hienThi}
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                </span>
                <ul
                  className={
                    onOfHT
                      ? "hidden"
                      : "absolute flex-col bg-white  border border-slate-400 px-1.5"
                  }
                >
                  <li className="cursor-pointer">
                    <input
                      title="a"
                      placeholder="a"
                      type="search"
                      className="w-16 outline-none border border-slate-400 my-1 px-1"
                    />
                  </li>
                  {arrayNumber.map((item, index) => {
                    return (
                      <li
                        onClick={(e) => {
                          setHienThi(item);
                          setOnOfHT(!onOfHT);
                        }}
                        key={index}
                        className="cursor-pointer"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <p className="chuden size-14">
              Tổng số: <span className="dem_so_pt">{pagination}</span>{" "}
              <span className="font-medium"> Phiếu đánh giá</span>
            </p>
          </div>

          <div className="pagination_vippro">
            <li className="active">
              <a rel="nofollow">1</a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="/quanly-phieudanhgia.html?page=2"
                className=""
              >
                2
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="/quanly-phieudanhgia.html?page=3"
                className=""
              >
                3
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="/quanly-phieudanhgia.html?page=4"
                className=""
              >
                4
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="/quanly-phieudanhgia.html?page=2"
                className=" next"
                title="Next page"
              >
                &gt;
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="/quanly-phieudanhgia.html?page=5"
                className=" notUndeline"
              >
                ...
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="/quanly-phieudanhgia.html?page=9"
                className=" "
                title="Last page"
              >
                &gt;&gt;&gt;
              </a>
            </li>
          </div>
        </div>
      </div>
      <script
        type="text/javascript"
        src="../js/jquery-3.4.1.min.js"
        async
      ></script>
      <script type="text/javascript" src="../js/trangchung.js" async></script>
      <script type="text/javascript" src="../js/select2.min.js" async></script>
      <script type="text/javascript" src="../js/manh.js" async></script>
      <script type="text/javascript"></script>
    </div>
  );
};
export default KetQuaNhanVien;
