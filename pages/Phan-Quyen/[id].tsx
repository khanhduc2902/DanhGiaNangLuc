import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import titleArray from '@/components/tester2'
import { usePathname } from 'next/navigation';
import Navbar from '@/pages/Du-Lieu-Xoa-Gan-Day/Navbar';
import dataFex from '@/components/tester3Array'
export default function Page() {
    const router = useRouter()
    
    
    

    return (
        <div>
            <div className="main">
                <Navbar urlBack='/Phan-Quyen' specName={router.query.id} />
                <div className="main_body">
                    <div className="phanquyenchitiet box-qlinhanvien">
                        <p className="chuden size-14 tieude1024 bot-15">Phân quyền / {router.query.id}</p>
                        <div className='khoibang'>
                            <div className='bangchung'>
                                <form action="" method="">
                                    <table className="bangchinh chuden">
                                        <tbody><tr>
                                            <th>
                                                <p className="phantucon">Tên quyền</p>
                                            </th>
                                            <th>
                                                <p className="phantucon">Xem</p>
                                            </th>
                                            <th>
                                                <p className="phantucon">Thêm</p>
                                            </th>
                                            <th>
                                                <p className="phantucon">Sửa</p>
                                            </th>
                                            <th>
                                                <p className="phantucon">Xóa</p>
                                            </th>
                                            <th>
                                                <p className="phantucon">Duyệt/Xác nhận</p>
                                            </th>
                                        </tr>
                                            <tr className="pq_tieuchi">
                                                <td className="text-left chuden font-medium">Quản lý tiêu chí đánh giá</td>
                                                <td><input className="wh16 select" type="checkbox" name="tc_danhgia" value="1" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="tc_danhgia" value="2" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="tc_danhgia" value="3" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="tc_danhgia" value="4" /></td>
                                                <td></td>
                                            </tr>
                                            <tr className="pq_kiemtra">
                                                <td className="text-left chuden font-medium">Quản lý đề kiểm tra năng lực</td>
                                                <td><input className="wh16 select" type="checkbox" name="tc_danhgia" value="1" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="tc_danhgia" value="2" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="tc_danhgia" value="3" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="tc_danhgia" value="4" /></td>
                                                <td></td>
                                            </tr>
                                            <tr className="pq_kehoach">
                                                <td className="text-left chuden font-medium">Quản lý kế hoạch đánh giá </td>
                                                <td><input className="wh16 select" type="checkbox" name="kehoach" value="1" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="kehoach" value="2" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="kehoach" value="3" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="kehoach" value="4" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="kehoach" value="5" /></td>

                                            </tr>
                                            <tr className="pq_phieu">
                                                <td className="text-left chuden font-medium">Quản lý phiếu đánh giá</td>
                                                <td><input /*style="pointer-events: none;"*/ className="wh16 select" type="checkbox" name="phieu_danhgia" value="1" /></td>
                                                <td></td>
                                                <td></td>
                                                <td><input className="wh16 select" type="checkbox" name="phieu_danhgia" value="4" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="phieu_danhgia" value="5" /></td>

                                            </tr>
                                            <tr className="pq_ketqua">
                                                <td className="text-left chuden font-medium">Quản lý kết quả đánh giá</td>
                                                <td><input className="wh16 select" type="checkbox" name="ketqua" value="1" /></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="pq_lotrinh">
                                                <td className="text-left chuden font-medium">Lộ trình thăng tiến</td>
                                                <td><input className="wh16 select" type="checkbox" name="lotrinh" value="1" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="lotrinh" value="2" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="lotrinh" value="3" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="lotrinh" value="4" /></td>
                                                <td></td>
                                            </tr>

                                            <tr className="pq_quyen">
                                                <td className="text-left chuden font-medium">Phân quyền</td>
                                                <td><input className="wh16 select" type="checkbox" name="phanquyen" value="1" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="phanquyen" value="2" /></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="pq_caidatthangdiem">
                                                <td className="text-left chuden font-medium">Cài đặt thang điểm</td>
                                                <td><input className="wh16 select" type="checkbox" name="phanquyen" value="1" /></td>
                                                <td><input className="wh16 select" type="checkbox" name="phanquyen" value="2" /></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                        <div className="khoibutton_form top-25">
                                <div  className="btn close btn-nentrang-chuxanh br-5 vienxanh font-medium size-15 c-pointer btnhuy_phanquyen">
                                    Hủy
                                </div>
                                <div className="btn close btn-nenxanh-chutrang br-5 vienxanh font-medium size-15 c-pointer btnluu_phanquyen">
                                    Lưu
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
}