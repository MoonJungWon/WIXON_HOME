
import React, { useState } from 'react';

export const Portfolio = (props:any) => {
    console.log(props)
    return (
        <li onClick={() => {props.handlePopToggle(props.modalImage.src)}}>
            <img src={props.src.src} alt="" />
        </li>
    )
}
