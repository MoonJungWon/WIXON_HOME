import HeadInfo from './HeadInfo';
import Header from './Header';
import Footer from './Footer';

 const Layout = ({children}: any) => {
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

  export default Layout;