import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Button from '~/components/Button';
import {
  HeaderBoardIcon,
  HeaderLangueIcon,
  HeaderLogoutIcon,
  HeaderMovieIcon,
  HeaderProfileIcon,
  HeaderQuestionIcon,
  MessageIcon,
  HeaderSettingIcon,
  HeaderTiktokIcon,
} from '~/components/icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <HeaderLangueIcon width="2rem" height="2rem" />,
    title: 'English',
    children: {
      title: 'Language',
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
    icon: <HeaderQuestionIcon width="2rem" height="2rem" />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <HeaderBoardIcon width="2rem" height="2rem" />,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const currentUser = true;
  const handleMenuChange = (menuItem) => {
    // switch (menuItem.type) {
    //   case 'language':
    //     // Handle Language type
    //     break
    //   default
    //   break
    // }
  };

  const userMenu = [
    {
      icon: <HeaderProfileIcon width="2rem" height="2rem" />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <HeaderTiktokIcon width="2rem" height="2rem" />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <HeaderMovieIcon width="2rem" height="2rem" />,
      title: 'LIVE Studio',
      to: '/studio',
    },
    {
      icon: <HeaderSettingIcon width="2rem" height="2rem" />,
      title: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <HeaderLogoutIcon width="2rem" height="2rem" />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok-logo" />
        </div>
        <Search />
        <div className={cx('actions')}>
          <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
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
