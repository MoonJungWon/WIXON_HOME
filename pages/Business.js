import HeadInfo from '../src/component/HeadInfo';

export default function Business() {
    if(process.browser){
        var wherescroll = document.querySelector('html').scrollTop;
        addEventListener('mousewheel', (e) => {
            wherescroll = document.querySelector('html').scrollTop;
            setTimeout(() => {
                console.log(wherescroll); 
            }, 100);
            
        });
    }
    function gototop(e){
        var butab = businesstab.childNodes;
        butab.forEach(butabs => {
            butabs.classList.remove('busact');
        });
        e.currentTarget.classList.add('busact');
        var whatbus = e.currentTarget.getAttribute('data-tab');
        switch(whatbus){
            case 'marine' :
                window.scrollTo(0, 0);
                break;
            case 'opus' :
                window.scrollTo(0, 1800);
                break;
            case 'webbase' :
                window.scrollTo(0, 5000);
                break;
        }
    }
    return (
    <>
        <HeadInfo titleProps="WXN BUSINESS" />
        <div id="business" className="business">
            <div className="marine">
                <div className="marine__back"><img src="/img/mar_2.png"/></div>
                <div className="marine__desc">
                    <h3 data-aos="fade-right">marine solutions</h3>
                    <h4 data-aos="fade-up" data-aos-duration="3000">
                        윅슨은 기존 웹에이전시 사업에서 한걸음 더 나아가 전문적인 해양 IT솔루션 개발<br/>
                        사업을 진행하고 있습니다.
                    </h4>
                    <p className="marine__big" data-aos="fade-up" data-aos-duration="3000">
                        전 세계 해양운송 서비스 관련분야에서 오랜 경험을 쌓아온 전문가들과 협업하여 글로벌 해양시장에 IT기술을 활용한 전문적인 해양 솔루션을 개발하고 있습니다.<br/>
                        위성신호및 빅데이터등을 기반으로 하여 전세계 화물, 선박 및 항구에 대한 예측이 가능하고 신뢰할 수 있는 데이터를 제공할 수 있는 알고리즘을 개발하여 이를 통해 국내 뿐만 아니라<br/>
                        전 세계 해양물류의 미래 흐름을 미리 예측할 수 있는 예측모델 솔루션을 개발하고 있습니다.
                    </p>
                    <p className="marine__middle" data-aos="fade-up" data-aos-duration="3000">
                        wixon is taking a step further from the simple web agency business and is<br/>
                        working on a  professional IT marine solution development project.
                    </p>
                    <p className="marine__small" data-aos="fade-up" data-aos-duration="3000">
                        In collaboration with experts who have long experience in marine transport services around the world, We are developing specialized marine solutions<br/>
                        using IT technology in the global marine market.Utilize satellite signals and big data to provide predictable and reliable data for cargo, ships and<br/>
                        ports around the world by developing a solution Through this, we are developing a prediction model<br/>
                        that can predict the flow of marine logistics not only in Korea but also around the world.
                    </p>
                </div>
                <div className="marine__bottom__img" data-aos="flip-up">
                    <img src="/img/mar_0.png"/>
                </div>
                <p className="marine__downarrow"><img src="/img/inc_arrow.png"/></p>
            </div>
            <div className="opus">
                <div className="opus__back">
                    <img src="/img/opu_3.png"/>
                </div>
                <div className="opus__intro">
                    <h3 data-aos="fade-right" data-aos-offset="300">classic specialist opusclam</h3>
                    <h4 data-aos="fade-up" data-aos-duration="3000">윅슨은 고전음악과 관련한 포털 플랫폼 <b>OPUSCLAM</b>을 개발하고 있습니다.</h4>
                    <p className="opus__intro__big" data-aos="fade-up" data-aos-duration="3000">
                        오퍼스클램은 고전음악과 연관된 모든 데이터, 온라인교육, 취업서비스, 다양한 온라인판매 서비스등 고전음악과 관련한 모든 서비스를  망라한 고전음악 전문 플랫폼입니다.<br/>
                        전공자뿐만 아니라 전문 연주자 그리고 음악애호가에게 IT를 기반으로 하는 전문적이고 체계적인 고전음악 솔루션을 제공합니다.
                    </p>
                    <div className="opus__middle__img">
                        <img src="/img/opu_2.png"/>
                    </div>
                    <p className="opus__intro__middle" data-aos="fade-up" data-aos-duration="3000">
                        OPUSCLAM<br/>
                        WIXON is developing a portal platform OPUSCLAM related to classical music.
                    </p>
                    <p className="opus__intro__small" data-aos="fade-up" data-aos-duration="3000">
                        The Opusclam covers all services related to classical music, including all data related to classical music, online education, employment services,<br/>
                        and various online sales services,It is a platform specializing in classical music.<br/>
                        It provides IT-based, professional classical music solutions to professional performers and music lovers as well as majors.
                    </p>
                    <p className="opus__intro__last" data-aos="fade-up" data-aos-duration="3000">Classic Specialist OPUSCLAM.</p>
                </div>
                <div className="opus__desc">
                    <h3 data-aos="fade-up" data-aos-duration="3000">국내 최초 순수음악 전문 포털 플랫폼 오퍼스클램 <span>OPUSCLAM.COM</span></h3>
                    <p className="opus__desc__big" data-aos="fade-up" data-aos-duration="3000">
                        각 분야의 순수음악 전공자들이 전공을 심화하는데에 집중할 수 있도록 정확한 최신의 정보와 향후 진로등을 미리 예측, 계획할수 있는 전문 플랫폼을 제공합니다.<br/>
                        순수음악전공자들에게 실제적인 경제적 기반을 마련할 수 있는 관련업종의 취업기회 및 정보 제공및  소셜펀딩 등을 통해 순수음악인에게 실질적 경제적 지원이  가능한 플랫폼을 제공합니다.<br/>
                        전문연주자,교육자,관련업종등에서 활발하게 활동하고 있는 종사자들의 질 높은 온라인 교육 컨텐츠를 제공함으로써  온라인 상의 수준높은 교육 기회를 제공합니다.<br/>
                        순수음악전공자/실연자,음악애호가 간에 원할한 정보유통, 다양하고 활발한 커뮤니티가 가능한 플랫폼을 제공합니다.<br/>
                        순수음악 전공자/실연자에게 필요한 모든 서비스( 악기관련,교육관련,공연(연주)관련,홍보, 기타 모든 서비스)가  포괄적으로 제공되는  플랫폼을 제공합니다.<br/>
                        순수음악전공자의 학부모 측면에서 향후 진로, 교육, 유학 등 전반적인 사항에 대해 전문 컨설팅을 받을 수 있는  전문적 플랫폼을 제공합니다.
                    </p>
                    <div className="opus__middle__chart">
                        <h4 data-aos="flip-right" data-aos-duration="2000" data-aos-offset="300">opusclam service</h4>
                        <ul>
                            <li>
                                <p className="opus__chart__img" data-aos="flip-up" data-aos-offset="300" data-aos-duration="2000"><img src="/img/opu_4.png"/></p>
                                <h5 data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000">DATABASE</h5>
                                <b data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000">국내외의 순수음악관련 DATABASE 서비스</b>
                                <span data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000">
                                    DATABASE service related to pure music<br/>
                                    at home and abroad.
                                </span>
                                <p className="opus__chart__cate" data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000">OC DATABASE</p>
                                <p className="opus__right__line"></p>
                            </li>
                            <li>
                                <p className="opus__chart__img" data-aos="flip-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="300"><img src="/img/opu_5.png"/></p>
                                <h5 data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="300">커뮤니티</h5>
                                <b data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="300">회원간의 다양하고 활발한 정보교류</b>
                                <span data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="300">
                                    Various and active information exchange<br/>
                                    among members.
                                </span>
                                <p className="opus__chart__cate" data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="300">OC COMMUNITY</p>
                                <p className="opus__right__line"></p>
                            </li>
                            <li>
                                <p className="opus__chart__img" data-aos="flip-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="600"><img src="/img/opu_6.png"/></p>
                                <h5 data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="600">정보SPOT</h5>
                                <b data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="600">순수음악 관련 다양한 국내외 최신정보제공</b>
                                <span data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="600">
                                    Provide the latest information<br/>
                                    related to pure music at home and abroad.
                                </span>
                                <p className="opus__chart__cate" data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="600">INFOMATION SPOT</p>
                                <p className="opus__right__line"></p>
                            </li>
                            <li>
                                <p className="opus__chart__img" data-aos="flip-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="900"><img src="/img/opu_7.png"/></p>
                                <h5 data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="900">레슨:ON</h5>
                                <b data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="900">회원 전용. 온라인 동영상 레슨, 동영상 강의</b>
                                <span data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="900">
                                    For members only.<br/>
                                    Online video lesson, video lecture.
                                </span>
                                <p className="opus__chart__cate" data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="900">LESSON : ON</p>
                                <p className="opus__right__line"></p>
                            </li>
                            <li>
                                <p className="opus__chart__img" data-aos="flip-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="1200"><img src="/img/opu_8.png"/></p>
                                <h5 data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="1200">리쿠르트</h5>
                                <b data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="1200">순수음악에 특화된 구인/구직 서비스</b>
                                <span data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="1200">Recruit service specialized in pure music.</span>
                                <p className="opus__chart__cate" data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000" data-aos-delay="1200">OC RECRUIT</p>
                            </li>
                        </ul>
                    </div>
                    <p className="opus__desc__middle" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300">OPUSCLAM, Korea's first portal platform specializing in pure music, OPUSCLAM.COM</p>
                    <p className="opus__desc__small" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300">
                        It provides a professional platform that allows pure music majors in each field to predict and plan accurate latest information and future careers in advance so that<br/>
                        they can focus on deepening their majors. We will provide job opportunities and information in related industries that can lay a practical economic foundation for pure music majors<br/>
                        and grow into a platform that enables continuous practical economic support for pure musicians through social funding in the future.<br/>
                        It provides high-quality online educational content for professional performers, educators, and related industries,<br/>
                        providing high-quality educational opportunities online. It provides a platform that enables smooth information distribution and diverse and active communities<br/>
                        among pure music majors/performers.<br/>
                        It provides a platform that comprehensively provides all necessary services for pure music majors/performers (instrument-related, education-related,<br/>
                        performance-related, promotion, and all other services).<br/>
                        It provides a professional platform for parents of pure music majors to receive professional consulting on overall matters such as future career,<br/>
                        education, and study abroad.
                    </p>
                </div>
                <div className="opus__bottom__img" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="300">
                    <img src="/img/opu_1.png"/>
                    <img src="/img/opu_9.png"/>
                </div>
                <p className="opus__downarrow"><img src="/img/inc_arrow.png"/></p>
            </div>
            <div className="webbase">
                <div className="webbase__desc">
                    <h3 data-aos="fade-right">Web-based Service</h3>
                    <h4 data-aos="fade-up" data-aos-duration="3000">윅슨은 웹에이전시를 기반으로 시작된 회사로 다양한 형태의 웹기반 서비스를 제공합니다.</h4>
                    <p className="webbase__big" data-aos="fade-up" data-aos-duration="3000">
                        다양한 형태의 웹사이트 개발 및 디자인, 모바일/앱개발등 웹을 기반으로 하는 통합서비스를 제공합니다. ㈜윅슨어소시에이츠의 체계적인 개발방법론과 브랜딩에 입각한<br/>
                        <span>sensibility e-business model</span>을 제시합니다.
                    </p>
                    <p className="webbase__middle" data-aos="fade-up" data-aos-duration="3000">wixon is a company founded on Web Agencies. It offers a wide variety of web-based services.</p>
                    <p className="webbase__small" data-aos="fade-up" data-aos-duration="3000">
                        It provides web-based integrated services such as various types of website development and design, and mobile/app development. We present a sensibility e-business model<br/>
                        based on the systematic development methodology and branding of wixon Associates Inc.
                    </p>
                </div>
                <div className="webbase__chart">
                    <div className="webbase__chart__info" data-aos="fade-right" data-aos-duration="2000">
                        <h3>wixon associates inc. integration service</h3>
                        <div className="web__chart__inner">
                            <p className="web__halfline web__line__bottom"></p>
                            <ul className= "web__line__top">
                                <li className="web__line__bottom">
                                    <div className="web__half">
                                        <p className="web__line__bottom"></p>
                                        <p className="web__line__left"></p>
                                    </div>
                                    <div className="web__infozone">
                                        <h4>Brand Identity Development</h4>
                                        <p>
                                            Building Brand Identity and<br/>
                                            Corporate Identity<br/>
                                            Style Guide
                                        </p>
                                    </div>
                                </li>
                                <li className="web__line__bottom">
                                    <div className="web__half web__line__left">
                                        <p className="web__line__bottom"></p>
                                    </div>
                                    <div className="web__infozone">
                                        <h4>Site Planning</h4>
                                        <p>
                                            Strategy Development<br/>
                                            Marketing Strategy<br/>
                                            Contents Design<br/>
                                            Information Architecture 
                                        </p>
                                    </div>
                                </li>
                                <li className="web__line__bottom">
                                    <div className="web__half web__line__left">
                                        <p className="web__line__bottom"></p>
                                    </div>
                                    <div className="web__infozone">
                                        <h4>Interaction Design</h4>
                                        <p>
                                            User Interface<br/>
                                            Interaction Design<br/>
                                            Multimedia Design
                                        </p>
                                    </div>
                                </li>
                                <li className="web__line__bottom">
                                    <div className="web__half">
                                        <p className="web__line__bottom web__line__left"></p>
                                    </div>
                                    <div className="web__infozone">
                                        <h4>Web / mobile</h4>
                                        <p>
                                            HTML, DHTML<br/>
                                            xml,ajax,JQuery<br/>
                                            Java Script Development<br/>
                                            mssql,mysql<br/>
                                            Python / React<br/>
                                            Asp,php 
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="webbase__plan web__line__left">
                        <p className="webback"><img src="/img/web_0.png"/></p>
                        <div className="webbase__design" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                            <h5>Identity interaction design</h5>
                            <p>
                                E-business model 제시<br/>
                                Web identity program<br/>
                                Contents Planning<br/>
                                U.I 화면 설계<br/>
                                Interaction Design<br/>
                                HTML, Flash Development
                            </p>
                        </div>
                        <div className="webbase__development" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                            <h5>Creative Programing</h5>
                            <p>
                                System Design &amp; Analysis<br/>
                                웹 솔루션 개발<br/>
                                웹 프로그래밍<br/>
                                프로모션 툴 개발<br/>
                                호스팅 대행 및 유지 보수
                            </p>
                        </div>
                        <div className="webbase__contents" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                            <h5>Creative Contents</h5>
                            <p>
                                온라인 컨텐츠 개발<br/>
                                음악관련 포털 컨텐츠 개발<br/>
                                컨텐츠 기획/조정<br/>
                                컨텐츠 가공
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ol id="businesstab" className="business__tab">
                <li id="bustab_ma" className="busact" onClick={gototop} data-tab="marine">marine solutions</li>
                <li id="bustab_op" onClick={gototop} data-tab="opus">OPUSCLAM</li>
                <li id="bustab_we" onClick={gototop} data-tab="webbase">Web-based Service</li>
            </ol>
        </div> 
    </>
  )
}