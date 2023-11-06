

import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import './global.css'
import '@/public/assets/css/styleTrangChu.css';
import '@/public/assets/css/dat.css';
import '@/public/assets/css/saitama.css'
import '@/public/assets/css/select2.min.css'
import '@/public/assets/css/style.css'
import '@/public/assets/css/tatsumaki.css'
import '@/public/assets/css/styleTrangChu.css'
import '@/public/assets/css/tieude.css'
import LayoutNv from '@/components/LayoutNv';
import LayoutCty from '@/components/LayoutCty';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '@/store';
export default function App({ Component, pageProps }: AppProps) {
  const [title, setTitle] = useState('');
  const router = useRouter()
  
  useEffect(() => {
    const storedData = sessionStorage.getItem("title");
    if (storedData) {
      setTitle(storedData);
    }
  }, [title]);
  const handleClick = (layout: string) => {
    setTitle(layout);
    router.push('/Trang-Chu')
    sessionStorage.setItem("title", layout);
    sessionStorage.setItem("arrayTieuChi",JSON.stringify([]))
  };
  return (
        <>
        <Provider store={store}>
          {
            title === '' ? (
              <>
              <button type='button' onClick={()=>handleClick('staff')} className='mr-10'>Tai khoan nhan vien</button>
              <button type='button' onClick={()=>handleClick('company')}>Tai khoan cong ty</button>
              </>
            ):(
              <>
              {
                (title === "staff") ? (
                  <LayoutNv>
                    <Component {...pageProps} title='staff' />
                  </LayoutNv>
                ) : (
                  <LayoutCty>
                    <Component {...pageProps} title='company'/>
                  </LayoutCty>
                )
              }
              </>

            )
            
          }
          </Provider>
        </>
           
        
        
    
    )
}