import { useRouter } from 'next/router';
import styled from 'styled-components';
import routes from '../routes';

const Container = styled.div`
    background-color: rgb(172, 216, 255);
    padding: 0.25rem;
`;

const TabPanel = styled.div`
    display: flex;
    justify-content: space-around;
`;

const TabItem = styled.button`
    background-color: ${props => props.currentRoute != props.route ? 'transparent' : 'black'};
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    &:hover {
        background-color: aliceblue;
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
            <Container>
                <TabPanel>
                    <TabItem route={routes.home} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.home })}>Мой кабинет</TabItem>
                    <TabItem route={routes.develop} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.develop })}>Разработка</TabItem>
                    <TabItem route={routes.admin} currentRoute={router.pathname} onClick={() => handleClick({ route: routes.admin })}>Администрирование</TabItem>
                </TabPanel>
            </Container>
        </>
    );
};

export default AppBar;