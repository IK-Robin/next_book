import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script';
import '../styles/globals.scss';
import Footer from './container/[footer]';
import Navbar from './Navbar/index';
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="undefined" crossOrigin="anonymous" />
function MyApp({ Component, pageProps }) {

  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>

  </>
}

export default MyApp
