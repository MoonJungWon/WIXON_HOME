import Link from 'next/link';

export default function Footer(){
    return (
        <>
            <footer id="footer" className="footer">
                <div id="mainfooter" className="mainfooter">
                    <div className="footer__info">
                        <div>
                            <p>
                                TEL 02-3141-1305  / 1306    E-mail  cser@wixon.co.kr  /  기업부설연구소 제 2021154317호
                            </p>
                            <address>
                                서울시 마포구 동교로 215-1 한사 스튜디오 406 (주)윅슨어소시에이츠 / #406 , HANSA Studio, 215-1, Donggyo-ro, Mapo-gu, Seoul,  Korea 
                            </address>
                        </div>
                        <div>
                            <p>
                                &copy;wixon associates Inc. 2022
                            </p>
                            <p>
                                wixon. Who Invariable eXistence On the New era " wixon associates Inc. "
                            </p>
                        </div>
                    </div>
                    <div className="footer__gnb">
                        <div className="footer__gnb__inner">
                            <h2 className="footer__logo">
                                <img src="/img/footer_logo.png" alt="WIXON" />
                            </h2>
                            <ul>
                                <li>
                                    <Link href="http://opusclam.com/" target="_blank">
                                        <img src="/img/opusclam.png" alt="OPUSCLAM" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://lpstock.co.kr/" target="_blank">
                                        <img src="/img/lpstock.png" alt="LPSTOCK" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <footer id="normal__footer" className="normal__footer disnone">
                <div className="footer__gnb">
                    <h2 className="footer__logo">
                        <img src="/img/footer_logo.png" alt="WIXON" />
                    </h2>
                    <div className="footer__info">
                        <div>
                            <p>
                                TEL 02-3141-1305  / 1306    E-mail  cser@wixon.co.kr  /  기업부설연구소 제 2021154317호
                            </p>
                            <address>
                                서울시 마포구 동교로 215-1 한사 스튜디오 406 (주)윅슨어소시에이츠 / #406 , HANSA Studio, 215-1, Donggyo-ro, Mapo-gu, Seoul,  Korea 
                            </address>
                        </div>
                        <div>
                            <p>
                                &copy;wixon associates Inc. 2022
                            </p>
                            <p>
                                wixon. Who Invariable eXistence On the New era " wixon associates Inc. "
                            </p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link href="http://opusclam.com/" target="_blank">
                                <img src="/img/opusclam.png" alt="OPUSCLAM" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://lpstock.co.kr/" target="_blank">
                                <img src="/img/lpstock.png" alt="LPSTOCK" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
        
    );
}