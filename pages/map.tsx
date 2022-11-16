import React, { useState, useRef  } from 'react';
export default function Map() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <h2 className="sub-title">title</h2>
            <div className='map-page'>
                <button onClick={() => {setToggle(!toggle)}}>클릭하면 생기고 사라진다.</button>
                <div>
                    wxn 20sdasdasda
                    asdfasdf
                </div>
                <div>
                    asdasd asdasd asdasda asdasd
                </div>
                <div>
                    지도 영역
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