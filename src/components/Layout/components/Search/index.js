import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountItem';
import { HeaderSearchIcon } from '~/components/icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchSevices';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounce = useDebounce(searchValue, 700);
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    const fetApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounce);
      setSearchResult(result);
      setLoading(false);
    };
    fetApi();
  }, [debounce]);

  const handleHideResult = () => {
    setShowResult(false);
  };
  console.log('hello');
  const handleInput = (e) => {
    const value = e.target.value;
    if (!value.startsWith(' ')) {
      setSearchValue(value);
    }
  };
  const handleSubmit = (e) => {};
  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context
    <div>
      <TippyHeadless
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountsItem
                  key={result.id}
                  data={result}
                  onClick={() => {
                    setSearchResult([]);
                    setSearchValue('');
                  }}
                />
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
          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <HeaderSearchIcon width="2.4rem" height="2.4rem" />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
