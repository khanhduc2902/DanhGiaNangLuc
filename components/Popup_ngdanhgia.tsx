import React, { useState, useEffect } from "react";
import Image from "next/image";
import closer from "@/public/assets/img/close.png";
import ep_logo from "@/public/assets/img/ep_logo.png";

interface MyComponent {
  checked: () => void;
  popUp: boolean;
}

const Popup_ngdanhgia: React.FC<
  MyComponent & { funcid: any; userList: any }
> = ({ checked, funcid, userList, popUp }) => {
  return (
    <div
      className={`${"popup popup_680 popup_thanhvien"} ${popUp ? "" : "block"}`}
    >
      <div className="container">
        <div className="content">
          <div className="popup_header">
            <h4 className="name_header">Người đánh giá</h4>
            <div className="img close_popup">
              <Image src={closer} alt="đóng" onClick={checked} />
            </div>
          </div>
          <div className="popup_body">
            <div className="khoibang khoibang_2">
              <div className="bangchung bangchung_2">
                <table className="bangchinh tieu_chi popuphien_nguoi_dg">
                  {userList &&
                    Object.values(userList.data)
                      ?.filter((user: any) => user.kh_id === funcid)
                      .map((user: any, index: any) => {
                        console.log("check user :", user.nguoi_danhgia);
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
                      })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup_ngdanhgia;
