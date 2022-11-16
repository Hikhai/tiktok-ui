import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import {
  BoardIcon,
  LanguageIcon,
  LogoutIcon,
  MovieIcon,
  ProfileIcon,
  QuestionIcon,
  MessageIcon,
  SettingIcon,
  TiktokIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <LanguageIcon width="2rem" height="2rem" />,
    title: 'English',
    children: {
      title: 'LanguageIcon',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng việt',
        },
      ],
    },
  },
  {
    icon: <QuestionIcon width="2rem" height="2rem" />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <BoardIcon width="2rem" height="2rem" />,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const currentUser = true;
  const handleMenuChange = (menuItem) => {};

  const userMenu = [
    {
      icon: <ProfileIcon width="2rem" height="2rem" />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <TiktokIcon width="2rem" height="2rem" />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <MovieIcon width="2rem" height="2rem" />,
      title: 'LIVE Studio',
      to: '/studio',
    },
    {
      icon: <SettingIcon width="2rem" height="2rem" />,
      title: 'SettingIcons',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon width="2rem" height="2rem" />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="TiktokIcon" />
        </Link>
        <Search />
        <div className={cx('actions')}>
          <Button text left={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          {currentUser ? (
            <>
              <div className={cx('currentUser')}>
                <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                  <button className={cx('action-btn')}>
                    <MessageIcon />
                  </button>
                </Tippy>
              </div>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/19bbc8911e34cf615f72050073851b94~c5_100x100.jpeg?x-expires=1667224800&x-signature=tIintavpNoXrqDXs2yAaTO7lBhA%3D"
                className={cx('user-avatar')}
                alt="nguyen van a"
              />
            ) : (
              <button className={cx('more-bnt')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
