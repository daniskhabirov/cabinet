import Link from 'next/link';
import styled from 'styled-components';

const Layout = styled.div`
    padding: 12px;
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
    margin-right: 16px;
`;

const Name = styled.div`
    padding: 14px 16px;
    margin-bottom: 10px;
    background-color: #ffffff;
`;

const NameText = styled.h1`
    color: #333333;
    font-size: 1.25rem;
    font-weight: 700;
`;

const Content = styled.div`
    padding: 16px 20px;
    margin-bottom: 12px;
    border-bottom: 1px solid #eaeaea;
    background-color: #ffffff;
`;

const ContentBody = styled.div`

`;

const ContentBodyCover = styled.div`
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 56.4103%;
`;

const ContentBodyCoverImage = styled.img`
    height: 100%;
    position: absolute;
    width: 100%;
    object-fit: cover;
`;

const ContentBodyText = styled.div`
    color: #111111;
    line-height: 1.5rem;
`;

const ContentBodyParagraph = styled.p`
    margin-bottom: 1rem;
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

const TopicsBlockTopicImage = styled(Link)`
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

const TopicsBlockTopicTitle = styled(Link)`
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
                    <Name>
                        <NameText>
                            Библиотека
                        </NameText>
                    </Name>
                    <Content>
                        <ContentBody>
                            <ContentBodyCover>
                                <ContentBodyCoverImage src='https://habrastorage.org/getpro/habr/upload_files/9eb/376/7a8/9eb3767a857f092a4e83d51315c68f15.png' />
                            </ContentBodyCover>
                            <ContentBodyText>
                                <ContentBodyParagraph>
                                    Библиотеки - это сокровищницы всех богатств человеческого духа.
                                    Что за наслаждение находиться в хорошей библиотеке. Смотреть на книги - и то уже счастье.
                                    Перед вами пир, достойный богов; вы сознаете, что можно принять в нем участие и наполнить до краев свою чашу.
                                </ContentBodyParagraph>
                                <ContentBodyParagraph>
                                    Залог наилучшего и могучего развития, благо и сила городов состоит в том, чтобы иметь много образованных,
                                    знающих, разумных, честных и воспитанных граждан... Поэтому города и, в особенности, большие города,
                                    обладающие достаточными средствами, не должны жалеть денег на обзаведение хорошими книгами и книгохранилищами.
                                </ContentBodyParagraph>
                            </ContentBodyText>
                        </ContentBody>
                    </Content>
                </Main>
                <Sidebar>
                    <Block>
                        <BlockHeader>
                            <BlockHeaderContainer>
                                <BlockTitle>
                                    Категории
                                </BlockTitle>
                            </BlockHeaderContainer>
                        </BlockHeader>
                        <BlockBody>
                            <TopicsBlockList>
                                <TopicsBlockTopic>
                                    <TopicsBlockTopicImage href='/library/develop'>
                                        <EntityImage src='https://habrastorage.org/getpro/habr/hub/db2/c8f/4a1/db2c8f4a1974bf334d01595732f339c1.png' />
                                    </TopicsBlockTopicImage>
                                    <TopicsBlockTopicInfo>
                                        <TopicsBlockTopicTitle href='/library/develop'>
                                            <span>Разработка</span>
                                        </TopicsBlockTopicTitle>
                                    </TopicsBlockTopicInfo>
                                </TopicsBlockTopic>
                                <TopicsBlockTopic>
                                    <TopicsBlockTopicImage href='/'>
                                        <EntityImage src='https://habrastorage.org/getpro/habr/hub/1b7/37e/2d9/1b737e2d9b2f7b60a2f5700eb5f93f1e.png' />
                                    </TopicsBlockTopicImage>
                                    <TopicsBlockTopicInfo>
                                        <TopicsBlockTopicTitle href='/'>
                                            <span>Администрирование</span>
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