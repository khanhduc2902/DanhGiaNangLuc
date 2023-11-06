import React from "react";
import { useState, ChangeEvent, useEffect } from "react";
import imageP from "@/public/assets/js/PhieuDanhGia";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import titleArray from "@/components/tester2";
import { compareAsc, parseISO } from "date-fns";
import Link from "next/link";
import xoa from "@/public/assets/img/xoa.png";
import ep_logo from "@/public/assets/img/ep_logo.png";
import Popup_ngdanhgia from "@/components/Popup_ngdanhgia";
import Select from "react-select";
import { Table } from "antd";
import { token, baseURL } from '@/components/utils/constant';


interface MyObject {
  start: string;
  end: string;
}
import axios from "axios";

const test = [
  { label: "Tất cả trạng thái", value: null },
  { label: "Đang đánh giá", value: `${0}` },
  { label: "Hoàn thành", value: 1 },
];

const defaultSelectedPosition = test[0];

const PhieuDanhGia = () => {
  const [testdata, setTestdata] = useState(defaultSelectedPosition);
  const handleTestChange = (selectedOption: any) => {
    setTestdata(selectedOption);
  };

  useEffect(() => {
    fetchGetListBang();
  }, [testdata]);

  const [showTime, setShowTime] = useState(true);
  const [dateStart, setDateStart] = useState("");
  console.log("dateStart: ", dateStart)
  const [dateEnd, setDateEnd] = useState("");
  console.log("dateEnd: ", dateEnd)

  const [getListBang, setGetListBang] = useState<any>([]);
  const [searchId, setSearchId] = useState<any>();

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateStart(event.target.value);
  };
  const handleDateChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setDateEnd(event.target.value);
  };
  const [date, setDate] = useState<MyObject>({
    start: "",
    end: "",
  });
  const handleSetTime = () => {
    if (compareAsc(parseISO(dateStart), parseISO(dateEnd)) === -1) {
      setDate({ start: dateStart, end: dateEnd });
      setShowTime(!showTime);
    } else {
      alert("Ngày bắt đầu phải nhỏ hơn kết thúc");
      setDate({ start: "", end: "" });
    }
  };
  const handleCancleTime = () => {
    setDate({ start: "", end: "" });
    setShowTime(!showTime);
  };

  const handleTime = () => {
    setShowTime(!showTime);
    setOnOffKh(true);
  };

  const [keHoach, setKeHoach] = useState("Tìm kiếm theo tên kế hoạch đánh giá");
  const [onOfKh, setOnOffKh] = useState(true);
  const namePath = usePathname();
  const [titleName, setTitleName] = useState("");

  useEffect(() => {
    const matchedItem = titleArray.find((item) => item.id === namePath);

    if (matchedItem) {
      setTitleName(matchedItem.name);
    }
  }, []);

  const [openPop, setOpenPop] = useState(true);

  const [funcid, setFuncid] = useState(null);
  const handleFuncid = (kh_id: any) => {
    setFuncid(funcid == kh_id ? null : kh_id);
  };
  console.log(funcid);

  const handlePopOpen = () => {
    setOpenPop(!openPop);
  };
  const [userList, setUserList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post(
          `${baseURL}${'/api/DGNL/PhieuDanhGia/ListUsers'}`,
          {
            kh_id: funcid,
          },
          config
        );

        setUserList(response.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };
    if (funcid) {
      fetchData();
    } else {
      setUserList(null);
    }
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: any, pageSize: any) => {
    setCurrentPage(page);
  };

  const fetchGetListBang = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      let requestData: {
        is_duyet: string | number | null;
        kh_id?: string | number;
        start_date?: string | null;
        end_date?: string | null;
      } = {
        is_duyet: testdata.value,
        start_date: dateStart,
        end_date: dateEnd
      };

      if (searchId != null) {
        requestData.kh_id = searchId;
      }

      let response = await axios.post(
        `${baseURL}${'/api/DGNL/PhieuDanhGia/getListBang'}`,
        requestData,
        config
      );

      setGetListBang(response.data.data);
    } catch (error) {
      console.error("Lỗi khi gọi API SearchResult:", error);
    }
  };

  useEffect(() => {
    fetchGetListBang();
  }, [searchId, testdata.value, dateStart, dateEnd]);

  const handleDelete = async (kh_id: any) => {
    try {
      if (kh_id !== null) {
        const confirmDelete = window.confirm(
          "Bạn có chắc chắn muốn xóa không?"
        );

        if (confirmDelete) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          const response = await axios.put(
            `${baseURL}${'api/DGNL/PhieuDanhGia/deleteKHDG'}`,
            { kh_id },
            config
          );
          fetchGetListBang();
        }
      }
    } catch (error) {
      console.error("Lỗi khi xóa phiếu danh gia:", error);
    }
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

  useEffect(() => {
    const fetchNguoiDanhGiaData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          // "http://localhost:3012/api/DGNL/PhieuDanhGia/allNguoiDanhGia",
          `${baseURL}${'/api/DGNL/PhieuDanhGia/allNguoiDanhGia'}`,
          null,
          config
        );
        setAllKHDG(response.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API SearchResult:", error);
      }
    };
    fetchNguoiDanhGiaData();
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Mã phiếu",
      dataIndex: "ma_phieu",
      render: (text: any, record: any) => (
        <Link
          className="chuxanh"
          href="/Phieu-Danh-Gia/Chi-tiet"
          onClick={() => {
            localStorage.setItem("kh_id", record.kh_id);
          }}
        >
          {record.ma_phieu}
        </Link>
      ),
    },
    {
      title: "Tên kế hoạch đánh giá",
      dataIndex: "tenkehoachdanhgia",
    },
    {
      title: "Trạng thái",
      dataIndex: "trang_thái",
      render: (text: any, record: any) =>
        `${record.trang_thai}` === "1" ? "Hoàn thành" : "Đang đánh giá",
    },
    {
      title: "Đối tượng",
      dataIndex: "Nhân Viên",
      render: () => <div>Nhân Viên</div>,
    },
    {
      title: "Số đối tượng",
      dataIndex: "doi_tuong_nv",
    },
    {
      title: "Thời gian",
      dataIndex: "thoi_gian",
      render: (text: any, result: any) => (
        <td className="text-center">
          <div className="flex bot-5 center-center">
            <div className="left_time text-left">
              <p className="chuxanh font-medium">Từ:</p>
            </div>
            <div className="right_time ">
              <p className="chuden">{result.thoi_gian_batdau}</p>
            </div>
          </div>
          <div className="flex center-center">
            <div className="left_time text-left">
              <p className="chudo font-medium">Đến:</p>
            </div>
            <div className="right_time">
              <p className="chuden">{result.thoi_gian_ketthuc}</p>
            </div>
          </div>
        </td>
      ),
    },

    {
      title: "Người đánh giá",
      dataIndex: "nguoi_danhgia",
      render: (text: any, record: any, result: any) => (
        <div
          className="flex center-center js_thanhvien c-pointer xem_ng_danhgia"
          onClick={() => {
            setOpenPop(!openPop);
            handleFuncid(record.kh_id);
          }}
        >
          {text ? (
            text
              .slice(0, 4)
              .map(() => (
                <Image src={ep_logo} className="wh26_ra left_am10" alt="" />
              ))
          ) : (
            <p>Không có thành viên.</p>
          )}
          <div className="bonus flex center-center left_am chutrang size-14">
            {text ? (text.length > 4 ? text.length - 4 : 0) : ""}
          </div>
        </div>
      ),
    },
    {
      title: "Ghi chú",
      dataIndex: "ghi_chu",
    },
    {
      title: "Chức năng",
      render: (text: any, record: any) => (
        <div
          data-id={record.kh_id}
          data-name="12"
          className="flex center-height center-width c-pointer btn_xoa"
          onClick={() => handleDelete(record.kh_id)}
        >
          <Image src={xoa} className="right-5" alt="khooi phuc" />
          <div className="chudo font-medium size-14">Xóa</div>
        </div>
      ),
    },
  ];


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the width threshold as needed

  useEffect(() => {
    // Add a resize event listener to handle changes in device type
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const tableScroll = isMobile
  ? { x: 'auto', y: 'auto' }
  : { x: '100%', y: 'auto' };
  // : { x: '100%', y: 'auto' };
  return (
    <div>
      <div className="main">
        <Header />
        <div className="main_body">
          <div className="phieudanhgia box-qlinhanvien">
            <p className="chuden size-14 tieude1024 bot-15">{titleName}</p>
            <div
              id="show_thietlaptime"
              className={`${showTime ? "popup" : "open_pop_up"}`}
            >
              <div className=" pop">
                <div className="nenxanh-chutrang br-t-10 flex center-center padding15">
                  <div className="" onClick={handleTime}>
                    <h4 className="size-18 font-bold">Chọn khoảng thời gian</h4>
                  </div>
                  <div
                    className="flex center-height c-pointer x_close"
                    onClick={handleTime}
                  >
                    <Image src={imageP.x} alt="Huong dan" />
                  </div>
                </div>
                <div className="nentrang br-b-10">
                  <form action="" method="post">
                    <div className="padding-20">
                      <div className="bot-15">
                        <p className="chuden font-medium size-15 bot-5">
                          Từ ngày:
                        </p>
                        <div className="border_input date">
                          <input
                            placeholder="a"
                            id="datebd-input"
                            type="date"
                            value={dateStart}
                            onChange={handleDateChange}
                          />
                        </div>
                        <p className="errol_time chudo top-5 hidden size-12 font-medium chunghieng">
                          Thời gian bắt đầu phải nhỏ hơn kết thúc
                        </p>
                      </div>
                      <div className="bot-15">
                        <p className="chuden font-medium size-15 bot-5">
                          Đến ngày:
                        </p>
                        <div className="border_input date">
                          <input
                            placeholder="a"
                            id="datekt-input"
                            type="date"
                            value={dateEnd}
                            onChange={handleDateChange2}
                          />
                        </div>
                      </div>
                      <div className="khoibutton_form top-25 bot-20">
                        <button
                          type="button"
                          className="btn close btn-nentrang-chuxanh br-5 vienxanh font-medium size-15 c-pointer"
                          onClick={handleCancleTime}
                        >
                          Hủy
                        </button>
                        <button
                          type="button"
                          className="btn  btn-nenxanh-chutrang  br-5 vienxanh font-medium size-15  c-pointer"
                          onClick={handleSetTime}
                        >
                          Chọn
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex space">
              <div className="flex wrap space">
                <div
                  className={`${"nentrang m_danhmucdanhgia br-10 c-pointer js_chonngay"} ${"mb-4"}`}
                >
                  <div
                    className={`${"danhmucdanhgia flex center-height"} ${"border border-slate-300"}`}
                    onClick={() => setShowTime(!showTime)}
                  >
                    <p className="chuden size-14 right-10">
                      Thời gian đánh giá:{" "}
                    </p>
                    <p className="chuden size-14 time_danhgia">
                      <span className="time_bd"></span> {date.start} -{" "}
                      {date.end} <span className="time_kt"></span>
                    </p>
                  </div>
                </div>
                <Select
                  options={test}
                  onChange={handleTestChange}
                  value={testdata}
                  className={`select_no_muti danhmucdanhgia relative w-44 text-sm border border-slate-300 mr-4`}
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      height: "36px",
                      minHeight: "10px",
                      borderRadius: "10px",
                    }),
                  }}
                />

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
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2--container"
                          role="textbox"
                          aria-readonly="true"
                          title="Tìm kiếm theo tên kế hoạch đánh giá"
                          onClick={() => {
                            setOnOffKh(!onOfKh);
                          }}
                        >
                          {keHoach}
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
                          ? Object.values(filteredKhdg).map(
                              (item: any, index: number) => {
                                return (
                                  <li
                                    key={index}
                                    className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                    value="2672"
                                    onClick={() => {
                                      setKhdgState(item.kh_ten);
                                      setKhdg(!khdg);
                                      setKeHoach(item.kh_ten);
                                      setOnOffKh(!onOfKh);
                                      setSearchId(item.kh_id);
                                    }}
                                  >
                                    {item.kh_ten}
                                  </li>
                                );
                              }
                            )
                          : Object.values(allKHDG).map(
                              (item: any, index: number) => {
                                return (
                                  <li
                                    key={index}
                                    className="hover:bg-blue-400 hover:text-white cursor-pointer py-1.5 px-1"
                                    value="2672"
                                    onClick={() => {
                                      setKhdgState(item.kh_ten);
                                      setKhdg(!khdg);
                                      setKeHoach(item.kh_ten);
                                      setOnOffKh(!onOfKh);
                                      setSearchId(item.kh_id);
                                    }}
                                  >
                                    {item.kh_ten}
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
                <div className="turn turn_left" id="turn_left">
                  <Image src={imageP.left} alt="sang trái" />
                </div>
                <div className=" turn turn_right" id="turn_right">
                  <Image src={imageP.right} alt="sang phải" />
                </div>
              </div>
              <div>
                <Table
                  id="bang_chung"
                  columns={columns}
                  dataSource={
                    Object.values(getListBang)
                      .map((record, index) => {
                        if (typeof record === "object") {
                          return {
                            key: index + 1,
                            stt: index + 1,
                            ...record,
                          };
                        }
                        return null; 
                      })
                      .filter(Boolean) 
                  }
                  pagination={{
                    onChange: handlePageChange,
                  }}
                  scroll={tableScroll}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup_ngdanhgia
        popUp={openPop}
        checked={handlePopOpen}
        userList={userList}
        funcid={funcid}
      />
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
export default PhieuDanhGia;
