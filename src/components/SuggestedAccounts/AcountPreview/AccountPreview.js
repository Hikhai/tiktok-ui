// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ children }) {
  const handlePreview = (attrs) => (
    <div {...attrs}>
      <Wrapper className={cx('wrapper')}>
        <div className={cx('header')}>
          <Image
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668873600&x-signature=ujASOsvSeopr242ucMf0JWvqWO4%3D"
            alt=""
          />
          <Button primary className={cx('btn')}>
            Follow
          </Button>
        </div>
        <div className={cx('body')}>
          <a className={cx('nickname')}>
            <strong>theanh28entertainment</strong>
            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
          </a>
          <a className={cx('name')}>
            <strong>Theanh28 Entertainment</strong>
          </a>
          <div className={cx('parameter')}>
            <span className={cx('follow-count')}>8M</span>
            <span className={cx('follow')}>Follower</span>
            <span className={cx('like-count')}>580.3M</span>
            <span className={cx('like')}>Likes</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
  return (
    <div>
      <Tippy interactive offset={[-16, 4]} delay={[800, 400]} placement="bottom-start" render={handlePreview}>
        {children}
      </Tippy>
    </div>
  );
}

export default AccountPreview;
