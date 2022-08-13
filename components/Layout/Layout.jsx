import React from 'react';
import { Footer } from 'components';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
