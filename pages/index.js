import styled from 'styled-components';

const Layout = styled.div`
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1096px;
    background-color: #ffffff;
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