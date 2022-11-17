
import React, { useState, useRef, useEffect  } from 'react';
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
        {id : 1, toggle :false, src : list02, modalImage : list02},
        {id : 2, toggle :false, src : list03, modalImage : view01},
        {id : 3, toggle :false, src : list04, modalImage : list04},
        {id : 4, toggle :false, src : list05, modalImage : view01},
        {id : 5, toggle :false, src : list06, modalImage : list06},
        {id : 6, toggle :false, src : list07, modalImage : view01},
        {id : 7, toggle :false, src : list08, modalImage : list07},
        {id : 8, toggle :false, src : list09, modalImage : view01},
    ])
    const [popToggle, setPopToggle] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalIndex, setModalIndex] = useState(0);
    
    const handlePrev = () => {
        if(modalIndex == 0 ) {
            setModalImage(data[data.length - 1].modalImage.src)
            setModalIndex(data.length - 1)
        }else{
            setModalImage(data[modalIndex - 1].modalImage.src)
            setModalIndex(modalIndex-1)
        }
    }
    const handleNext = () => {
        if(modalIndex == data.length - 1 ) {
            setModalImage(data[0].modalImage.src)
            setModalIndex(0)
        }else{
            setModalImage(data[modalIndex + 1].modalImage.src)
            setModalIndex(modalIndex+1)
        }
    }
    const handlePopToggle = (image:string, modalIndex:number) => {
        setPopToggle(!popToggle)
        setModalImage(image)
        setModalIndex(modalIndex)
    }

    return (
        <>
            <div className="works-page">
                <h2 className="sub-title" data-aos="fade-right">WORKs</h2>
                <ul>
                    {
                        data.map((item:any, i: number) => {
                            return (
                                <Portfolio 
                                    key={item.id} 
                                    index={i}
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
                        <span onClick={() => {handlePrev()}}><img src={prevBtn.src} alt="prev_btn" /></span>
                        <span onClick={() =>{handleNext()}}><img src={nextBtn.src} alt="next_btn" /></span>
                    </div>
                </div>
            }
        </>
        
        
    )
}
