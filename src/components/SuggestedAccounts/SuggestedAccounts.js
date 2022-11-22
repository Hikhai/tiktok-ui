import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, all, data = [], seeAll, isPreview }) {
  console.log('SuggestedAccounts render');
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {data.map((account) => (
        <AccountItem key={account.id} data={account} isPreview={isPreview} />
      ))}{' '}
      <div className={cx('more-btn')} onClick={seeAll}>
        <p>{all ? 'See less' : 'See all'}</p>
      </div>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
