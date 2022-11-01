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
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(true));
  }, [searchValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };
  console.log('hello');
  const handleInput = (e) => {
    const value = e.target.value;
    if (value.trim() === '') {
      setSearchValue('');
    } else setSearchValue(value);
  };
  return (
    <TippyHeadless
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountsItem key={result.id} data={result} onClick={() => setShowResult(false)} />
            ))}
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
          onChange={(e) => handleInput(e)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
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
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')}>
          <HeaderSearchIcon width="2.4rem" height="2.4rem" />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
