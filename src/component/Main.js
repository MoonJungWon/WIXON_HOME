import Link from 'next/link';

export default function Main(){
    
    return (
        <>
            <div className="mainvisual">
                <ul className="visual">
                    <li>
                        <div>
                            <h3>
                                윅슨은 각 구성원이 스스로의 가치를 발견하고 최고의 능력을 발휘할 수<br/> 
                                있도록 지원하기 위해 노력하고 있습니다.
                            </h3>
                            <p>
                                Wixon associates Inc. is committed to helping each member discover their values&nbsp; and demonstrate<br/>
                                their best abilities.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>
                                우리는 윅슨의 이름으로 연합된 회사들을 통해  세상을 올바르게 변화<br/>
                                시킬 수 있는  새로운 형태의 기업연합체를 목표로 합니다.
                            </h3>
                            <p>
                                WXN's goal is to change the world correctly through companies united in WXN's name, We aim for<br/>
                                a new type of corporate union.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="file__zone">
                    <p>
                        <span>YEAR OF WXN 1, THE BEGINNING OF ANOTHER DECADE.</span>
                        <Link href="/company.pdf" target="_blank">
                            <b><img src="./img/arrow_right.png" alt="WIXON" /></b>
                            <i><img src="./img/file_ico.png" alt="WIXON" /></i>
                        </Link>
                    </p>
                </div>
                <div className="banner">
                    <ul className="banner__inner">
                        <li className="bnr__0">
                            <p className="bnr__num">01</p>
                            <div className="bnr__back bnr__back0">
                                <div className="bnr__desc">
                                    <p className="acc bnr__unact">-</p>
                                    <p className="acc bnr__act">+</p>
                                    <p className="bnr__unact">글로벌 해양시장에 IT기술을 활용한<br/>전문적인 해양 솔루션 개발</p>
                                    <p className="bnr__act">
                                        글로벌 해양시장에서 IT기술을 기반으로 한 빅데이터를 활용하여<br/>
                                        해양자원의 미래를 예측할 수 있는 전문적인 해양 솔루션을<br/>
                                        개발하고 있습니다.
                                    </p>
                                    <p className="bnr__en">marine solutions<br/>using IT technology</p>
                                </div>
                                <div className="bnr__img">
                                    <img src="./img/bn0_ico.png" alt="back_img" />
                                </div>
                            </div>
                        </li>
                        <li className="bnr__1">
                            <p className="bnr__num">02</p>
                            <div className="bnr__back bnr__back1">
                                <div className="bnr__desc">
                                    <p className="acc bnr__unact">-</p>
                                    <p className="acc bnr__act">+</p>
                                    <p className="bnr__unact">IT를 기반으로 하는 전문적이고 체계적인<br/>고전음악 솔루션 제공</p>
                                    <p className="bnr__act">
                                        IT를 기반으로 AI와 빅데이터를 활용한 전문적이고 체계적인 개인화된 국내 최고의<br/>
                                        고전음악 솔루션을 제공합니다. 또한 양질의 각 분야별 순수음악관련<br/>
                                        정보를 제공합니다.
                                    </p>
                                    <p className="bnr__en">OPUSCLAM<br/>Classic music Specialist</p>
                                </div>
                                <div className="bnr__img">
                                    <img src="./img/bn1_ico.png" alt="back_img" />
                                </div>
                            </div>
                        </li>
                        <li className="bnr__2">
                            <p className="bnr__num">03</p>
                            <div className="bnr__back bnr__back2">
                                <div className="bnr__desc">
                                    <p className="acc bnr__unact">-</p>
                                    <p className="acc bnr__act">+</p>
                                    <p className="bnr__unact">웹사이트 개발 및 디자인, 모바일/앱개발등<br/>웹을 기반으로 하는 통합서비스를 제공</p>
                                    <p className="bnr__act">
                                        웹에이전시로 시작한 (주)윅슨어소시에이츠는<br/>
                                        웹사이트 개발 및 디자인, 모바일/앱개발등과 같은 웹을 기반으로 하는<br/>
                                        모든 개발업무를 서비스 하고 있습니다.
                                    </p>
                                    <p className="bnr__en">Web-based Service<br/>Development</p>
                                </div>
                                <div className="bnr__img">
                                    <img src="./img/bn2_ico.png" alt="back_img" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}