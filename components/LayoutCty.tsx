import React,{ Children, ReactNode } from 'react';
import Navbar from './Navbar';
interface Props {
    children?: ReactNode
    // any props that come into the component
}
const LayoutCty = ({children} : Props) => {
    return (
        <div>
            <div id="trangchu_sdn">
                <div className="wapper">
                        <div className="d_flex">
                            <div className={`${"sidebar"}`}>
                                <Navbar title={1}/>
                            </div>
                            <main>{children}</main>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutCty;