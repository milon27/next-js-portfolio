import '../../styles/globals.css'
import '../../styles/desktop.css'
import '../../styles/mobile.css'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function _app({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
