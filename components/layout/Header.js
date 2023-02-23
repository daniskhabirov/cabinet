import Link from 'next/link';
import styled from 'styled-components';
import {
    Box
} from '@mui/material';

const Logo = styled(Link)`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
`;

const Header = () => {
    return (
        <Box sx={{
            backgroundColor: '#303b44',
            padding: '12px',
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Box sx={{
                width: '1096px'
            }}>
                <Logo href='/'>Кабинет</Logo>
            </Box>
        </Box>
    )
};

export default Header;