import * as Home from 'components/Home';
import { Layout } from 'components/Layout';
import Head from 'next/head';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Sobrus Careers</title>
        <meta name="description" content="description"></meta>
      </Head>
      <Home.Header></Home.Header>
      <Home.Main></Home.Main>
    </Layout>
  );
}
