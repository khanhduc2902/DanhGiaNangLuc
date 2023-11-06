import React, { useState } from 'react';
import Image from 'next/image';
import ep_logo from '@/public/assets/img/user.png'
import cong from '@/public/assets/img/cong.png'
import close from '@/public/assets/img/close.png'
import search from '@/public/assets/img/kinhlup.png'
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
const NguoiDanhGia = () => {
    /* Tat ca phong ban */
    const [keHoach, setKeHoach] = useState('Tất cả phòng ban')

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
    /* Tim kiem theo nhan vien */
    const [keHoach1, setKeHoach1] = useState('Tìm kiếm theo tên nhân viên')

    const [searchQueryKH1, setSearchQueryKH1] = useState('');
    const [filteredDataKH1, setFilteredDataKH1] = useState(searchArray);
    const handleSearchKH1 = (query: string) => {
        const filteredResults = searchArray.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredDataKH1(filteredResults);
    };
    const handleInputChangeKH1 = (event: any) => {
        setSearchQueryKH1(event.target.value);
        handleSearchKH1(event.target.value);
    };
    const [onOfKh1, setOnOffKh1] = useState(true)
    const [onstation1, setOnstation1] = useState(true)

    /* pop up Danh sasch nhan vien */ 
    const [PopUp,setPopUp] =useState(true)
    const handelPopUp = () =>{
        setPopUp(!PopUp);
    }
    

    return (
        <>
            <div className='d_flex width_100 space_b align_c color_blue mb-5'>
                <div className='flex'>
                    <div className='thiet_lap d_flex mr-4'>
                        <p className="color_blue font_wB font_ss16">Đối tượng nhận đánh giá</p>
                    </div>
                    <div className='container_thietlap'>
                        <div className='d_flex align_c mr_30'>
                            <input placeholder='a' type="radio" name="drone" value="1" className="mr_5 check_dm" checked={true} />
                            <label >Nhân viên </label>
                        </div>
                    </div>
                </div>

                <div className='nhanvien'>
                    <div className='d_flex align_c themmoi_nguoi cursor_p' onClick={handelPopUp}>
                        <div className='img'>
                            <Image src={cong} alt='dau cong' />
                        </div>
                        <p className="font_s14 font_w5">Thêm nhân viên</p>
                    </div>
                </div>
            </div>
            <div className="nhanvien  ">
                <div className="body_doituong body_doituong_nhan_danhgia mb_20 overflow-x-auto">
                    <div className="khoibang">

                        <div className="bangchung" id="bang_chung">
                            <table className="bangchinh set_minwidth0">
                                <tbody><tr>

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
                                        <p className="phantucon">Chức năng</p>
                                    </th>
                                </tr>

                                    <tr className="nv_danhgia show_trc">

                                        <td>
                                            <p className="chungchung">943501</p>

                                        </td>
                                        <td>
                                            <div className="d_flex align_c">
                                                <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                <p>Cong Tien Test</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text_a_l">phòng IT</p>
                                        </td>
                                        <td>
                                            <p className="text_a_l">Nhân viên chính thức</p>
                                        </td>
                                        <td>Xóa</td>
                                    </tr>
                                    <tr className="nv_danhgia show_trc">

                                        <td>
                                            <p className="chungchung">440277</p>

                                        </td>
                                        <td>
                                            <div className="d_flex align_c">
                                                <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                <p>Trần Ngọc Minh Đức</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text_a_l">phòng nhân sự</p>
                                        </td>
                                        <td>
                                            <p className="text_a_l">Trưởng nhóm</p>
                                        </td>
                                        <td>Xóa</td>
                                    </tr>

                                </tbody></table>
                        </div>
                    </div>
                </div>
                <div className='d_flex width_100 space_b align_c color_blue mb-5'>
                    <div className='flex'>
                        <div className='thiet_lap d_flex mr-4'>
                            <p className="color_blue font_wB font_ss16">Người đánh giá:</p>
                        </div>

                    </div>

                    <div className='nhanvien'>
                        <div className='d_flex align_c themmoi_nguoi cursor_p' onClick={handelPopUp}>
                            <div className='img'>
                                <Image src={cong} alt='dau cong' />
                            </div>
                            <p className="font_s14 font_w5">Thêm người đánh giá</p>
                        </div>
                    </div>
                </div>
                <div className="body_doituong body_doituong_nhan_danhgia mb_20 overflow-x-auto">
                    <div className="khoibang">

                        <div className="bangchung" id="bang_chung">
                            <table className="bangchinh set_minwidth0">
                                <tbody><tr>

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
                                        <p className="phantucon">Chức năng</p>
                                    </th>
                                </tr>

                                    <tr className="nv_danhgia show_trc">

                                        <td>
                                            <p className="chungchung">943501</p>

                                        </td>
                                        <td>
                                            <div className="d_flex align_c">
                                                <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                <p>Cong Tien Test</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text_a_l">phòng IT</p>
                                        </td>
                                        <td>
                                            <p className="text_a_l">Nhân viên chính thức</p>
                                        </td>
                                        <td>Xóa</td>
                                    </tr>
                                    <tr className="nv_danhgia show_trc">

                                        <td>
                                            <p className="chungchung">440277</p>

                                        </td>
                                        <td>
                                            <div className="d_flex align_c">
                                                <Image className="wh26_ra right-10" src={ep_logo} alt="Người tạo" />
                                                <p>Trần Ngọc Minh Đức</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text_a_l">phòng nhân sự</p>
                                        </td>
                                        <td>
                                            <p className="text_a_l">Trưởng nhóm</p>
                                        </td>
                                        <td>Xóa</td>
                                    </tr>

                                </tbody></table>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${'popup popup_680 popup_them_phong_nv_1 themnguoi_dg '} ${PopUp ? '' : 'block'}`}>
                <div className='container'>
                    <div className='content set_height630px'>
                        <div className='popup_header'>
                            <h4 className='name_header'>
                                Danh sách nhân viên
                            </h4>
                            <div className='img close_popup' onClick={handelPopUp}>
                                <Image src={close} alt='dau x' />
                            </div>
                        </div>
                        <div className='popup_body'>
                            <div className='select_no_muti'>
                                <span className="select2 select2-container select2-container--default select2-container--below select2-container--open width_check100" dir="ltr" data-select2-id="select2-data-4-plru"><span className="selection">
                                    <span className="select2-selection select2-selection--single set_rounded" role="combobox" aria-haspopup="true" aria-expanded="true" tabIndex={0} aria-disabled="false" aria-labelledby="select2--container" aria-controls="select2--container" aria-owns="select2--results">
                                        <span className="select2-selection__rendered" id="select2--container" role="textbox" aria-readonly="true" title="Tìm kiếm theo tên kế hoạch đánh giá" onClick={() => { setOnOffKh(!onOfKh); setOnstation(true) }}>
                                            {keHoach}
                                        </span>
                                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                                    <span className={onOfKh ? 'hidden' : `${"dropdown-wrapper"} ${"relative z-20 flex justify-center "}`} >
                                        <ul id="" className={`${'absolute w-full bg-slate-100  py-2 mb-2 overflow-y-scroll h-52 snap-y border-b border-x border-slate-400 rounded-b-lg'} ${'displaynone_scroll'}`} >
                                            <li className='mx-2 mb-1'><input placeholder='a' type='search' className='py-1 w-full border-solid border outline-none border-slate-400 rounded-none' onChange={handleInputChangeKH} value={searchQueryKH} /></li>
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
                            </div>
                            <div className='select_no_muti'>
                                <span className="select2 select2-container select2-container--default select2-container--below select2-container--open width_check100" dir="ltr" data-select2-id="select2-data-4-plru"><span className="selection">
                                    <span className="select2-selection select2-selection--single set_rounded" role="combobox" aria-haspopup="true" aria-expanded="true" tabIndex={0} aria-disabled="false" aria-labelledby="select2--container" aria-controls="select2--container" aria-owns="select2--results">
                                        <span className="select2-selection__rendered" id="select2--container" role="textbox" aria-readonly="true" title="Tìm kiếm theo tên kế hoạch đánh giá" onClick={() => { setOnOffKh1(!onOfKh1); setOnstation1(true) }}>
                                            {keHoach1}
                                        </span>
                                        <span className="absolute right-2 top-2" role="presentation"><Image src={search} alt='search' /><b role="presentation"></b></span></span></span>
                                    <span className={onOfKh1 ? 'hidden' : `${"dropdown-wrapper"} ${"relative z-20 flex justify-center "}`} >
                                        <ul id="" className={`${'absolute w-full bg-slate-100  py-2 mb-2 overflow-y-scroll h-52 snap-y border-b border-x border-slate-400 rounded-b-lg'} ${'displaynone_scroll'}`} >
                                            <li className='mx-2 mb-1'><input placeholder='a' type='search' className='py-1 w-full border-solid border outline-none border-slate-400 rounded-none' onChange={handleInputChangeKH1} value={searchQueryKH1} /></li>
                                            {
                                                filteredDataKH1.map((item: any, index: number) => {
                                                    return (
                                                        <li key={index} className='cursor-pointer hover:bg-blue-400 hover:text-white p-1 text-sm py-2' onClick={() => {
                                                            setKeHoach1(item);
                                                            setOnOffKh1(!onOfKh1)
                                                        }}>{item}
                                                        </li>
                                                    )

                                                })
                                            }
                                        </ul>
                                    </span>

                                </span>
                            </div>
                            <form  className='mt-5'>
                                <div className="body_doituong body_doituong_nhan_danhgia mb_20 overflow-x-auto">
                                    <div className="khoibang">
                                        <div className="bangchung overflow-y-auto set_height630px">
                                            <table className="bangchinh set_minwidth0">
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            <p className="phantucon">STT</p>
                                                        </th>
                                                        <th>
                                                            <p className="phantucon">Tên nhân viên</p>
                                                        </th>
                                                        <th>
                                                            <p className="phantucon">Phòng ban</p>
                                                        </th>
                                                        <th>
                                                            <p className="phantucon">Chức vụ</p>
                                                        </th>
                                                        <th className='w-12'>
                                                            <input placeholder='a' type="checkbox" className="checktong" />
                                                        </th>
                                                    </tr>
                                                    {
                                                        searchArray.map((item: any, index : number) =>(
                                                            <tr key={index}>
                                                                <td>
                                                                    <p>{index}</p>
                                                                </td>
                                                                <td>
                                                                    <p>943501 - Cong Tien Test</p>
                                                                </td>
                                                                <td>
                                                                    <p>phòng IT</p>
                                                                </td>
                                                                <td>

                                                                    <p>Nhân viên chính thức</p>
                                                                </td>
                                                                <td>
                                                                    <input placeholder='a' type="checkbox" className="checkcon un_check_con2_943501" value="943501" />
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_btn">
                                    <button className="btn btn_trang btn_140 mr_68 close_popup" type='button' onClick={handelPopUp}>Hủy</button>
                                    <button type="button" className="btn btn_xanh btn_140 close_popup js_done2" onClick={handelPopUp}>
                                        Hoàn thành
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default NguoiDanhGia;