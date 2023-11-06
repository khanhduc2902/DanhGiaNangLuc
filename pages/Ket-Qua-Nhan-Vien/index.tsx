"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import imageFile from "@/public/assets/js/TrangchuPage";
import imageP from "@/public/assets/js/PhieuDanhGia";
import Image from "next/image";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import titleArray from "@/components/tester2";
import axios from "axios";
import { token, baseURL } from "@/components/utils/constant";

interface MyObject {
  // Định nghĩa các thuộc tính của object của bạn
  start: string;
  end: string;
  // ...
}


const pointArray = [
  { label: "Không sắp xếp số điểm", value: null },
  { label: "Số điểm giảm dần", value: -1 },
  { label: "Số điểm tăng dần", value: 1 },
];
const arrayNumber = ["2", "5", "10", "20", "50", "100"];

const KetQuaNhanVien = () => {
  /* display popup */
  //   const [room, setRoom] = useState(true);
  const [danhGia, setDanhGia] = useState(true);
  // const [sapXepDiem, setSapXepDiem] = useState(true);
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

  // const [pagination, setPagination] = useState(89);
  /* display popup */

  /* Tim Kiem theo nhan vien*/
  const [allUser, setAllUser] = useState<any>([]);
  const [searchuserId, setSearchuserId] = useState<any>([]);
  // console.log("searchuserId", searchuserId)
  const [staff, setStaff] = useState("Tìm kiếm nhân viên");
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
        const response = await axios.post(
          `${baseURL}${"/api/DGNL/KetQuaDanhGia/allNameKQNV"}`,

          null,
          config
        );

        setAllUser(response.data.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
      }
    };
    fetchData();
  }, []);
  //   console.log("alluser", allUser);
  
  /* Tim Kiem theo phong ban*/
  const [allDep, setAllDep] = useState<any>([]);
  const [roomState, setRoomState] = useState("Tất cả phòng ban");
  const [searchDepId, setSearchDepId] = useState(null);
  // console.log("searchdepid: ", searchDepId)
  const [room, setRoom] = useState(true);
  const [searchRoom, setSearchRoom] = useState("");
  const [filteredRoom, setFilteredRoom] = useState<any>(Object.values(allDep));

  const handleSearchRoom = (query: string) => {
    setSearchRoom(query);
    const filteredResults = Object.values(allDep).filter(
      (item: any) =>
        item &&
        item.dep_name &&
        item.dep_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRoom(filteredResults);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          `${baseURL}${"/api/DGNL/KetQuaDanhGia/allDepKQNV"}`,

          null,
          config
        );

        setAllDep(response.data.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
      }
    };
    fetchData();
  }, []);
  // console.log("AllDep", allDep)

  /* Tim Kiem theo ke hoach danh gia*/
  const [allKHDG2, setAllKHDG2] = useState<any>([]);
  const [khdgState, setKhdgState] = useState("Tất cả kế hoạch đánh giá");
  const [khdg, setKhdg] = useState(true);
  const [searchKhdg, setSearchKhdg] = useState("");
  const [searchId, setSearchId] = useState<any>();
  // console.log("searchId", searchId)
  const [filteredKhdg, setFilteredKhdg] = useState(Object.values(allKHDG2));

  const handleSearchKhdg = (query: string) => {
    setSearchKhdg(query);
    const filteredResults = Object.values(allKHDG2).filter(
      (item: any) =>
        item &&
        item.kh_ten &&
        item.kh_ten.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredKhdg(filteredResults);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          `${baseURL}${"/api/DGNL/KetQuaDanhGia/allKhKQNV"}`,

          null,
          config
        );

        setAllKHDG2(response.data.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
      }
    };
    fetchData();
  }, []);
  //   console.log("allKHDG", allKHDG2);\

  /* Khong sap xeo so diem*/
  const [point, setPoint] = useState("Sắp xếp theo số điểm");
  console.log("point: ", point)
  const [sapXepDiem, setSapXepDiem] = useState(true);
  const [searchPoint, setSearchPoint] = useState("");
  const [diemFilter, setDiemFilter] = useState(null);

  console.log("diemFilter", diemFilter )
  console.log("searchPoint", searchPoint)
  // const handleSearchPoint = (query: string) => {
  //   const filteredResults = pointArray.filter((item) =>
  //     item.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredPoint(filteredResults);
  // };
  const handleInputChangePoint = (event:any) => {
    const searchValue = event.target.value;
    setSearchPoint(searchValue);
   
  };

  // const handleInputChangePoint = (event: any) => {
  //   setSearchPoint(event.target.value);
  //   handleSearchPoint(event.target.value);
  // };
  /* next and prev button next:  */
  const refLeft = useRef(null);
  const [next, setNext] = useState("#STT1");

  /* next and prev button */
  /*title */
  const namePath = usePathname();
  const [titleName, setTitleName] = useState("");

  useEffect(() => {
    // Find the item in titleArray that matches the namePath
    const matchedItem = titleArray.find((item) => item.id === namePath);

    if (matchedItem) {
      // Set the title based on the matched item's name
      setTitleName(matchedItem.name);
    }
  }, []);
  /* */

  const [dataTable, setDatatable] = useState<any>([])
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  console.log("pageSize", pageSize)
  const [pagination, setPagination] = useState(0); // Tổng số trang
  const [totalPhieu, setTotalPhieu] = useState(0);
  console.log("totalPhieu: ", totalPhieu);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const requestData: {
          page: number;
          pageSize: number;
          kh_id?: number;
          dep_id?: number;
          locdiem?: string;
          id?: number;
        } = {
          page: page,
          pageSize: pageSize,
        };

        if (searchId) {
          requestData.kh_id = searchId;
        }

        if (searchDepId !== null) {
          requestData.dep_id = searchDepId;
        }
        if (diemFilter) {
          requestData.locdiem = diemFilter;
        }
        if (searchuserId) {
          requestData.id = searchuserId;
        }
        const response = await axios.post(
          // "http://localhost:3012/api/DGNL/KetQuaDanhGia/KetQuaPhongBan",
          `${baseURL}${'/api/DGNL/KetQuaDanhGia/dulieunv'}`,
          requestData,
          config
        );
        const response2 = await axios.post(
          `${baseURL}${'/api/DGNL/KetQuaDanhGia/dulieunv'}`,

          { page: 1, pageSize: 1000 },
          config
        );

        let tempTotalPhieu = Object.values(response2.data.data).filter(item => typeof item === 'object').length ;
        let tempTotalTrang = Math.ceil(tempTotalPhieu / pageSize);

        if (searchId || searchDepId ) {
          // Nếu có tìm kiếm, sử dụng dữ liệu từ response để đếm tổng số phiếu
          tempTotalPhieu = Object.values(response.data.data).filter(item => typeof item === 'object').length;
          tempTotalTrang = Math.ceil(tempTotalPhieu / pageSize);
        }

        setTotalPhieu(tempTotalPhieu);
        setPagination(tempTotalTrang);
        // setRender(response.data.data);
        if (page === 1) {
          setIsFirstPage(true);
          setIsLastPage(false); // Đặt isLastPage thành false nếu ở trang đầu
        }

        if (page === tempTotalTrang) {
          setIsFirstPage(false); // Đặt isFirstPage thành false nếu ở trang cuối
          setIsLastPage(true);
        }
        setDatatable(response.data.data)
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
      }
    };

    fetchData();
  }, [searchDepId, searchId, diemFilter, searchuserId, page, pageSize]);
  // console.log("dataTable", dataTable)
// Xử lý chuyển trang
const handlePageChange = (newPage: any) => {
  setPage(newPage);
};



const handlePageSizeChange = (value: any) => {
  setPageSize(value);
  setOnOfHT(false); // Close the dropdown after selection
};
// Tạo các liên kết trang
const pageLinks = [];
for (let i = Math.max(1, page - 2); i <= Math.min(pagination, page + 2); i++) {
  pageLinks.push(
    <li key={i}>
      <a
        rel="nofollow"
        className={i === page ? "active" : ""}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </a>
    </li>
  );
}

  const [alertDate, setAlertDate] = useState("");
  return (
    <div>
      <div className="main">
        <Header />

        <div className="main_body">
          <div className="phieudanhgia box-qlinhanvien">
            <p className="chuden size-14 tieude1024 bot-15">{titleName}</p>

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
                          title="searchroom"
                          type="text"
                          className="py-1 px-3 border border-slate-400 outline-none"
                          onChange={(e) => handleSearchRoom(e.target.value)}
                          //   value={searchRoom}
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
                                      setSearchDepId(item.dep_id);
                                  }}
                                >
                                  {item.dep_name}
                                </li>
                              );
                            }
                          )
                        : // Hoặc render danh sách ban đầu nếu không có nội dung trong searchRoom
                          Object.values(allDep).map(
                            (item: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                  value="2672"
                                  onClick={() => {
                                    setRoomState(item.dep_name);
                                    setRoom(!room);
                                      setSearchDepId(item.dep_id);
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
                    <p className="pl-3 py-2 w-56 truncate">{khdgState}</p>
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
                        title="seach"
                        type="text"
                        className="py-1 px-3 w-full border border-slate-400 outline-none"
                        onChange={(e) => handleSearchKhdg(e.target.value)}
                        placeholder="search kh"
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
                                    setSearchId(item.kh_id);
                                  //   console.log(searchId);
                                }}
                              >
                                {item.kh_ten}
                              </li>
                            );
                          }
                        )
                      : // Hoặc render danh sách ban đầu nếu không có nội dung trong searchRoom
                        Object.values(allKHDG2).map(
                          (item: any, index: number) => {
                            return (
                              <li
                                key={index}
                                className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                value="2672"
                                onClick={() => {
                                  setKhdgState(item.kh_ten);
                                  setKhdg(!khdg);
                                    setSearchId(item.kh_id);
                                  //   console.log(searchId);
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
                        title="searchpoint"
                        type="text"
                        className="py-1 px-3 border border-slate-400 outline-none"
                        onChange={handleInputChangePoint}
                        value={searchPoint}
                      />
                    </li>

                    {pointArray.map((item:any, index:any) => {
                      return (
                        <li
                          key={index}
                          className="hover:bg-blue-400  hover:text-white  cursor-pointer py-1.5 px-1"
                          value={item.value}
                          onClick={() => {
                            setPoint(item.label);
                            setDiemFilter(item.value);
                            setSapXepDiem(!sapXepDiem);
                          }}
                        >
                          {item.label}
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
                        aria-controls="select2--container"
                        // aria-owns="select2--results"
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
                            title="seachstaff"
                            type="text"
                            className="outline-none py-1 border-solid border rounded-none border-slate-400"
                            onChange={(e) => handleSearchUser(e.target.value)}
                            placeholder="search"
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
                                        // setUserState(item.userName);
                                        setUser(!user);
                                        setStaff(item.userName);
                                        setOnOffKh(!onOfKh);
                                        setSearchuserId(item._id);
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
                                        // setUserState(item.userName);
                                        setUser(!user);
                                        setStaff(item.userName);
                                        setOnOffKh(!onOfKh);
                                        setSearchuserId(item._id);
                                      }}
                                    >
                                      {item.userName}
                                    </li>
                                  );
                                }
                              )}
                       
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
                <div className={`${"turn turn_left"}`} id="scrollLeftButton">
                  <Image src={imageP.left} alt="sang trái" />
                </div>
                <div className=" turn turn_right" id="turn_right">
                  <Image src={imageP.right} alt="sang phải" />
                </div>
              </div>
              <div className={`${"bangchung"}`} id="scrollableContent">
                <table className={`${"bangchinh chuden"} ${""}`}>
                  <tbody>
                    <tr>
                      <th className="">
                        <p className="phantucon">STT</p>
                      </th>
                      <th>
                        <p className="phantucon" id="STT1">
                          Mã NV
                        </p>
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
                  {Object.values(dataTable).map((item: any, index: any) => {
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
                            <td>Xếp loại </td>
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
                      {pageSize}
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
                  {/* <li className="cursor-pointer">
                    <input
                      placeholder="a"
                      title="loc"
                      type="number"
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
                  })} */}
                   <li className="cursor-pointer">
                    <input
                      title="Search"
                      placeholder="Search"
                      type="search"
                      className="w-16 outline-none border border-slate-400 my-1 px-1"
                    />
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => handlePageSizeChange(2)}
                  >
                    2
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => handlePageSizeChange(5)}
                  >
                    5
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => handlePageSizeChange(10)}
                  >
                    10
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => handlePageSizeChange(20)}
                  >
                    20
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => handlePageSizeChange(100)}
                  >
                    100
                  </li>
                </ul>
              </div>
            </div>
            <p className="chuden size-14">
              Tổng số: <span className="dem_so_pt">{totalPhieu}</span>{" "}
              <span className="font-medium"> Phiếu đánh giá</span>
            </p>
          </div>

          <div className="pagination_vippro">
            {isLastPage ? (
              <li className="active">
                <a
                  rel="nofollow"
                  className="back"
                  title="Back"
                  onClick={() => handlePageChange(page - 1)}
                >
                  &lt;
                </a>
              </li>
            ) : null}
            {pageLinks}

            {isFirstPage ? (
              <li className="active">
                <a
                  rel="nofollow"
                  className="back"
                  title="Back"
                  onClick={() => handlePageChange(page + 1)}
                >
                  &gt;
                </a>
              </li>
            ) : null}
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
