import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import '../styles/layout.css';

function MyApp({ Component, pageProps }) {
  // Component.getLayout가 있는 경우 아래가 return 된다
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

// 모든 페이지에 header와 footer가 적용되어 있다

export default MyApp;
