import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import Router from 'next/dist/next-server/lib/router/router';
import { Provider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';


NProgress.configure({
  minimum: 0.5,
  easing: 'ease',
  trickleSpeed: 500,
  speed: 500,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )

}

export default MyApp