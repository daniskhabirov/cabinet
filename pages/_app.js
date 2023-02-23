import GlobalStyles from '../styles/global';
import Header from '../components/layout/Header';
import Appbar from '../components/layout/Appbar';
import Content from '../components/layout/Content';
import Footer from '../components/layout/Footer';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Appbar />
            <Content>
                <Component {...pageProps} />
            </Content>
            <Footer />
        </>
    );
};

export default App;