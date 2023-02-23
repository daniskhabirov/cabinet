import styled from 'styled-components';
import Link from 'next/link';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';

const Image = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
`;

const StyledListItem = styled(ListItem)`
    padding: 0;
`;

const StyledListItemButton = styled(ListItemButton)`
    padding: 7.5px 0;
`;

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none
`;

const Develop = () => {
    return (
        <Box sx={{
            display: 'flex'
        }}>
            <Box sx={{
                mr: '16px',
                width: 'calc(100% - 300px)'
            }}>
                <Box sx={{
                    p: '14px 16px',
                    mb: '10px',
                    bgcolor: '#ffffff'
                }}>
                    <Typography variant='h1' sx={{
                        color: '#333333',
                        fontSize: '1.25rem',
                        fontWeight: '700'
                    }}>
                        Разработка
                    </Typography>
                </Box>
                <Box sx={{
                    p: '14px 16px',
                    bgcolor: '#ffffff'
                }}>
                    <Box sx={{
                        mb: '1rem',
                        position: 'relative',
                        pb: '56.4103%'
                    }}>
                        <Image src='https://habrastorage.org/getpro/habr/upload_files/9eb/376/7a8/9eb3767a857f092a4e83d51315c68f15.png' />
                    </Box>
                    <Box sx={{
                        color: '#111111',
                        lineHeight: '1.5rem'
                    }}>
                        <Typography sx={{
                            mb: '1rem'
                        }}>
                            Библиотеки - это сокровищницы всех богатств человеческого духа.
                            Что за наслаждение находиться в хорошей библиотеке. Смотреть на книги - и то уже счастье.
                            Перед вами пир, достойный богов; вы сознаете, что можно принять в нем участие и наполнить до краев свою чашу.
                        </Typography>
                        <Typography sx={{
                            mb: '1rem'
                        }}>
                            Залог наилучшего и могучего развития, благо и сила городов состоит в том, чтобы иметь много образованных,
                            знающих, разумных, честных и воспитанных граждан... Поэтому города и, в особенности, большие города,
                            обладающие достаточными средствами, не должны жалеть денег на обзаведение хорошими книгами и книгохранилищами.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                width: '300px'
            }}>
                <Box sx={{
                    backgroundColor: '#ffffff'
                }}>
                    <Box sx={{
                        padding: '16px 0 12px',
                        margin: '0 20px 0',
                        borderBottom: '1px solid #d5dddf'
                    }}>
                        <Typography variant='h2' sx={{
                            fontSize: '0.8125rem',
                            letterSpacing: '0.0625rem',
                            textTransform: 'uppercase',
                            color: '#505c66'
                        }}>
                            Категории
                        </Typography>
                    </Box>
                    <Box sx={{
                        padding: '7.5px 20px 20px 20px',
                        fontSize: '0.875rem',
                        color: '#333333'
                    }}>
                        <List sx={{
                            padding: 0
                        }}>
                            <StyledLink href='/library/develop'>
                                <StyledListItem>
                                    <StyledListItemButton>
                                        <ListItemIcon>
                                            <CodeIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Программирование
                                        </ListItemText>
                                    </StyledListItemButton>
                                </StyledListItem>
                            </StyledLink>
                            <StyledLink href='/library/admin'>
                                <StyledListItem>
                                    <StyledListItemButton>
                                        <ListItemIcon>
                                            <StorageIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Администрирование
                                        </ListItemText>
                                    </StyledListItemButton>
                                </StyledListItem>
                            </StyledLink>
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Develop;