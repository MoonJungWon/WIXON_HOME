import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css";

export default function FutureSlider() {
    var settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            vertical: true,
            verticalSwiping: true   
    };
   return(
        <Slider {...settings}>
            <div className="future__desc0 future__desc">
                <h4 data-aos="fade-up" data-aos-duration="1000">윅슨의 미래가치는 <span>예측하지 못할 만큼 거대합니다.</span></h4>
                <p className="future__big" data-aos="fade-up" data-aos-duration="2000">the future value of the wixon is huge so unpredictable.</p>
            </div>
            <div className="future__desc1 future__desc">
                <h4>윅슨의 가치는 아직 미미합니다. 그러나 윅슨은 큰 꿈을 꿉니다.</h4>
                <p className="future__big">
                    윅슨의 궁극적인 목표는 윅슨의 이름으로 연합된 회사들을 통해 최대의 매출과 이익을 만들어 내고 이를 통해 세상을 올바르게<br/>
                    변화시킬 수 있는 힘을 가진,  새로운 형태의 기업연합체<span>(WXN ALLIANCE)</span>를 목표로 합니다.
                </p>
                <p className="future__middle">WIXON's value is still insignificant. But wixon has a big dream.</p>
                <p className="future__small">
                    A service group that has no boundaries between online and offline. The ultimate goal is to create maximum sales and profits through<br/>
                    companies united in the name of WXN.<br/>
                    It aims to create a new type of corporate union(WXN ALLIANCE) that has the power to change the world correctly.
                </p>
            </div>
        </Slider>
   );
}