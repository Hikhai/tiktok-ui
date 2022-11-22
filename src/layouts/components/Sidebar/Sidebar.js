import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import SuggestedAccounts from '~/components/SuggestedAccounts';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import suggestedService from '~/services/suggested';
import Discover from '~/components/Discover';
import Footer from '~/components/Footer';

const cx = classNames.bind(styles);
function Sidebar() {
  const [all, setAll] = useState(false);
  const [suggestedResult, setSuggestedResult] = useState({});
  const scrollbarRef = useRef();
  useEffect(() => {
    const fetSuggestedApi = async () => {
      const less = await suggestedService('1', '5');
      const more = await suggestedService('1', '20');
      setSuggestedResult({ less, more });
    };
    fetSuggestedApi();
  }, []);

  const handleSeeAll = () => setAll(!all);

  const suggestedList = all ? suggestedResult.more : suggestedResult.less;
  return (
    <aside className={cx('wrapper')}>
      <Menu />
      <SuggestedAccounts label="Suggested accounts" all={all} data={suggestedList} seeAll={handleSeeAll} isPreview />
      <SuggestedAccounts label="Following accounts" all={all} data={suggestedList} seeAll={handleSeeAll} />
      <Discover />
      <Footer />
      {/* <div ref={scrollbarRef} className={cx('scrollbar')}></div> */}
    </aside>
  );
}

export default Sidebar;
