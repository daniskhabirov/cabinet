import {
    Box,
    Typography
} from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{
            fontSize: '0.75rem',
            bgcolor: '#1d2023',
            padding: '0.25rem 0 0.25rem 0',
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Box sx={{
                width: 1,
                maxWidth: '1096px'
            }}>
                <Typography variant='body2' sx={{
                    color: '#f0f0f0'
                }}>
                    © 2023
                </Typography>
            </Box>
        </Box >
    );
};

export default Footer;