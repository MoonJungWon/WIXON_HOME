import HeadInfo from './HeadInfo';
import Header from './Header';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <>
            <HeadInfo />
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    )
  }