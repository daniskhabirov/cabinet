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
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TransformIcon from '@mui/icons-material/Transform';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MemoryIcon from '@mui/icons-material/Memory';
import JavascriptIcon from '@mui/icons-material/Javascript';
import DeployRocketImage from '/public/images/deploy-rocket.png';

const StyledImage = styled(Image)`
    width: 100%;
    height: calc(100% / 2)
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

const Programming = () => (
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
                    Развертывание
                </Typography>
            </Box>
            <Box sx={{
                p: '14px 16px',
                bgcolor: '#ffffff'
            }}>
                <Box sx={{
                    mb: '1rem'
                }}>
                    <StyledImage
                        src={DeployRocketImage}
                        alt='Picture of the old books'
                        priority
                    />
                </Box>
                <Box sx={{
                    color: '#111111',
                    lineHeight: '1.5rem'
                }}>
                    <Typography paragraph>
                        Node.js is an open source JavaScript runtime environment that is used to build networking and server-side applications easily. The Node.js platform currently runs on Linux, FreeBSD, Windows and OS X. While applications can run at the command line, this tutorial focuses on executing them as a service. Therefore, they will be able to restart automatically in the case of a failure or reboot and can be used within production environments safely.
                    </Typography>
                    <Typography paragraph>
                        As we progress through this tutorial, we will cover setting up a Node.js environment ready for production on a single Ubuntu 16.04 server. The server runs a Node.js application managed by PM2 and gives users secure access through a Nginx reverse proxy. The Nginx server offers HTTPS via a free certificate by Let’s Encrypt.
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic' }}>deploybot.com</Typography>
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
                        <StyledLink href='/library/develop/programming/history'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <HistoryEduIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        История
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/algorithm&structure'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <AccountTreeIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Алгоритмы и структуры данных
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/converting'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <TransformIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Преобразование кода
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/building'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <PlayCircleOutlineIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Сборка и выполнение кода
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/memory'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <MemoryIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Работа с памятью
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/languages'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <JavascriptIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Языки программирования
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

export default Programming;