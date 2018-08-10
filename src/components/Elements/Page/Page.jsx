import React from 'react';
import cx from 'classnames';

import Header from './Header/PageHeader'
import './Page.scss';

const Page = (props) => {
  const { children, className = null } = props;
  const classNames = cx('page', className);
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default Page;

Page.Header = Header;
