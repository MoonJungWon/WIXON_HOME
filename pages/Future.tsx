import HeadInfo from '../src/conponent/HeadInfo';
import Link from 'next/link';
import FutureSlider from '../src/conponent/FutureSlider';

export default function Future() {
  return (
    <>
        <HeadInfo title="WIXON ASSOCIATES INC" />
        <div className="inc">
          <div className="inc__content">
            <div className="future__inner">
              <div className="future__back0"><img src="/img/inc_back2.png" alt=" "/></div>
              <div className="future__back1"><img src="/img/inc_back2.png" alt=" "/></div>
              <h3 data-aos="fade-right">wixon Future Value</h3>
              <FutureSlider />
              <p className="future__downarrow"><img src="/img/inc_arrow.png"/></p>
              <ol className="inc__tab">
                <li><Link href="/Inc">wixon associates inc</Link></li>
                <li className='incact'><Link href="/Future">wixon Future Value</Link></li>
              </ol>
            </div>
          </div>
        </div> 
    </>
  )
}