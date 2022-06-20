import Head from 'next/head';
import Footer from '../components/layout/Footer';

// 필요한 head 태그 관련된 태그 추가할 수 있다
// 하지만 해당 페이지에만 적용된다

function About() {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="description" content="Free tutorials on web development" />
      </Head>
      <h1 className="content">About</h1>;
    </>
  );
}

export default About;

About.getLayout = (page) => (
  <>
    {page}
    <Footer />
  </>
);

// 해당페이지에는 Footer만 보인다
