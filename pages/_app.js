import GlobalStyles from '../styles/global';
import AppBar from '../components/appBar';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <AppBar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
};