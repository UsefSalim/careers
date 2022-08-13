import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'));
const Main = dynamic(() => import('./Main'));

export { Header, Main };
