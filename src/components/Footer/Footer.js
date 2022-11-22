import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('list')}>
        <Link className={cx('item')} to="/">
          <span>About</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>Newsroom</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>Contact</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>Careers</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>ByteDance</span>
        </Link>
      </div>
      <div className={cx('list')}>
        <Link className={cx('item')} to="/">
          <span>About</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>Newsroom</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>Contact</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>Careers</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>ByteDance</span>
        </Link>
      </div>
      <div className={cx('list')}>
        <Link className={cx('item')} to="/">
          <span>About</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>Newsroom</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>Contact</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>Careers</span>
        </Link>
        <Link className={cx('item')} to="/">
          <span>ByteDance</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
