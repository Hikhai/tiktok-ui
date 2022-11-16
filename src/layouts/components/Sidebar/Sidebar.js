import classNames from 'classnames/bind';
import Menu from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu />
    </aside>
  );
}

export default Sidebar;
