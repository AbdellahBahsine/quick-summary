import styles from './Spinner.module.css';

const Spinner = () => (
  <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
    <span className={styles.loader}></span>
  </div>
);

export default Spinner;