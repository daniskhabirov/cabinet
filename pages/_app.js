import GlobalStyles from '/styles/global';
import {
    Box
} from '@mui/material';
import Header from '/components/layout/Header';
import Appbar from '/components/layout/Appbar';
import VerticalRouteStepper from '/components/navigation/stepper/VerticalRouteStepper';
import Content from '/components/layout/Content';
import Footer from '/components/layout/Footer';

const App = ({ Component, pageProps }) => (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    }}>
        <GlobalStyles />
        <Header />
        <Appbar />
        <Content>
            <Box sx={{
                position: 'absolute',
                left: '-150px'
            }}>
                <VerticalRouteStepper />
            </Box>
            <Component {...pageProps} />
        </Content>
        <Footer />
    </Box>
);

export default App;