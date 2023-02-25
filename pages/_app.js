import GlobalStyles from '../styles/global';
import {
    Box
} from '@mui/material';
import Header from '../components/layout/Header';
import Appbar from '../components/layout/Appbar';
import Content from '../components/layout/Content';
import Footer from '../components/layout/Footer';

const App = ({ Component, pageProps }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
        }}>
            <GlobalStyles />
            <Header />
            <Appbar />
            <Content>
                <Component {...pageProps} />
            </Content>
            <Footer />
        </Box>
    );
};

export default App;