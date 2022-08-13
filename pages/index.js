import * as React from 'react';
import Head from 'next/head';
import * as Home from 'components/Home';
import { Layout } from 'components/Layout';

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
