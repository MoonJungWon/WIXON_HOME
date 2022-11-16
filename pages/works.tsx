
import React, { useState, useRef  } from 'react';
import { Portfolio } from './component/works/Portfolio';
import list01 from '../public/images/list01.png';
import list02 from '../public/images/list02.png';
import list03 from '../public/images/list03.png';
import list04 from '../public/images/list04.png';
import list05 from '../public/images/list05.png';
import list06 from '../public/images/list06.png';
import list07 from '../public/images/list07.png';
import list08 from '../public/images/list08.png';
import list09 from '../public/images/list09.png';
import closeBtn from '../public/images/close_btn.png';
import view01 from '../public/images/view01.jpg';
import nextBtn from '../public/images/next_btn.png';
import prevBtn from '../public/images/prev_btn.png';
import { handleClientScriptLoad } from 'next/script';



export default function Works() {
    const [data, setData] = useState([
        {id : 0, toggle :false, src : list01, modalImage : view01},
        {id : 1, toggle :false, src : list02, modalImage : view01},
        {id : 2, toggle :false, src : list03, modalImage : view01},
        {id : 3, toggle :false, src : list04, modalImage : view01},
        {id : 4, toggle :false, src : list05, modalImage : view01},
        {id : 5, toggle :false, src : list06, modalImage : view01},
        {id : 6, toggle :false, src : list07, modalImage : view01},
        {id : 7, toggle :false, src : list08, modalImage : view01},
        {id : 8, toggle :false, src : list09, modalImage : view01},
    ])
    const [popToggle, setPopToggle] = useState(false);
    const [modalImage, setModalImage] = useState('');
    
    // const handleCursorToggle = (id:number) => {
    //     const newData = data.map((item : any) => {
    //         return item.id == id ? {...item, toggle : !item.toggle} : item
    //     })
    //     console.log(newData)
    //     setData(newData)
    // }
    // const handleCursorOut = () => {
    //     const newData = data.map((item : any) => {
    //         return item.id == id ? {...item, toggle : !item.toggle} : item
    //     })
    //     console.log(newData)
    //     setData(newData)
    // }
    const handlePopToggle = (image:string) => {
        setPopToggle(!popToggle)
        setModalImage(image)
    }
    return (
        <>
            <div className="works-page">
                <h2 className="sub-title">WORKs</h2>
                <ul>
                    {
                        data.map((item) => {
                            return (
                                <Portfolio 
                                    key={item.id} 
                                    id={item.id} 
                                    src={item.src} 
                                    modalImage={item.modalImage}
                                    toggle={item.toggle}
                                    handlePopToggle={handlePopToggle}
                                />    
                            )
                        })
                    }    
                </ul>
            </div>
            {
                popToggle && 
                <div className='works-popup'>
                    <div className="view-img">
                        <button><img src={closeBtn.src} onClick={() => {setPopToggle(!popToggle)}}/></button>
                        <img src={modalImage} alt="" />
                    </div>
                    <div className="view-btn">
                        <a href=""><img src={prevBtn.src} alt="prev_btn" /></a>
                        <a href=""><img src={nextBtn.src} alt="next_btn" /></a>
                    </div>
                </div>
            }
        </>
        
        
    )
}
