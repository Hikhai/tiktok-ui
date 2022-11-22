import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <h2>HOme page</h2>
    </div>
  );
}

export default Home;
