import Navbar from "@/pages/Du-Lieu-Xoa-Gan-Day/Navbar";
import React, { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import back from "@/public/assets/img/back.png";
import Link from "next/link";
import icon_i from "@/public/assets/img/icon_i.png";
import icon_so from "@/public/assets/img/icon_so.png";
import MyEditor from "@/components/MyCkeditor";
import parseISO from "date-fns/parseISO";
import Router from "next/router";
import icon_but from "@/public/assets/img/icon_but.png";
import icon_excel from "@/public/assets/img/icon_excel.png";
import ep_logo from "@/public/assets/img/ep_logo.png";
import tich from "@/public/assets/img/tich.svg";
const searchState = ["Tiêu chí tổng hợp", "Tiêu chí đơn"];
const searchStatement = ["Đóng", "Mở"];
import { useRouter } from "next/router";
import axios from "axios";
import closer from "@/public/assets/img/close.png";
import { Table, Divider } from 'antd';
import { token, baseURL } from '@/components/utils/constant';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

const ChitietPhieu = (prop: any) => {

  const router = useRouter();
  //   const { kh_id } = router.query;
  const kh_id = localStorage.getItem("kh_id");

  console.log("kh_id:", kh_id);
  //   console.log("token:", token);
  const [xoaQues, setXoaQues] = useState(true);
  const handleXoaQues = () => {
    setXoaQues(!xoaQues);
  };

  const [phieudanhgiaCT, setPhieudanhgiaCT] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post(
          // "http://localhost:3012/api/DGNL/PhieuDanhGia/getAllPhieuDanhGiaChiTiet",
          `${baseURL}${'/api/DGNL/PhieuDanhGia/getAllPhieuDanhGiaChiTiet'}`,

          {
            kh_id: Number(kh_id),
          },
          config
        );

        setPhieudanhgiaCT(response.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchData();
  }, [kh_id]);

  const [listUser, setListUser] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post(
          // "http://localhost:3012/api/DGNL/PhieuDanhGia/ListUsers",
          `${baseURL}${'/api/DGNL/PhieuDanhGia/ListUsers'}`,

          {
            kh_id: Number(kh_id),
          },
          config
        );

        setListUser(response.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchData();
  }, []);

  const [popUp, setPopUp] = useState(true);

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const [showInfo, setShowInfo] = useState(true);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="main">
      <div
        className={`${"popup popup_680 popup_thanhvien"} ${
          popUp ? "" : "block"
        }`}
      >
        <div className="container">
          <div className="content">
            <div className="popup_header">
              <h4 className="name_header">Người đánh giá</h4>
              <div className="img close_popup" onClick={togglePopUp}>
                <Image src={closer} alt="đóng" />
              </div>
            </div>
            <div className="popup_body">
              <div className="khoibang khoibang_2">
                <div className="bangchung bangchung_2">
                  <table className="bangchinh tieu_chi popuphien_nguoi_dg">
                    {listUser &&
                      Object.values(listUser).map((user: any, index: any) => {
                        if (typeof user == "object") {
                          return (
                            <tr>
                              <td>
                                <p className="text_a_l" key={index}>
                                  {index + 1}
                                </p>
                              </td>
                              <td>
                                <div className="d_flex align_c">
                                  <Image
                                    className="wh26_ra right-10"
                                    src={ep_logo}
                                    alt="Người tạo"
                                  />
                                  <p className="text_a_l">{user.ten}</p>
                                </div>
                              </td>
                              <td>
                                <p className="text_a_l">{user.phong}</p>
                              </td>
                              <td>
                                <p className="text_a_l">{user.tenchucvu}</p>
                              </td>
                            </tr>
                          );
                        } else {
                          return null;
                        }
                      })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar urlBack="/Phieu-Danh-Gia" />
      <div className="main_body">
        <div className="body_ql_tieuchi body_ql_tieuchi_danhgia">
          <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
            <Link href="/Quan-Li-Tieu-Chi-Danh-Gia">
              <div className="flex center-height right-10 c-pointer">
                <Image src={back} alt="Quay lai" />
              </div>
            </Link>
            <p>Quản lý kế hoạch đánh giá / Chi tiết</p>
          </div>
        </div>
        <div className="d_flex align_c flex_end mb_20">
          <div className="btn_header_ql_tieuchi d_flex">
            <Link href="/De-Kiem-Tra-Nang-Luc/Duyet" className="btn sua">
              <div className="img mr_12">
                <Image src={tich} alt="tich" />
              </div>
              <p>Duyệt</p>
            </Link>
            <Link href="/De-Kiem-Tra-Nang-Luc/Danh-gia" className="btn sua">
              <div className="img mr_12">
                <Image src={icon_but} alt="Chỉnh sửa" />
              </div>
              <p>Đánh giá</p>
            </Link>
            <div className="set_marginRespon">
              <div className="btn btn_trang xoa" onClick={handleXoaQues}>
                <p className="color_blue">Xóa phiếu</p>
              </div>
            </div>
            <Link href="">
              <div className="btn excel">
                <div className="img mr_12">
                  <Image src={icon_excel} alt="File excel" />
                </div>
                <p>Xuất excel</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="body_ql_tieuchi body_ql_tieuchi_chitiet overflow-x-scroll">
          <div
            className="header_d width_100"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h4 className="font-bold">Thông tin kế hoạch đánh giá</h4>
            {showInfo ? (
              <button onClick={toggleInfo}>Ẩn bớt</button>
            ) : (
              <button onClick={toggleInfo}>Hiển thị</button>
            )}
          </div>
          {showInfo && (
            <div className="body width_100">
              {Object.values(phieudanhgiaCT).map((item: any) => {
                if (typeof item == "object") {
                  return (
                    <ul className="thongtin_tieuchi ">
                      <li className="item">
                        <p>Mã phiếu đánh giá:</p>
                        <p>{item.ma_phieu}</p>
                      </li>
                      <li className="item">
                        <p>Ngày tạo:</p>
                        <p>{item.ngay_tao}</p>
                      </li>
                      <li className="item">
                        <p>Đối tượng đánh giá:</p>
                        <p>Nhân viên</p>
                      </li>
                      <li className="item">
                        <p>Số đối tượng:</p>
                        <p>{item.doi_tuong_nv}</p>
                      </li>
                      <li className="item">
                        <p>Kế hoạch đánh giá:</p>
                        <p>{item.tenkehoachdanhgia}</p>
                      </li>
                      <li className="item " onClick={togglePopUp}>
                        <p>Người đánh giá:</p>
                        <div className="d_flex flex_start center-height width_100">
                          <div className="flex center-center js_thanhvien c-pointer xem_ng_danhgia">
                            {item.users ? (
                              item.users
                                .slice(0, 4)
                                .map(() => (
                                  <Image
                                    src={ep_logo}
                                    className="wh26_ra left_am10"
                                    alt=""
                                  />
                                ))
                            ) : (
                              <p>Không có thành viên.</p>
                            )}
                          </div>
                          <div className="bonus flex center-center left_am chutrang size-14">
                            {item.users
                              ? item.users.length > 4
                                ? item.users.length - 4
                                : 0
                              : ""}
                          </div>
                          <p>{prop.creator}</p>
                        </div>
                      </li>
                      <li className="item">
                        <p>Thời gian bắt đầu:</p>
                        <p>{item.thoi_gian_batdau}</p>
                      </li>
                      <li className="item">
                        <p>Thời gian kết thúc:</p>
                        <p>{item.thoi_gian_ketthuc}</p>
                      </li>

                      <li className="item">
                        <p>Trạng thái:</p>
                        <p style={{ color: "blue" }}>
                          {`${item.trang_thai}` === "1"
                            ? "Hoàn thành"
                            : "Đang đánh giá"}
                        </p>
                      </li>

                      <li className="item ">
                        <p>Ghi chú:</p>
                        <p>{item.ghi_chu}</p>
                      </li>
                    </ul>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          )}
        </div>
     <>
     <Divider>Middle size table</Divider>
     <Table columns={columns} dataSource={data} size="middle" />
    
   </>
      </div>
    </div>
  );
};

export default ChitietPhieu;
