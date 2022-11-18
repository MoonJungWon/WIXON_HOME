import React, { useState, useRef  } from 'react';
import HeadInfo from '../src/component/HeadInfo';
export default function Contact() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <HeadInfo titleProps="WXN CONTACT" />
            <div className='map-page'>
                <div>
                    <button onClick={() => {setToggle(!toggle)}}>PROJECT REQUEST</button>
                    <button>DOWNLOAD WXN PDF</button>
                </div>
                <h2 className="sub-title" data-aos="fade-right">CONTACT TO WXN</h2>
                <div>
                   <img src="" alt="" />
                </div>
                <div>
                    WIXON.WHO INVARIABLE EXISTENCE ON THE NEW ERA "WIXON ASSOCIATES INC."
                </div>
                <div>
                    <button>google map</button>
                    <button>naver map</button>
                </div>
            </div>

            {/* 팝업 엘리먼트 */}
            {
                toggle &&
                <>
                    <div className='map-page-popup'>
                        on!!!여기에 팝업엘리먼트 
                        <button onClick={() => {setToggle(!toggle)}}>닫기</button>
                    </div>
                    <div className="glass"></div>
                </>
            }
        </>
    )
}