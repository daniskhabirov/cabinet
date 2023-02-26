import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
    Box
} from '@mui/material';

const TabItem = styled.button`
    padding: 0;
    background-color: inherit;
    color: ${props => props.currentRoute != props.route ? '#909090' : '#303b44'};
    border: none;
    &:hover {
        color: #c4e2fb;
        cursor: pointer;
    };
`;

const Appbar = () => {
    const router = useRouter();
    const handleClick = ({ route = '/' }) => {
        router.push(route);
    };

    return (
        <Box sx={{
            backgroundColor: '#ffffff',
            padding: '10px 0 10px 0'
        }}>
            <Box sx={{
                width: '1096px',
                m: '0 auto'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <TabItem route='/' currentRoute={router.pathname} onClick={() => handleClick({ route: '/' })}>Мой кабинет</TabItem>
                    <TabItem route='/kitchen' currentRoute={router.pathname} onClick={() => handleClick({ route: '/kitchen' })}>Кухня</TabItem>
                    <TabItem route='/sport-room' currentRoute={router.pathname} onClick={() => handleClick({ route: '/sport-room' })}>Спортзал</TabItem>
                    <TabItem route='/library' currentRoute={router.pathname} onClick={() => handleClick({ route: '/library' })}>Библиотека</TabItem>
                </Box>
            </Box>
        </Box >
    );
};

export default Appbar;