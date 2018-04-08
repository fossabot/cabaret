import React from 'react';
import Header from './Header/Header'
import cx from 'classnames';

const Page = (props) => {
  const { children, className } = props;
  const classNames = cx('page', className);
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default Page;

Page.Header = Header;
