import Router from 'next/router';
import 'Normalize.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'styles/global.scss';
NProgress.configure({
  minimum: 0.2,
  easing: 'ease',
  speed: 200,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div className="careers">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
