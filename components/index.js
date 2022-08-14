import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'));
const Nav = dynamic(() => import('./Nav'));

export { Footer, Nav };
