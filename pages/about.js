// import styles from '../styles/About.module.css';
import styles from '../styles/About.module.scss';

function About() {
  return (
    <div>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-success">Success</button>
      {/* <h2 className={styles.highlight}>About Page</h2>; */}
      <h2 className={styles.highlightscss}>About Page</h2>;
    </div>
  );
}

export default About;
