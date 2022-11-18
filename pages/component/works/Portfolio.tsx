
import React, { useState } from 'react';

const Portfolio = (props:any) => {
    // console.log(props)
    return (
        <li onClick={() => {props.handlePopToggle(props.modalImage, props.index)}}>
            <img src={props.src} alt="" />
        </li>
    )
}

export default Portfolio
