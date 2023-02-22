import { useRouter } from 'next/router';
import styled from 'styled-components';

const Layout = styled.div`
    background-color: #ffffff;
    padding: 0.75rem;
    display: flex;
    justify-content: space-around;
`;

const Container = styled.div`
    width: 1096px;
`;

const TabPanel = styled.div`
    display: flex;
    justify-content: space-between;
`;

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

const MainMenu = () => {
    const router = useRouter();
    const handleClick = ({ route = '/' }) => {
        router.push(route);
    };

    return (
        <Layout>
            <Container>
                <TabPanel>
                    <TabItem route='/' currentRoute={router.pathname} onClick={() => handleClick({ route: '/' })}>Мой кабинет</TabItem>
                    <TabItem route='/kitchen' currentRoute={router.pathname} onClick={() => handleClick({ route: '/kitchen' })}>Кухня</TabItem>
                    <TabItem route='/sport-room' currentRoute={router.pathname} onClick={() => handleClick({ route: '/sport-room' })}>Спортзал</TabItem>
                    <TabItem route='/library' currentRoute={router.pathname} onClick={() => handleClick({ route: '/library' })}>Библиотека</TabItem>
                </TabPanel>
            </Container>
        </Layout>
    );
};

export default MainMenu;