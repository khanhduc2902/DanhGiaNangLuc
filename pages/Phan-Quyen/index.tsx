"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import imageFile from "@/public/assets/js/TrangchuPage";
import imageP from "@/public/assets/js/PhieuDanhGia";
import Image from "next/image";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import titleArray from "@/components/tester2";
import dataFex from "@/components/tester3Array";
import key from "@/public/assets/img/key.png";
import Link from "next/link";
import axios from "axios";
import { token, baseURL } from "@/components/utils/constant";

const PhanQuyen = () => {
  const [onOfKh, setOnOffKh] = useState(true);

  const handleOnOfKH = () => {
    setOnOffKh(!onOfKh);
  };

  const [onOfHT, setOnOfHT] = useState(true);

  const [staff, setStaff] = useState("Tìm kiếm tên nhân viên");

  const [searchId, setSearchId] = useState(null);

  const [table, setTable] = useState<any>([]);

  const [selectedValue, setSelectedValue] = useState("10");

  const [searchRoom, setSearchRoom] = useState("");
  const [searchpb, setSearchpb] = useState(null);

  // const [totalData, setTotalData] = useState(0);
  // let totalDataCount = 0;
  const [currentPage, setCurrentPage] = useState(1);

  // const fetchDataRender = async () => {
  //   try {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     let response;
  //     console.log(searchId);
  //     const page = currentPage;

  //     if (searchId != null) {
  //       response = await axios.post(
  //         "http://localhost:3012/api/DGNL/PhanQuyen/Table",
  //         {
  //           dep_id: searchpb,
  //           id: searchId,
  //           pageSize: parseInt(selectedValue),
  //           page,
  //         },
  //         config
  //       );
  //     } else {
  //       response = await axios.post(
  //         "http://localhost:3012/api/DGNL/PhanQuyen/Table",
  //         {
  //           dep_id: searchpb,
  //           pageSize: parseInt(selectedValue),
  //           page,
  //         },
  //         config
  //       );
  //     }

  //     setTotalData(totalDataCount);
  //     setTable(response.data.data);
  //   } catch (error) {
  //     console.error("Lỗi khi gọi API:", error);
  //   }
  // };
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pagination, setPagination] = useState(0); // Tổng số trang
  console.log("pagination: ", pagination);
  const [totalPhieu, setTotalPhieu] = useState(0);
  console.log("totalPhieu: ", totalPhieu);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const fetchDataRender = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const requestData: {
        page: number;
        pageSize: number;
        idbody?: number;
        dep_id?: number;
      } = {
        page: page,
        pageSize: pageSize,
      };
      if (searchId) {
        requestData.idbody = searchId;
      }

      if (searchpb !== null) {
        requestData.dep_id = searchpb;
      }
      const response = await axios.post(
        `${baseURL}${'/api/DGNL/PhanQuyen/Table'}`,
        requestData,
        config
      );
      const response2 = await axios.post(
        `${baseURL}${'/api/DGNL/PhanQuyen/Table'}`,
        {page: 1, pageSize: 1000},
        config
      );
      let tempTotalPhieu = Object.values(response2.data.data).filter(item => typeof item === 'object').length;

      let tempTotalTrang = Math.ceil(tempTotalPhieu / pageSize);
      if (searchId) {
        // Nếu có tìm kiếm, sử dụng dữ liệu từ response để đếm tổng số phiếu
        tempTotalPhieu = Object.values(response.data.data).filter(item => typeof item === 'object').length;
        tempTotalTrang = Math.ceil(tempTotalPhieu / pageSize);
      }
      if (page === 1) {
        setIsFirstPage(true);
        setIsLastPage(false); // Đặt isLastPage thành false nếu ở trang đầu
      }

      if (page === tempTotalTrang) {
        setIsFirstPage(false); // Đặt isFirstPage thành false nếu ở trang cuối
        setIsLastPage(true);
      }

      setTotalPhieu(tempTotalPhieu);
      setPagination(tempTotalTrang);
      setTable(response.data.data);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  useEffect(() => {
    fetchDataRender();
  }, [searchId, selectedValue, searchpb, page, pageSize]);
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



  const [togglePb, setTogglePb] = useState(true);
  const handleOnOfPb = () => {
    setTogglePb(!togglePb);
  };

  //   Phong ban
  const [allPb, setAllPb] = useState<any>([]);
  const [roomState, setRoomState] = useState("Tìm kiếm phòng ban");
  const [room, setRoom] = useState(true);

  const [filteredRoom, setFilteredRoom] = useState(Object.values(allPb));

  const handleSearchRoom = (query: string) => {
    setSearchRoom(query);
    const filteredResults = Object.values(allPb).filter(
      (item: any) =>
        item &&
        item.dep_name &&
        item.dep_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRoom(filteredResults);
  };

  //   all user
  const [allUsers, setAllUsers] = useState<any>([]);
  const [userState, setUserState] = useState("Tìm kiếm Nhân viên");
  const [user, setUser] = useState(true);
  const [searchUser, setSearchUser] = useState("");
  const [filteredUser, setFilteredUser] = useState(Object.values(allUsers));

  const handleSearchUser = (query: string) => {
    setSearchUser(query);
    const filteredResults = Object.values(allUsers).filter(
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
          `${baseURL}${'/api/DGNL/PhanQuyen/AllUsers'}`,
          null,
          config
        );

        setAllUsers(response.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post(
          `${baseURL}${'/api/DGNL/PhanQuyen/AllPb'}`,
          null,
          config
        );

        setAllPb(response.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchData();
  }, []);

  const handlechangepage = () => {
    setCurrentPage(currentPage + 1);
    fetchDataRender();
  };
  const handlechangepageBack = () => {
    setCurrentPage(currentPage - 1);
    fetchDataRender();
  };

  console.log("curentpage", currentPage);

  return (
    <div>
      <div className="main">
        <Header />

        <div className="main_body">
          <div className="phieudanhgia box-qlinhanvien">
            <div className="flex space">
              <div className="flex wrap space">
                <div className="khoi_left mb-5">
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
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2--container-pb"
                            role="textbox"
                            aria-readonly="true"
                            title="Tìm kiếm theo tên kế hoạch đánh giá"
                            onClick={handleOnOfPb}
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
                        className={`${
                          togglePb
                            ? "hidden"
                            : "dropdown-wrapper relative z-20 flex justify-center"
                        }`}
                      >
                        <ul
                          id=""
                          className={`${"absolute w-full bg-slate-100  py-2 mb-2 overflow-y-scroll h-52 snap-y border-b border-x border-slate-400 rounded-b-lg"} ${"displaynone_scroll"}`}
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
                                        setSearchpb(item.dep_id);
                                      }}
                                    >
                                      {item.dep_name}
                                    </li>
                                  );
                                }
                              )
                            : // Hoặc render danh sách ban đầu nếu không có nội dung trong searchRoom
                              Object.values(allPb).map(
                                (item: any, index: number) => {
                                  return (
                                    <li
                                      key={index}
                                      className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                      value="2672"
                                      onClick={() => {
                                        setRoomState(item.dep_name);
                                        setRoom(!room);
                                        setSearchpb(item.dep_id);
                                      }}
                                    >
                                      {item.dep_name}
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
                <div className="khoi_left mb-5">
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
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2--container"
                            role="textbox"
                            aria-readonly="true"
                            title="Tìm kiếm theo tên kế hoạch đánh giá"
                            onClick={handleOnOfKH}
                          >
                            {userState}
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
                                        setStaff(item.userName);
                                        setOnOffKh(!onOfKh);
                                        setSearchId(item._id);
                                      }}
                                    >
                                      {item.userName}
                                    </li>
                                  );
                                }
                              )
                            : // Hoặc render danh sách ban đầu nếu không có nội dung trong searchRoom
                              Object.values(allUsers).map(
                                (item: any, index: number) => {
                                  return (
                                    <li
                                      key={index}
                                      className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                      value="2672"
                                      onClick={() => {
                                        setUserState(item.userName);
                                        setUser(!user);
                                        setStaff(item.userName);
                                        setOnOffKh(!onOfKh);
                                        setSearchId(item._id);
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
            <div className="khoibang po_r">
              <div className={`${"bangchung"}`} id="scrollableContent">
                <table
                  className={`${"bangchinh chuden set_width100per"} ${""}`}
                >
                  <tbody>
                    <tr>
                      <th className="w-16">
                        <p className="phantucon">STT</p>
                      </th>
                      <th className="w-36">
                        <p className="phantucon" id="STT1">
                          Mã NV
                        </p>
                      </th>
                      <th className="w-72">
                        <p className="phantucon">Họ tên</p>
                      </th>
                      <th>
                        <p className="phantucon">Phòng ban</p>
                      </th>

                      <th className="w-44">
                        <p className="phantucon">Chức danh</p>
                      </th>

                      <th className="w-40">
                        <p className="phantucon">Chức năng</p>
                      </th>
                    </tr>
                  </tbody>
                  <tbody className="show_apend">
                    {Object.values(table).map((item: any, index: number) => {
                      if (typeof item == "object") {
                        return (
                          <tr key={index}>
                            <td className="w-16">
                              <p className="phantucon">{index + 1}</p>
                            </td>
                            <td className="w-36">
                              <p className="phantucon" id="STT1">
                                {item.MaNV}
                              </p>
                            </td>
                            <td className="w-72">
                              <p className="phantucon">{item.userName}</p>
                            </td>
                            <td>
                              {item.qlc
                                ? item.qlc.map(
                                    (qlcItem: any, qlcIndex: number) => (
                                      <p className="phantucon" key={qlcIndex}>
                                        {qlcItem.dep_name}
                                      </p>
                                    )
                                  )
                                : null}
                            </td>

                            <td className="w-44">
                              {item.chucvu
                                ? item.chucvu.map(
                                    (chucvuItem: any, chucvuIndex: number) => (
                                      <p
                                        className="phantucon"
                                        key={chucvuIndex}
                                      >
                                        {chucvuItem.ten_chucvu}
                                      </p>
                                    )
                                  )
                                : null}
                            </td>

                            <td className="w-40">
                              <div className="flex center-center">
                                <Image
                                  src={key}
                                  className="right-5"
                                  alt="key"
                                />
                                <Link
                                  className="chuxanh size-14"
                                  href={`/Phan-Quyen/${item.MaNV}`}
                                >
                                  Thiết lập quyền
                                </Link>
                              </div>
                            </td>
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
              <div>
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
            </div>
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
            {/* {pageLinks.slice(page - 3, page + 2).map((link, index) => (
    <li key={index}>{link}</li>
  )} */}

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
export default PhanQuyen;
