import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faSpinner, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
  HeaderProfileIcon,
  MessageIcon,
  HeaderSearchIcon,
  HeaderTiktokIcon,
  HeaderMovieIcon,
  HeaderSettingIcon,
  HeaderLogoutIcon,
  HeaderLangueIcon,
  HeaderQuestionIcon,
  HeaderBoardIcon,
} from '~/components/icons';
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
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([]);
  //   }, 0);
  // });
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
        <TippyHeadless
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button>
              <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <HeaderSearchIcon width="2.4rem" height="2.4rem" />
            </button>
          </div>
        </TippyHeadless>
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
