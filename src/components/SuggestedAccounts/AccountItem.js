// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import AccountPreview from './AcountPreview';

const cx = classNames.bind(styles);
function AccountItem({ data, isPreview }) {
  const Comp = isPreview ? AccountPreview : 'div';
  return (
    <div>
      <Tippy
        interactive
        offset={[-16, 4]}
        delay={[800, 400]}
        placement="bottom-start"
        render={(attrs) => isPreview && <AccountPreview data={data} attrs={attrs} />}
      >
        <div className={cx('account-item')}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{data.nickname}</strong>
              {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
            </p>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
