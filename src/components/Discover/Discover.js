import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { HashtagIcon, MusicIcon } from '../Icons';

import styles from './Discover.module.scss';

const cx = classNames.bind(styles);
function Discover() {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>Discover</p>
      <div className={cx('cover-list')}>
        <Link to="/" className={cx('cover-item')}>
          <HashtagIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
          <span>item</span>
        </Link>
        <Link to="/" className={cx('cover-item')}>
          <HashtagIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
          <span>item</span>
        </Link>
        <Link to="/" className={cx('cover-item')}>
          <MusicIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
          <span>item</span>
        </Link>
      </div>
    </div>
  );
}

export default Discover;
