import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountItem';
import { HeaderSearchIcon } from '~/components/icons';
import { useState, useEffect, useRef } from 'react';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3, 4, 5]);
    }, 0);
  }, []);

  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <TippyHeadless
      interactive
      visible={showResult && searchResult.length > 0}
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
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button>
            <FontAwesomeIcon
              className={cx('clear')}
              icon={faCircleXmark}
              onClick={() => {
                setSearchValue('');
                inputRef.current.focus();
                setSearchResult([]);
              }}
            />
          </button>
        )}
        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
        <button className={cx('search-btn')}>
          <HeaderSearchIcon width="2.4rem" height="2.4rem" />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
