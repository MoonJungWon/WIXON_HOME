import React from "react";
import Sliderr from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

export default function IncSlider() {
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
        <Sliderr {...settings}>
            <div className="inc__desc0 inc__desc">
                <h4 data-aos="fade-up" data-aos-duration="1000">2002년 웹에이전시로 시작한 "<span className="h4__eng">wixon associates Inc.</span>"<span className="h4__small">는</span></h4>
                <p className="inc__big" data-aos="fade-up" data-aos-duration="1500">
                    회사의 외형을 확장하고 직원을 늘리는 것에는 관심이 없습니다.  윅슨은 각 구성원이 스스로의 가치를 발견하고<br/>
                    최고의 능력을 발휘할 수 있도록 지원하기 위해 노력하고 있습니다.
                </p>
                <p className="inc__middle" data-aos="fade-up" data-aos-duration="2000">Wixon Associates Inc. started as a web agency in 2002.</p>
                <p className="inc__small" data-aos="fade-up" data-aos-duration="2500">
                    We are not interested in expanding the appearance of the company and increasing the number of employees.<br/>
                    Wixon associates Inc. is<br/>
                    committed to helping each member discover their values and demonstrate their best abilities.
                </p>
            </div>
            <div className="inc__desc1 inc__desc">
                <h4>우리는 당장의 능력을 중요하게 생각하지 않습니다.</h4>
                <p className="inc__big">
                    다만 일에 대한 진지한 접근, 전문성,책임감 그리고 회사를 구성하는 다른 분야의 이해와 원할한 협업이 가능하도록 기회를 제공하고<br/>
                    지원하고 있습니다.<br/>
                    또한 회사의 비전을 모든 구성원들과 공유함으로써, 더 나은 세상을 만들기위해 사회적 책임을 다하는 회사가 되도록<br/>
                    노력하고 있습니다.
                </p>
                <p className="inc__middle">We don't value the immediate capabilities of company members.</p>
                <p className="inc__small">
                    However, we provide and support opportunities for serious access to work, professionalism, responsibility,<br/>
                    and understanding and smooth collaboration in other areas of the company.<br/>
                    By sharing the company's vision with all its members, we strive to become a company that<br/>
                    fulfills our social responsibilities to create a better world.
                </p>
            </div>
            <div className="inc__desc2 inc__desc">
                <h4>
                    최고의 가치를 추구하며 가장 정직하고 가장 신뢰받는 회사,<br/>
                    구성원에게 인정받을 수 있는 회사. 
                </h4>
                <p className="inc__big">
                    WIXON Associates inc. 의 목표입니다.
                </p>
                <p className="inc__middle">
                    The company that pursues the best value, the most honest and trusted company, and the company that<br/>
                    can be recognized by its members.<br/><br/>
                    It is the goal of the WIXON Associates INC.
                </p>
                <p className="inc__small">
                    wixon, Who Invariable eXistence On the New era  " wixon associates Inc."
                </p>
            </div>
        </Sliderr>
   );
}