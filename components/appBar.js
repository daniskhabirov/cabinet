import { useRouter } from 'next/router';
import styled from 'styled-components';
import routes from '../routes';

const Layout = styled.div`
    background-color: #303b44;
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
    padding: 0.25rem;
    background-color: ${props => props.currentRoute != props.route ? 'transparent' : '#c4e2fb'};
    color: ${props => props.currentRoute != props.route ? '#ffffff' : '#000000'};
    border: none;
    border-radius: 7.5px;
    &:hover {
        background-color: #ffffff;
        color: #303b44;
        cursor: pointer;
    };
`;

const AppBar = () => {
    const router = useRouter();
    const handleClick = ({ route = '/' }) => {
        router.push(route);
    };

    return (
        <>
            <Layout>
                <Container>
                    <TabPanel>
                        <TabItem route={routes.home} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.home })}>Мой кабинет</TabItem>
                        <TabItem route={routes.develop} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.develop })}>Разработка</TabItem>
                        <TabItem route={routes.admin} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.admin })}>Администрирование</TabItem>
                    </TabPanel>
                </Container>
            </Layout>
        </>
    );
};

export default AppBar;