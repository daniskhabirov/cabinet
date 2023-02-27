import {
    Box
} from '@mui/material';

const Container = ({ children }) => (
    <Box sx={{
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        padding: '12px 0 24px 0',
        maxWidth: '1096px',
        m: '0 auto'
    }}>
        <Box sx={{
            display: 'flex',
            flexGrow: 3
        }}>
            {children}
        </Box>
    </Box>
);

export default Container;