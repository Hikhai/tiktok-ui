// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import AccountPreview from './AcountPreview';
import { Fragment } from 'react';

const cx = classNames.bind(styles);
function AccountItem({ preview }) {
  const Comp = preview ? AccountPreview : Fragment;
  return (
    <Comp>
      <div className={cx('account-item')}>
        <Image
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668873600&x-signature=ujASOsvSeopr242ucMf0JWvqWO4%3D"
          alt=""
        />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>datvilla</strong>
            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
          </p>
          <p className={cx('name')}>đạt vi la</p>
        </div>
      </div>
    </Comp>
  );
}

export default AccountItem;
