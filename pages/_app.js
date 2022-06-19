import '../styles/globals.css';
// global style이 이 파일에 import 해서 적용되어 있다.
// 그래서 모든 페이지에 적용된다
import 'bootstrap/dist/css/bootstrap.min.css';
// using bootstrap class

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
