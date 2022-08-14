import { Footer, Nav } from 'components';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
