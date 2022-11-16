import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icons }) {
  const { Icon, IconActive } = icons;

  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to} end>
      <Icon className={cx('icon')} />
      <IconActive className={cx('icon-active')} />
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icons: PropTypes.object.isRequired,
};

export default MenuItem;
