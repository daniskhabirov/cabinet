import GlobalStyles from '/styles/global';
import {
    Box
} from '@mui/material';
import Header from '/components/layout/Header';
import Appbar from '/components/layout/Appbar';
import VerticalRouteStepper from '/components/navigation/VerticalRouteStepper';
import Container from '/components/layout/Container';
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
        <Container>
            <>
                <Component {...pageProps} />
                <Box sx={{
                    position: 'absolute',
                    right: '-200px'
                }}>
                    <VerticalRouteStepper />
                </Box>
            </>
        </Container>
        <Footer />
    </Box>
);

export default App;