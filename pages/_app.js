import GlobalStyles from '../styles/global';
import AppBar from '../components/appBar';

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <AppBar />
            <Component {...pageProps} />
        </>
    );
};