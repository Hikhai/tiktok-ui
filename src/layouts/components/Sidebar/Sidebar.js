import classNames from 'classnames/bind';

import SuggestedAccounts from '~/components/SuggestedAccounts';
import Menu from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu />
      <SuggestedAccounts label="Suggested accounts" more="See all" />
      <SuggestedAccounts label="Following accounts" more="See more" preview={false} />
    </aside>
  );
}

export default Sidebar;
