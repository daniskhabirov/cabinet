import styled from 'styled-components';
import GlobalStyles from '../styles/global';
import Header from '../components/header';
import MainMenu from '../components/mainMenu';
import Footer from '../components/footer';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Content = styled.div`
    flex-grow: 3;
`;

const App = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyles />
            <Layout>
                <Header />
                <MainMenu />
                <Content>
                    <Component {...pageProps} />
                </Content>
                <Footer />
            </Layout>
        </>
    );
};

export default App;