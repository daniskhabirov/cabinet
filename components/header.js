import Link from 'next/link';
import styled from 'styled-components';

const Layout = styled.header`
    background-color: #303b44;
    padding: 0.75rem;
    display: flex;
    justify-content: space-around;
`;

const Container = styled.div`
    width: 1096px;
`;

const Logo = styled(Link)`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
`;

const Header = () => {
    return (
        <Layout>
            <Container>
                <Logo href='/'>Кабинет</Logo>
            </Container>
        </Layout>
    )
};

export default Header;