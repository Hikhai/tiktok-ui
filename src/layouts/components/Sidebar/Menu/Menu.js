import classNames from 'classnames/bind';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  BigMovieIcon,
  BigMovieActiveIcon,
} from '~/components/Icons';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);
function Menu() {
  return (
    <nav className={cx('wrapper')}>
      <MenuItem title="For You" to={config.routes.home} icons={{ Icon: HomeIcon, IconActive: HomeActiveIcon }} />
      <MenuItem
        title="Following"
        to={config.routes.following}
        icons={{ Icon: UserGroupIcon, IconActive: UserGroupActiveIcon }}
      />
      <MenuItem title="LIVE" to={config.routes.live} icons={{ Icon: BigMovieIcon, IconActive: BigMovieActiveIcon }} />
    </nav>
  );
}

export default Menu;
