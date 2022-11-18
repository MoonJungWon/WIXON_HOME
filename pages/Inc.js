import HeadInfo from '../src/conponent/HeadInfo';
import Link from 'next/link';
import IncSlider from '../src/conponent/IncSlider';

export default function Inc() {
  return (
    <>
        <HeadInfo title="WIXON ASSOCIATES INC" />
        <div className="inc">
          <div className="inc__content">
            <div className="inc__inner">
              <div className="inc__back"><img src="/img/inc_back0.png" alt=" "/></div>
              <h3 data-aos="fade-right">WIXON ASSOCIATES INC</h3>
              <IncSlider />
              <p className="inc__downarrow"><img src="/img/inc_arrow.png"/></p>
              <ol className="inc__tab">
                <li className='incact'><Link href="/Inc">wixon associates inc</Link></li>
                <li><Link href="/Future">wixon Future Value</Link></li>
              </ol>
            </div>
          </div>
        </div>
    </>
  )
}

