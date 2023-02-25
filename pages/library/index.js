import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
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
import oldBooksImage from '/public/images/old-books.webp';

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

const Library = () => (
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
                    Библиотека
                </Typography>
            </Box>
            <Box sx={{
                p: '14px 16px',
                bgcolor: '#ffffff'
            }}>
                <Box sx={{
                    mb: '1rem'
                }}>
                    <Image
                        src={oldBooksImage}
                        alt='Picture of the old books'
                        priority
                    />
                </Box>
                <Box sx={{
                    color: '#111111',
                    lineHeight: '1.5rem'
                }}>
                    <Typography paragraph>
                        Что за наслаждение находиться в хорошей библиотеке. Смотреть на книги - и то уже счастье.
                        Перед вами пир, достойный богов; вы сознаете, что можно принять в нем участие и наполнить до краев свою чашу.
                        <Typography variant='string' sx={{ fontStyle: 'italic' }}> Лемб</Typography>
                    </Typography>
                    <Typography paragraph>
                        Залог наилучшего и могучего развития, благо и сила городов состоит в том, чтобы иметь много образованных, знающих, разумных, честных и воспитанных граждан...
                        Поэтому города и, в особенности, большие города, обладающие достаточными средствами, не должны жалеть денег на обзаведение хорошими книгами и книгохранилищами.
                        <Typography variant='string' sx={{ fontStyle: 'italic' }}> Лютер</Typography>
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
                                        Разработка
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

export default Library;