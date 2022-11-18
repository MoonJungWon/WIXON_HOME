import Link from 'next/link';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Header(){
    useEffect(() => {
        AOS.init();
      })
    if(process.browser){
        let mainlogo = document.getElementById("logo");
        mainlogo.addEventListener('mouseover', function() {
            this.querySelector('img').setAttribute('src', "/img/fulllogo.png");
        });
        mainlogo.addEventListener('mouseout', function() {
            this.querySelector('img').setAttribute('src', "/img/logo.png");
        });
        addEventListener('mousewheel', (e) => {
            const direction = e.deltaY > 0 ? "-1" : "1";;
            if(direction=="1"){
                closefooter();
            }
            else{
                openfooter();
            }
        });
        function busilink(e){
            var whatbusi = e.currentTarget.getAttribute('data-subtab');
            setTimeout(function(){
                var busitab = businesstab.childNodes;
                busitab.forEach(busitabs => {
                    busitabs.classList.remove('busact');
                });
                switch(whatbusi){
                    case 'marine' :
                        window.scrollTo(0, 0);
                        bustab_ma.classList.add('busact');
                        break;
                    case 'opus' :
                        window.scrollTo(0, 1800);
                        bustab_op.classList.add('busact');
                        break;
                    case 'webbase' :
                        window.scrollTo(0, 5000);
                        bustab_we.classList.add('busact');
                        break;
                }
            }, 100);
        }
        document.getElementById('bus_mar').addEventListener('click', busilink);
        document.getElementById('bus_opu').addEventListener('click', busilink);
        document.getElementById('bus_web').addEventListener('click', busilink);
    }
    function openfooter(){
        let footeraction = document.querySelector(".mainfooter");
        footeraction.style.display= "block";
        footeraction.style.animation="footershow 0.5s ease";
        footeraction.style.bottom = "0";
    }
    function closefooter(){
        let footeraction = document.querySelector(".mainfooter");
        footeraction.style.animation= "footerhide 0.5s ease";
        footeraction.style.bottom = "-500px";
        setTimeout(function() {
            footeraction.style.display = "none";
        }, 500);
    }
    function clickgnb(e){
        let footer = document.querySelector(".footer");
        let nor_footer = document.querySelector(".normal__footer");
        let headerback = document.querySelector(".header__inner__back");
        var gnbchilds = gnb.childNodes
        gnbchilds.forEach(gnbchild => {
            gnbchild.classList.remove('actnav');
        });
        e.currentTarget.classList.add('actnav');
        footer.classList.add('disnone');
        nor_footer.classList.remove('disnone');
        headerback.classList.add('headback');
    }
    function openfullmenu(){
        let fullmenu = document.querySelector(".fullmenu");
        fullmenu.style.display= "block";
        fullmenu.style.animation="fullmenuopen 0.5s ease";
        fullmenu.style.left = "0";
    }
    function clicklogo(){
        var gnbchilds = gnb.childNodes
        gnbchilds.forEach(gnbchild => {
            gnbchild.classList.remove('actnav');
        });
        let footer = document.querySelector(".footer");
        let nor_footer = document.querySelector(".normal__footer");
        let headerback = document.querySelector(".header__inner__back");
        footer.classList.remove('disnone');
        nor_footer.classList.add('disnone');
        headerback.classList.remove('headback');
    }
    function closefullmenu(){
        let fullmenu = document.querySelector(".fullmenu");
        fullmenu.style.animation= "fullmenuclose 0.5s ease";
        fullmenu.style.left = "100vw";
        setTimeout(function() {
            fullmenu.style.display = "none";
        }, 500);
    }
    function clickfullgnb(e){
        let footer = document.querySelector(".footer");
        let nor_footer = document.querySelector(".normal__footer");
        let headerback = document.querySelector(".header__inner__back");
        var gnbchilds = gnb.childNodes
        gnbchilds.forEach(gnbchild => {
            gnbchild.classList.remove('actnav');
        });
        var whatgnb = e.currentTarget.getAttribute('data-tab');
        switch(whatgnb){
            case 'gnbInc' :
                gnbInc.classList.add('actnav');
                break;
            case 'gnbBusiness' :
                gnbBusiness.classList.add('actnav');
                break;
            case 'gnbWorks' :
                gnbWorks.classList.add('actnav');
                break;
            case 'gnbContact' :
                gnbContact.classList.add('actnav');
                break;
        }
        footer.classList.add('disnone');
        nor_footer.classList.remove('disnone');
        headerback.classList.add('headback');
    }
    return (
        <header className="header">
            <div className="header__inner__back">
                <div className="header__inner">
                    <h1 id="logo"><Link href="/" onClick={clicklogo}><img src="/img/logo.png" alt="WIXON" /></Link></h1>
                    <p className="menu__btn" onClick={openfullmenu}><img src="/img/menu.png" alt="menu list" /></p>
                    <nav>
                        <ul id="gnb" className="gnb">
                            <li id="gnbInc" onClick={clickgnb}><Link href="/Inc">WIXON ASSOCIATES INC</Link></li>
                            <li id="gnbBusiness" onClick={clickgnb}><Link href="/Business">WXN BUSINESS</Link></li>
                            <li id="gnbWorks" onClick={clickgnb}><Link href="/works">WORKs</Link></li>
                            <li id="gnbContact" onClick={clickgnb}><Link href="/Contact">CONTACT TO WXN</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="fullmenu">
                <div className="fullmenu__inner">
                    <div className="full__header">
                        <h2><Link href="/" onClick={()=>{clicklogo(), closefullmenu()}}><img src="/img/fulllogo.png" alt="WIXON" /></Link></h2>
                        <p className="closebtn" onClick={closefullmenu}><img src="/img/close.png" alt="close full menu" /></p>
                    </div>
                    <div className="fullmenu__all">
                        <div className="full__gnb">
                            <ul>
                                <li>
                                    <p>01</p>
                                    <div>
                                        <h3 onClick={clickfullgnb} data-tab="gnbInc"><Link href="/Inc" onClick={closefullmenu}>WIXON ASSOCIATES INC</Link></h3>
                                        <ol>
                                            <li onClick={clickfullgnb} data-tab="gnbInc"><Link href="/Inc" onClick={closefullmenu}>WIXON ASSOCIATES INC</Link></li>
                                            <li onClick={clickfullgnb} data-tab="gnbInc"><Link href="/Future" onClick={closefullmenu}>wixon Future Value</Link></li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <p>02</p>
                                    <div>
                                        <h3 onClick={clickfullgnb} data-tab="gnbBusiness"><Link href="/Business" onClick={closefullmenu}>WXN BUSINESS</Link></h3>
                                        <ol>
                                            <li id="bus_mar" onClick={clickfullgnb} data-tab="gnbBusiness" data-subtab="marine"><Link href="/Business" onClick={closefullmenu}>developing specialized marine solutions</Link></li>
                                            <li id="bus_opu" onClick={clickfullgnb} data-tab="gnbBusiness" data-subtab="opus"><Link href="/Business" onClick={closefullmenu}>OPUSCLAM</Link></li>
                                            <li id="bus_web" onClick={clickfullgnb} data-tab="gnbBusiness" data-subtab="webbase"><Link href="/Business" onClick={closefullmenu}>Web-based Service</Link></li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <p>03</p>
                                    <div>
                                        <h3 onClick={clickfullgnb} data-tab="gnbWorks"><Link href="/Works" onClick={closefullmenu}>WORKs</Link></h3>
                                    </div>
                                </li>
                                <li>
                                    <p>04</p>
                                    <div>
                                        <h3 onClick={clickfullgnb} data-tab="gnbContact"><Link href="/Contact" onClick={closefullmenu}>CONTACT TO WXN</Link></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="full__info">
                            <div className="full__desc">
                                <h3>contact WXN</h3>
                                <p className="full__tel">02-3141-1305  / 1306</p>
                                <p className="full__email">cser@wixon.co.kr / wixon@wixon.co.kr</p>
                                <p className="full__address">서울시 마포구 동교로 215-1 한사 스튜디오 406 (주)윅슨어소시에이츠</p>
                                <ul>
                                    <li><img src="/img/sns0.png" alt="facebook" /></li>
                                    <li><img src="/img/sns1.png" alt="youtube" /></li>
                                </ul>
                            </div>
                            <div className="full__logo">
                                <img src="/img/menu_logo.png" alt="WIXON" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="disnone openfooter" onClick={openfooter}></button>
            <button className="disnone closefooter" onClick={closefooter}></button>
        </header>
    )
}
