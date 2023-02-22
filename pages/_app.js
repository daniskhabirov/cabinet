import GlobalStyles from '../styles/global';
import Header from '../components/header';
import MainMenu from '../components/mainMenu';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Header />
            <MainMenu />
            <Component {...pageProps} />
            <Footer />
        </>
    );
};