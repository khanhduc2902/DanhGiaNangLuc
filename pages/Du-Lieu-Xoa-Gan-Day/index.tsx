"use client";
import React from "react";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import sao from "@/public/assets/img/sao.png";
import phitieu from "@/public/assets/img/phitieu.png";
import phieu from "@/public/assets/img/phieu.png";
import phieunho from "@/public/assets/img/phieunho.png";
import axios from "axios";
import { token, baseURL } from "@/components/utils/constant";

const page = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          `${baseURL}${"/api/DGNL/TieuChiDeDG/renderCount"}`,

          config
        );

        setData(response.data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data.data);
  console.log(Object.values(data));
  return (
    <>
      <div className="main">
        <Header />
        <div className="main_body">
          <div className="dulieuxoa">
            <p className="size-14 chuden bot-15 tieude1024">
              Dữ liệu đã xóa gần đây
            </p>
            {Object.values(data).map((item: any, index: any) => {
              if (typeof item == "object") {
                return (
                  <div>
                    <div className="m_dl_xoa flex ">
                      <div className="xoa_con nentrang ">
                        <div className="padding15">
                          <div className="flex center-height bot-15">
                            <div className="right-10">
                              <Image src={sao} alt="tiêu chí đè đánh giá" />
                            </div>
                            <Link
                              className="size-16 chuden font-medium"
                              href="/Du-Lieu-Xoa-Gan-Day/Tieu-chi"
                            >
                              Tiêu chí - Đề đánh giá
                            </Link>
                          </div>
                          <div className="flex center-height">
                            <p className="chudo font-bold right-5">
                              {item.tieuchi}
                            </p>
                            <p className="size-14 chuden">Mục đã xóa</p>
                          </div>
                        </div>
                      </div>
                      <div className="xoa_con nentrang ">
                        <div className="padding15">
                          <div className="flex center-height bot-15">
                            <div className="right-10">
                              <Image src={phitieu} alt="tiêu chí đè đánh giá" />
                            </div>
                            <Link
                              className="size-16 chuden font-medium"
                              href="/Du-Lieu-Xoa-Gan-Day/Ke-hoach-danh-gia"
                            >
                              Kế hoạch đánh giá
                            </Link>
                          </div>
                          <div className="flex center-height">
                            <p className="chudo font-bold right-5">
                              {item.Kehoach}
                            </p>
                            <p className="size-14 chuden">Kế hoạch đã xóa</p>
                          </div>
                        </div>
                      </div>
                      <div className="xoa_con nentrang ">
                        <div className="padding15">
                          <div className="flex center-height bot-15">
                            <div className="right-10">
                              <Image src={phieu} alt="tiêu chí đè đánh giá" />
                            </div>
                            <Link
                              className="size-16 chuden font-medium"
                              href="/Du-Lieu-Xoa-Gan-Day/Phieu-danh-gia"
                            >
                              Phiếu đánh giá
                            </Link>
                          </div>
                          <div className="flex center-height">
                            <p className="chudo font-bold right-5">
                              {item.PhieuDG}
                            </p>
                            <p className="size-14 chuden">
                              Phiếu đánh giá đã xóa
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="xoa_con nentrang ">
                        <div className="padding15">
                          <div className="flex center-height bot-15 ">
                            <div className="right-10">
                              <Image
                                src={phieunho}
                                alt="tiêu chí đè đánh giá"
                              />
                            </div>
                            <Link
                              className="size-16 chuden font-medium"
                              href="/Du-Lieu-Xoa-Gan-Day/De-kiem-tra"
                            >
                              Đề kiểm tra
                            </Link>
                          </div>
                          <div className="flex center-height">
                            <p className="chudo font-bold right-5">
                              {item.DeKt}
                            </p>
                            <p className="size-14 chuden">Đề kiểm tra đã xóa</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div>{item.DeKt}</div>
                                <div>{item.Kehoach}</div>
                                <div>{item.PhieuDG}</div>
                                <div>{item.tieuchi}</div> */}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
