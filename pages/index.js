import * as Home from 'components/Home';
import { Layout } from 'components/Layout';
import Head from 'next/head';

export default function HomePage() {
  return (
    <Layout>
      <Head></Head>
      <Home.Header></Home.Header>
      <Home.Main></Home.Main>
    </Layout>
  );
}
