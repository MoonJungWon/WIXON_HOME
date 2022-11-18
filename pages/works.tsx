
import React, { useState, useRef, useEffect  } from 'react';
import Portfolio from './component/works/Portfolio';
import HeadInfo from '../src/component/HeadInfo'
export default function Works() {
    const [data, setData] = useState([
        {id : 0, toggle :false, src : '/images/list01.png', modalImage : '/images/view01.jpg'},
        {id : 1, toggle :false, src : '/images/list02.png', modalImage : '/images/list02.png'},
        {id : 2, toggle :false, src : '/images/list03.png', modalImage : '/images/view01.jpg'},
        {id : 3, toggle :false, src : '/images/list04.png', modalImage : '/images/list04.png'},
        {id : 4, toggle :false, src : '/images/list05.png', modalImage : '/images/view01.jpg'},
        {id : 5, toggle :false, src : '/images/list06.png', modalImage : '/images/list06.png'},
        {id : 6, toggle :false, src : '/images/list07.png', modalImage : '/images/view01.jpg'},
        {id : 7, toggle :false, src : '/images/list08.png', modalImage : '/images/list08.png'},
        {id : 8, toggle :false, src : '/images/list09.png', modalImage : '/images/view01.jpg'},
    ])
    console.log(data)
    const [popToggle, setPopToggle] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalIndex, setModalIndex] = useState(0);
    
    const handlePrev = () => {
        if(modalIndex == 0 ) {
            setModalImage(data[data.length - 1].modalImage)
            setModalIndex(data.length - 1)
        }else{
            setModalImage(data[modalIndex - 1].modalImage)
            setModalIndex(modalIndex-1)
        }
    }
    const handleNext = () => {
        if(modalIndex == data.length - 1 ) {
            setModalImage(data[0].modalImage)
            setModalIndex(0)
        }else{
            setModalImage(data[modalIndex + 1].modalImage)
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
            <HeadInfo titleProps="WXN WORKs" />
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
                <>
                    <div className='works-popup'> 3
                        <div className="view-img">
                            <button><img src="/images/close_btn.png" onClick={() => {setPopToggle(!popToggle)}}/></button>
                            <img src={modalImage} alt="" />
                        </div>
                        <div className="view-btn">
                            <span onClick={() => {handlePrev()}}><img src="/images/prev_btn.png" alt="prev_btn" /></span>
                            <span onClick={() =>{handleNext()}}><img src="/images/next_btn.png" alt="next_btn" /></span>
                        </div>
                    </div>
                    <div className="glass"></div>
                </>
            }
        </>
        
        
    )
}
