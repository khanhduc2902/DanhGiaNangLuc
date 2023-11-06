import React, { useState } from 'react';
import Image from 'next/image';
import icon_so from '@/public/assets/img/icon_so.png'
import Link from 'next/link';

const searchArray = ['CÂU HỎI ĐÁNH GIÁ NHÂN VIÊN MỚI ĐẾN CHO KINH DOANH',
    'Đề đánh giá năng lực nhân viên 8/7/2022',
    'Đề đánh giá năng lực nhân viên 12/7/2022',
    'Đề đánh giá năng lực nhân viên 15/7/2022',
    'Đề đánh giá năng lực nhân viên 15/7/2022',
    'Đề đánh giá năng lực nhân viên 15/7/2022',
    'ĐỀ KIÊM TRA ĐẦU VÀO NGÀY 19/7/2022',
    'ĐÁNH GIÁ NHÂN VIÊN ĐẦU VÀO NGÀY 19/7/2022 - Hải Yến',
    'ĐỀ ĐÁNH GIÁ NĂNG LỰC VIỆT ANH  ',
    'Đề kiểm tra đánh giá năng lực ngày 22/7/2022',
    'Đề đánh giá năng lực ngày 25/7/2022 ',
    'Đề kiểm tra năng lực nhân viên ngày 29/7',
    'Đề đánh giá năng lực nhân viên Nguyễn Hữu Khánh',
    'Đề đánh giá năng lực nhân viên Lại Văn Sơn Biên tập',
    'Đề kiểm tra năng lực ngày 2/8 ',
    'Đề đánh giá năng lực nhân viên Nguyễn Minh Vương',
    'Đề đánh giá năng lực nhân viên 03/8',
    'Đề đánh giá năng lực nhân viên 03/8',
    'Đánh giá năng lực ngày 23/9 ']
const DanhGiaNangLuc = () => {
    const [keHoach, setKeHoach] = useState('Tìm kiếm theo tên kế hoạch đánh giá')
    const [searchQueryKH, setSearchQueryKH] = useState('');
    const [filteredDataKH, setFilteredDataKH] = useState(searchArray);
    const handleSearchKH = (query: string) => {
        const filteredResults = searchArray.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredDataKH(filteredResults);
    };
    const handleInputChangeKH = (event: any) => {
        setSearchQueryKH(event.target.value);
        handleSearchKH(event.target.value);
    };
    const [onOfKh, setOnOffKh] = useState(true)
    const [onstation, setOnstation] = useState(true)
    const handleOnStation = () => {
        setOnstation(!onstation)
        setOnOffKh(true)

    }
    return (
        <div>
            <div className="them_danhgia_buoc2" id="lo4" >
                <div className="body_them_kehoach" >
                    <div className='max-[600px]:flex-col flex justify-center sm:items-center'>
                        <div className='w-60'>
                            <h4 className="font_ss16 font_wB mr_10 color-blue">Đề đánh giá năng lực:</h4>
                        </div>
                        
                        <div className="search-qlnv justify-between">
                            <div className="khoi_left">
                                <div className="leftsearch select_no_muti ql_tieuchi_m">

                                    <span className="select2 select2-container select2-container--default select2-container--below select2-container--open width_check100" dir="ltr" data-select2-id="select2-data-4-plru"><span className="selection">
                                        <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="true" tabIndex={0} aria-disabled="false" aria-labelledby="select2--container" aria-controls="select2--container" aria-owns="select2--results">
                                            <span className="select2-selection__rendered" id="select2--container" role="textbox" aria-readonly="true" title="Tìm kiếm theo tên kế hoạch đánh giá" onClick={() => { setOnOffKh(!onOfKh); setOnstation(true) }}>
                                                {keHoach}
                                            </span>
                                            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                                        <span className={onOfKh ? 'hidden' : `${"dropdown-wrapper"} ${"relative z-20 flex justify-center "}`} >
                                            <ul id="" className={`${'absolute w-full bg-slate-100  py-2 mb-2 overflow-y-scroll h-52 snap-y border-b border-x border-slate-400 rounded-b-lg'} ${'displaynone_scroll'}`} >
                                                <li className='mx-2 mb-1'><input type='search' className='py-1 border-solid border outline-none border-slate-400 rounded-none' onChange={handleInputChangeKH} value={searchQueryKH} /></li>
                                                {
                                                    filteredDataKH.map((item: any, index: number) => {
                                                        return (
                                                            <li key={index} className='cursor-pointer hover:bg-blue-400 hover:text-white p-1 text-sm py-2' onClick={() => {
                                                                setKeHoach(item);
                                                                setOnOffKh(!onOfKh)
                                                            }}>{item}
                                                            </li>
                                                        )

                                                    })
                                                }
                                            </ul>
                                        </span>

                                    </span>
                                    <div className="img so_xoayt_138 absolute right-2">
                                        <Image src={icon_so} alt="Sổ xuống" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body_doituong body_doituong_nhan_danhgia overflow-x-auto">
                    <div className="khoibang po_r mb-5">
                        <div className="bangchung">
                            <table className="bangchinh ">

                                <tbody><tr>
                                    <th>
                                        <p className="phantucon">STT</p>
                                    </th>
                                    <th>
                                        <p className="phantucon">Tên tiêu chí</p>
                                    </th>
                                    <th>
                                        <p className="phantucon">Thang điểm</p>
                                    </th>
                                </tr>


                                </tbody>

                                <tbody className="tc_dcchon2 " >
                                    <tr className="">
                                        <td>
                                            <p>1</p>
                                        </td>
                                        <td className="width_80">
                                            <div className="d_flex btn_soxuong">
                                                <p className="mr_10 font_w5">test1</p>
                                                <div className="img so_xoayt_138">
                                                    <Image src={icon_so} alt="Sổ xuống" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="font_w5">2</p>
                                        </td>
                                    </tr>
                                    
                                    
                                    <tr className="">
                                        <td>
                                            <p>4</p>
                                        </td>
                                        <td className="width_80">
                                            <div className="d_flex btn_soxuong">
                                                <p className="mr_10 font_w5">Tester 10</p>
                                                <div className="img so_xoayt_147">
                                                    <Image src={icon_so} alt="Sổ xuống" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="font_w5">2</p>
                                        </td>
                                    </tr>
                                    
                                    <tr className="">
                                        <td>
                                            <p>6</p>
                                        </td>
                                        <td className="width_80">
                                            <div className="d_flex btn_soxuong">
                                                <p className="mr_10 font_w5">Tester 13</p>
                                                <div className="img so_xoayt_149">
                                                    <Image src={icon_so} alt="Sổ xuống" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="font_w5">2</p>
                                        </td>
                                    </tr>
                                </tbody>

                                <tbody className="tc_TONGDIEM">

                                    <tr>
                                        <td colSpan={2}>
                                            <p className="text_a_l font_w5">Tổng điểm:
                                            </p>
                                        </td>
                                        <td className="tongdiem font_w5"></td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>

                    </div></div>
                    <div className="body_doituong body_doituong_nhan_danhgia overflow-x-auto">
                        <div className="header_d width_100">
                            <h4>Phân loại đánh giá</h4>
                        </div>
                        <div className="body width_100 set_overflow_auto">
                            <ul className="thongtin_tieuchi">
                                <li className="item">
                                    <p>Trung bình:</p>
                                    <p><span>0</span> <span className="mr_10 ml_14">-&gt;</span>
                                        <span>5</span>
                                    </p>
                                </li>
                                <li className="item">
                                    <p>Khá:</p>
                                    <p><span>6</span> <span className="mr_10 ml_14">-&gt;</span>
                                        <span>8</span>
                                    </p>
                                </li>
                                <li className="item">
                                    <p>Xuất sắc:</p>
                                    <p><span>9</span> <span className="mr_10 ml_14">-&gt;</span>
                                        <span>10</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DanhGiaNangLuc;