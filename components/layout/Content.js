import {
    Box
} from '@mui/material';

const Content = ({ children }) => (
    <Box sx={{
        display: 'flex',
        position: 'relative',
        padding: '12px 0 24px 0',
        width: '1096px',
        height: '100vh',
        m: '0 auto'
    }}>
        <Box sx={{
            flexGrow: 3
        }}>
            {children}
        </Box>
    </Box>
);

export default Content;