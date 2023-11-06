'use client';

import Navbar from '../Navbar';
import React, { useState, ChangeEvent } from 'react';
import imageP from '@/public/assets/js/PhieuDanhGia'
import Image from 'next/image';
import back from '@/public/assets/img/back.png';
import Link from 'next/link';
import chamhoi from '@/public/assets/img/chamhoi.png'


const searchName = ['Vũ Hoàng Anh', 'Nguyễn Viết Hoàng', 'Lê Tuấn Anh', 'Nguyễn Thị Hằng', 'Lại Đức Anh'];
const arrayNumber = ['2', '5', '10', '20', '50', '100']
const Page = () => {
    const [onOfKh, setOnOffKh] = useState(true)
    const handleOnOfKH = () => {
        setOnOffKh(!onOfKh);
        
    }
    const [pagination, setPagination] = useState(89)
     const [staff, setStaff] = useState('Tìm kiếm theo tiêu chí đánh giá')
    const [searchStaff, setSearchStaff] = useState('');
    const [filteredDataStaff, setFilteredDataStaff] = useState(searchName);
    const handleSearchStaff = (query: string) => {
        const filteredResults = searchName.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredDataStaff(filteredResults);
    };
    const handleInputChangeStaff = (event: any) => {
        setSearchStaff(event.target.value);
        handleSearchStaff(event.target.value);
    };

    const [hienThi, setHienThi] = useState('5')
    const [onOfHT, setOnOfHT] = useState(true)
    return (
        <div className='main'>
            <Navbar urlBack = '/Du-Lieu-Xoa-Gan-Day'/>
            <div className="main_body">
                <div className="tieuchidanhgia box-qlinhanvien">
                    <div className="tieude1024 size-14 flex center-height bot-15 lg:hidden">
                        <Link href="/Du-Lieu-Xoa-Gan-Day">
                            <div className="flex center-height right-10 c-pointer">
                                <Image src={back} alt="Quay lai" />
                            </div>
                            
                        </Link>
                        <p>Dữ liệu đã xóa gần đây / Tiêu chí đánh giá</p>
                    </div>
                    <div className="khoidanhmuc ">
                                <div className="khoidanhmuccon">
                                    <Link href="Tieu-chi" className="tendanhmuccon chuxanhdam size-14">Tiêu chí
                                        đánh giá</Link>
                                    <div className="border border-active"></div>
                                </div>
                                <div className="khoidanhmuccon">
                                    <Link href="Tieu-de" className="tendanhmuccon size-14">Đề đánh giá</Link>
                                    <div className="border "></div>
                                </div>
                            </div>
                    

                    <div className="search-qlnv">
                        <div className="khoi_left">
                            <div className="leftsearch select_no_muti ql_tieuchi_m">

                                <span className="select2 select2-container select2-container--default select2-container--below select2-container--open width_check100" dir="ltr" data-select2-id="select2-data-4-plru"><span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="true" tabIndex={0} aria-disabled="false" aria-labelledby="select2--container" aria-controls="select2--container" aria-owns="select2--results">
                                        <span className="select2-selection__rendered" id="select2--container" role="textbox" aria-readonly="true" title="Tìm kiếm theo tên kế hoạch đánh giá" onClick={handleOnOfKH}>
                                            {staff}
                                        </span>
                                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                                    <span className={onOfKh ? 'hidden' : `${"dropdown-wrapper"} ${"relative z-20 flex justify-center "}`} >
                                        <ul id="" className={`${'absolute w-full bg-slate-100  py-2 mb-2 overflow-y-scroll h-52 snap-y border-b border-x border-slate-400 rounded-b-lg'} ${'displaynone_scroll'}`} >
                                            <li className='mx-2 mb-1'><input type='search' className='outline-none py-1 border-solid border rounded-none border-slate-400' onChange={handleInputChangeStaff} value={searchStaff} /></li>
                                            {
                                                filteredDataStaff.map((item, index) => {
                                                    return (
                                                        <li key={index} className='cursor-pointer hover:bg-blue-400 hover:text-white p-1 text-sm py-2' onClick={() => {
                                                            setStaff(item);
                                                            setOnOffKh(!onOfKh)
                                                        }}>{item}
                                                        </li>
                                                    )

                                                })
                                            }
                                        </ul>
                                    </span>
                                </span>
                                <Image src={imageP.kinhlup} className="kinhlup right-position-15" alt="timkiem" />
                            </div>
                        </div>
                        <div className="rightsearch flex center-height">
                                    <div className="flex rightsearch_con2">
                                        <button className="hidden button btn-nentrang-chuxanh un-m-r center-height br-10 size-16 c-pointer tongso_xoavv">
                                            <p className=" chuxanh font-medium">
                                                Xóa vĩnh viễn
                                            </p>
                                        </button>
                                        <button className="hidden button nenxanh-chutrang un-m-r center-height br-10 size-16 c-pointer tongso_khoiphuc">
                                            <p className=" chutrang font-medium ">
                                                Khôi phục
                                            </p>
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
                    
                    <div className="khoibang po_r">
                        <div className="thanh_dk">
                            <div className={`${"turn turn_left"} `} id="scrollLeftButton">
                                <Image src={imageP.left} alt="sang trái" />
                            </div>
                            <div className=" turn turn_right" id="turn_right">
                                <Image src={imageP.right} alt="sang phải" />
                            </div>
                        </div>
                        <div className={`${"bangchung"} `} id="scrollableContent">
                            <table className={`${"bangchinh chuden"} ${""}`} >
                                <tbody><tr>
                                    <th className=''>
                                        <p className="phantucon">STT</p>
                                    </th>
                                    <th>
                                        <p className="phantucon">Tên tiêu chí</p>
                                    </th>
                                    <th>
                                        <p className="phantucon">Loại tiêu chí</p>
                                    </th>
                                    <th>
                                        <p className="phantucon">Thang điểm</p>
                                    </th>

                                    <th>
                                        <p className="phantucon">Người tạo</p>
                                    </th>
                                    <th>
                                        <p className="phantucon">Ngày xóa</p>
                                    </th>
                                    <th>
                                        <p className="phantucon">Chức năng</p>
                                    </th>
                                   
                                </tr>
                                </tbody><tbody className="show_apend">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
                                            
            <div className="flex max-[500px]:flex-col center-height space top-20">
                <div className=' max-[500px]:flex-col'>
                    <div className="flex center-height relative justify-center">
                        <p className="right-10"> Hiển thị:</p>
                        <div className="select_no_muti select_no_muti_chon">
                            <span className="select2 select2-container select2-container--default width_check100" dir="ltr" data-select2-id="select2-data-6-50ah" >
                                <span className="selection" onClick={() => setOnOfHT(!onOfHT)}>
                                    <span className={`${"select2-selection select2-selection--single"} ${'pl-4'}`} role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-chon_ban_ghi-container" aria-controls="select2-chon_ban_ghi-container">
                                        {hienThi}
                                        <span className="select2-selection__arrow" role="presentation">
                                            <b role="presentation">

                                            </b>

                                        </span>

                                    </span>
                                </span>
                                <span className="dropdown-wrapper" aria-hidden="true"></span></span>
                            <ul className={onOfHT ? 'hidden' : "absolute flex-col bg-white  border border-slate-400 px-1.5"}>
                                <li className='cursor-pointer'>
                                    <input type="search" className='w-16 outline-none border border-slate-400 my-1 px-1' />
                                </li>
                                {
                                    arrayNumber.map((item, index) => {
                                        return (
                                            <li onClick={(e) => { setHienThi(item); setOnOfHT(!onOfHT) }} key={index} className='cursor-pointer'>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <p className="chuden size-14">Tổng số: <span className="dem_so_pt">{pagination}</span> <span className="font-medium"> Phiếu đánh giá</span></p>
                </div>

                <div className="pagination_vippro">

                    <li className="active"><a rel="nofollow">1</a></li>
                    <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=2" className="">2</a></li>
                    <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=3" className="">3</a></li>
                    <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=4" className="">4</a></li>
                    <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=2" className=" next" title="Next page">&gt;</a></li>
                    <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=5" className=" notUndeline">...</a></li>
                    <li><a rel="nofollow" href="/quanly-phieudanhgia.html?page=9" className=" " title="Last page">&gt;&gt;&gt;</a></li>

                </div>
            </div>
        </div>
    );
};

export default Page;