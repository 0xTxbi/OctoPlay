import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import Router from 'next/dist/next-server/lib/router/router';
import { Provider } from 'next-auth/client'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )

}

export default MyApp