import styled from 'styled-components';

const Layout = styled.footer`
    font-size: 0.75rem;
    background-color: #1d2023;
    padding: 0.25rem 0 0.25rem 0;
    display: flex;
    justify-content: space-around;
`;

const Container = styled.div`
    width: 1096px;
`;

const Copyright = styled.div`
    color: #ffffff;
`;

const Footer = () => {
    return (
        <Layout>
            <Container>
                <Copyright>
                    © 2023, Danis Khabirov
                </Copyright>
            </Container>
        </Layout>
    );
};

export default Footer;