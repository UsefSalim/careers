import { Footer, Nav } from 'components';
import Head from 'next/head';
import PropTypes from 'prop-types';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Nav />
      {children}
      <Footer></Footer>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: 'Sobrus Careers',
  description:
    'Retrouvez toutes nos offres d’emploi sur notre site Sobrus Careers et rejoignez la Startup qui pense chaque jour au bien-être de ses collaborateurs.',
};

export default Layout;
