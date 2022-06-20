import Footer from '../components/Footer';

function About() {
  return <h1 className="content">About</h1>;
}

export default About;

About.getLayout = (page) => (
  <>
    {page}
    <Footer />
  </>
);

// 해당페이지에는 Footer만 보인다
