import React, { Children, ReactNode } from 'react';
import Navbar from './Navbar';
interface Props {
  children?: ReactNode
  // any props that come into the component
}
export default function LayoutNv({ children }: Props) {
  return (
    <>
      <div id="trangchu_sdn">
        <div className="wapper">
          <div className="d_flex">

            <div className={`${"sidebar"}`}>
              <Navbar title={0} />
            </div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}

