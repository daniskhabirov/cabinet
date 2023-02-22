import styled from 'styled-components';

const Layout = styled.div`
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    background-color: #ffffff;
    width: 1096px;
`;

export default function Home() {
    return (
        <Layout>
            <Container>
                Home
            </Container>
        </Layout>
    );
};