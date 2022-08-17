import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('./Layout'));
const Form = dynamic(() => import('./Form'));

export { Layout, Form };
