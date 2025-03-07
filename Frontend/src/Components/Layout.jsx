import Navbar from './Navbar'
import Footer from './Footer'
import Sidemenu from './Sidemenu';
const Layout = ({children}) => {
  return (
    <>
      <div className="lg:hidden">
        <Sidemenu />
      </div>

      <div className="hidden lg:block">
        <Navbar />
      </div>
     
        {children}
       

      <Footer />
    </>
  );
}

export default Layout