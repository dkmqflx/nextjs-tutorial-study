import 'styles/globals.css';
import 'styles/layout.css';
import Navbar from '../components/Navbar';
import '../components/Navbar.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}

// 모든 페이지에 header와 footer가 적용되어 있다

export default MyApp;
