import styled from 'styled-components';

const Layout = styled.div`
    background-color: #1d2023;
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const Container = styled.div`
    width: 1096px;
`;

const Copyright = styled.div`
    color: #ffffff;
`;

const Footer = () => {
    return (
        <>
            <Layout>
                <Container>
                    <Copyright>
                        © 2023, Danis Khabirov
                    </Copyright>
                </Container>
            </Layout>
        </>
    );
};

export default Footer;