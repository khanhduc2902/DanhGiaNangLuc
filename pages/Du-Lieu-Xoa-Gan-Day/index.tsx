'use client'
import React from 'react';
import { useState } from 'react'
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import sao from '@/public/assets/img/sao.png'
import phitieu from '@/public/assets/img/phitieu.png'
import phieu from '@/public/assets/img/phieu.png'
import phieunho from '@/public/assets/img/phieunho.png'

const page = () => {
    
    return (
        <>
        <div className='main'>
        <Header />
        <div className="main_body">
                        <div className="dulieuxoa">
                            <p className="size-14 chuden bot-15 tieude1024">Dữ liệu đã xóa gần đây</p>
                            <div className="m_dl_xoa flex ">
                                <div className="xoa_con nentrang ">
                                    <div className="padding15">
                                        <div className="flex center-height bot-15">
                                            <div className="right-10">
                                                <Image src={sao} alt="tiêu chí đè đánh giá" />
                                            </div>
                                            <Link className="size-16 chuden font-medium"
                                                href="/Du-Lieu-Xoa-Gan-Day/Tieu-chi">Tiêu chí - Đề đánh giá</Link>
                                        </div>
                                        <div className="flex center-height">
                                            <p className="chudo font-bold right-5">1</p>
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
                                            <Link className="size-16 chuden font-medium"
                                                href="/Du-Lieu-Xoa-Gan-Day/Ke-hoach-danh-gia">Kế hoạch đánh giá</Link>
                                        </div>
                                        <div className="flex center-height">
                                            <p className="chudo font-bold right-5">8</p>
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
                                            <Link className="size-16 chuden font-medium"
                                                href="/Du-Lieu-Xoa-Gan-Day/Phieu-danh-gia">Phiếu đánh giá</Link>
                                        </div>
                                        <div className="flex center-height">
                                            <p className="chudo font-bold right-5">6</p>
                                            <p className="size-14 chuden">Phiếu đánh giá đã xóa</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xoa_con nentrang ">
                                    <div className="padding15">
                                        <div className="flex center-height bot-15 ">
                                            <div className="right-10">
                                                <Image src={phieunho} alt="tiêu chí đè đánh giá" /> 
                                            </div>
                                            <Link className="size-16 chuden font-medium" href="/Du-Lieu-Xoa-Gan-Day/De-kiem-tra">Đề
                                                kiểm tra</Link>
                                        </div>
                                        <div className="flex center-height">
                                            <p className="chudo font-bold right-5">3</p>
                                            <p className="size-14 chuden">Đề kiểm tra đã xóa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </>
    );
};

export default page;