import { useRouter } from 'next/router';
import styled from 'styled-components';
import routes from '../routes';

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
                    <TabItem route={routes.home} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.home })}>Мой кабинет</TabItem>
                    <TabItem route={routes.kitchen} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.kitchen })}>Кухня</TabItem>
                    <TabItem route={routes.sportRoom} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.sportRoom })}>Спортзал</TabItem>
                    <TabItem route={routes.library} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.library })}>Библиотека</TabItem>
                </TabPanel>
            </Container>
        </Layout>
    );
};

export default MainMenu;