import styled from 'styled-components';

const Layout = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    width: 1096px;
`;

const Main = styled.div`
    width: calc(100% - 316px);
    min-width: 100px;
    background-color: #ffffff;
    margin-right: 16px;
`;

const Sidebar = styled.div`
    width: 300px;
`;

const Block = styled.section`
    background-color: #ffffff;
`;

const BlockHeader = styled.header`
    padding: 16px 0 12px;
    margin: 0 20px 0;
    border-bottom: 1px solid #d5dddf;
`;

const BlockHeaderContainer = styled.div`

`;

const BlockTitle = styled.h2`
    font-size: 0.8125rem;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
    color: #505c66;
`;

const BlockBody = styled.div`
    padding: 24px 20px;
    font-size: 0.875rem;
    color: #333333;
`;

const TopicsBlockList = styled.ul`
    list-style: none;
`;

const TopicsBlockTopic = styled.li`
    display: flex;
    margin-bottom: 24px;
`;

const TopicsBlockTopicImage = styled.a`
    width: 36px;
    height: 36px;
    border-radius: 3px;
    margin-right: 12px;
`;

const EntityImage = styled.img`
    height: auto;
    width: 100%;
`;

const TopicsBlockTopicInfo = styled.div`

`;

const TopicsBlockTopicTitle = styled.a`
    color: #333333;
    font-weight: 700;
    margin-bottom: 8px;
    text-decoration: none;
    font-size: 0.8125rem;
`;

const Library = () => {
    return (
        <Layout>
            <Container>
                <Main>
                    Library
                </Main>
                <Sidebar>
                    <Block>
                        <BlockHeader>
                            <BlockHeaderContainer>
                                <BlockTitle>
                                    Title
                                </BlockTitle>
                            </BlockHeaderContainer>
                        </BlockHeader>
                        <BlockBody>
                            <TopicsBlockList>
                                <TopicsBlockTopic>
                                    <TopicsBlockTopicImage>
                                        <EntityImage src='https://habrastorage.org/getpro/habr/hub/db2/c8f/4a1/db2c8f4a1974bf334d01595732f339c1.png' />
                                    </TopicsBlockTopicImage>
                                    <TopicsBlockTopicInfo>
                                        <TopicsBlockTopicTitle href='/'>
                                            <span>One</span>
                                        </TopicsBlockTopicTitle>
                                    </TopicsBlockTopicInfo>
                                </TopicsBlockTopic>
                                <TopicsBlockTopic>
                                    <TopicsBlockTopicImage>
                                        <EntityImage src='https://habrastorage.org/getpro/habr/hub/135/2db/187/1352db18765addaa6e0b2ac013d386d8.png' />
                                    </TopicsBlockTopicImage>
                                    <TopicsBlockTopicInfo>
                                        <TopicsBlockTopicTitle href='/'>
                                            Two
                                        </TopicsBlockTopicTitle>
                                    </TopicsBlockTopicInfo>
                                </TopicsBlockTopic>
                                <TopicsBlockTopic>
                                    <TopicsBlockTopicImage>
                                        <EntityImage src='https://habrastorage.org/getpro/habr/hub/882/37a/b33/88237ab33b6f8acc090d443651c4f2f9.png' />
                                    </TopicsBlockTopicImage>
                                    <TopicsBlockTopicInfo>
                                        <TopicsBlockTopicTitle href='/'>
                                            Three
                                        </TopicsBlockTopicTitle>
                                    </TopicsBlockTopicInfo>
                                </TopicsBlockTopic>
                            </TopicsBlockList>
                        </BlockBody>
                    </Block>
                </Sidebar>
            </Container>
        </Layout>
    );
};

export default Library;