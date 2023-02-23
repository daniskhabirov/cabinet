import {
    Container
} from '@mui/material';

const Content = ({ children }) => (
    <Container sx={{
        padding: '12px',
        width: '1144px'
    }}>
        {children}
    </Container>
);

export default Content;