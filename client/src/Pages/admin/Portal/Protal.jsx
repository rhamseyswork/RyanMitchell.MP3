import React, {useState, useEffect, Suspense} from 'react'
import {Route, Link, useLocation } from 'react-router-dom';
import NavBar from '../components/Nav Bar/Nav Bar.jsx'
import NavBarData from '../components/Nav Bar/Nav Bar Tabs.js'
import PropTypes from 'prop-types';

const LazyLoadPage = React.memo(function LazyLoadPage({ tab }) {
  const PageComponent = React.lazy(() => import(/* @vite-ignore */`./Pages/${tab}`).catch(() => ({ default: () => <Pages.Error404 /> })));
  return (
    <Suspense fallback={<div>Admin Portal Loading...</div>}>
      <PageComponent className="w-full"/>
      </Suspense>

  );
});
LazyLoadPage.displayName = 'LazyLoadPage';
LazyLoadPage.propTypes = {
tab: PropTypes.string.isRequired,
};

function Protal() {
  const location = useLocation();
  const [tabClassName, setTabClassName] = useState('');
  const [metaTagName, setMetaTagName] = useState('');
  
  useEffect(() => {
    setTabClassName(location.pathname === '/' ? 'navBar-tab-active' : 'navBar-tab');
    const foundTab = NavBarData.tabs.find(tab => {
      if (Array.isArray(tab)) {
        return tab.some(item => item.toLowerCase() === location.pathname.slice(1).toLowerCase());
      } else {
        return tab.toLowerCase() === location.pathname.slice(1).toLowerCase();
      }
    });
    const metaTagName = foundTab ? location.pathname.substring(1) : '';
    setTabClassName(location.pathname === '/' ? 'navBar-tab-active' : 'navBar-tab');
    setMetaTagName(metaTagName);//option to add Home
  }, [location.pathname]);  
  
  
    const tabs = NavBarData.tabs.map((tab) => {
      if (Array.isArray(tab)) {
        const dropdownItems = tab.slice(1);
        return dropdownItems.map((dropdownTab) => (
          <>
          <Route key={dropdownTab} path={dropdownTab} element={<LazyLoadPage tab={`${tab[0]}/${dropdownTab}`} />} />
          </>
        ));
      } else {
        return <Route key={tab} path={tab} element={<LazyLoadPage tab={tab} />} />;
      }
    });

  return (
    <NavBar Tabs={NavBarData.tabs} setTabClassName={setTabClassName} tabs={tabs} >
        <Link to='/' className={tabClassName}>{NavBarData.title}</Link>
    </NavBar>
  )
}

export default Protal