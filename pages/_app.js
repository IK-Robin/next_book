import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script';
import { Navbar } from '../components';
import '../styles/globals.scss';
import Footer from './container/[footer]';
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="undefined" crossOrigin="anonymous" />
function MyApp({ Component, pageProps }) {

  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>

  </>
}

export default MyApp
