
import React, { useState } from 'react';

export const Portfolio = (props:any) => {
    // console.log(props)
    return (
        <li onClick={() => {props.handlePopToggle(props.modalImage, props.index)}}>
            <img src={props.src} alt="" />
        </li>
    )
}
