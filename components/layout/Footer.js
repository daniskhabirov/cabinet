import {
    Box
} from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{
            fontSize: '0.75rem',
            backgroundColor: '#1d2023',
            padding: '0.25rem 0 0.25rem 0',
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Box sx={{
                width: '1096px'
            }}>
                <Box sx={{
                    color: '#ffffff'
                }}>
                    © 2023, Danis Khabirov
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;