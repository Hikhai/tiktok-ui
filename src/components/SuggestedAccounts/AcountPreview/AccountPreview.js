// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Wrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ attrs, data }) {
  return (
    <div {...attrs}>
      <Wrapper className={cx('wrapper')}>
        <div className={cx('header')}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
          <Button primary className={cx('btn')}>
            Follow
          </Button>
        </div>
        <div className={cx('body')}>
          <a className={cx('nickname')}>
            <strong>{data.nickname}</strong>
            {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
          </a>
          <a className={cx('name')}>
            <strong>{data.first_name + ' ' + data.last_name}</strong>
          </a>
          <div className={cx('parameter')}>
            <span className={cx('follow-count')}>{data.followers_count}</span>
            <span className={cx('follow')}>Follower</span>
            <span className={cx('like-count')}>{data.likes_count}</span>
            <span className={cx('like')}>Likes</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default AccountPreview;
