import 'styles/globals.css';
import 'styles/layout.css';
import Navbar from '../components/Navbar';
import '../components/Navbar.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  console.log({ pageProps });
  return (
    <SessionProvider session={session}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

// 모든 페이지에 header와 footer가 적용되어 있다

export default MyApp;

// pageProps ?
// https://nextjs.org/docs/advanced-features/custom-app
