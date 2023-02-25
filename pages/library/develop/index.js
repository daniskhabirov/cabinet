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
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import developmentJobsImage from '/public/images/development-jobs.jpg';

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

const Develop = () => (
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
                    mb: '1rem'
                }}>
                    <StyledImage
                        src={developmentJobsImage}
                        alt='Picture of the old books'
                        priority
                    />
                </Box>
                <Box sx={{
                    color: '#111111',
                    lineHeight: '1.5rem'
                }}>
                    <Typography paragraph>
                        Learning and development jobs come in all sizes and forms. Increasingly, companies want to ramp up their learning and development efforts – and for good reason. Rapid technological developments and an aging workforce create a significant skills gap that needs to be closed.
                        As a result, many organizations will have to change or update the skills and competencies of their workforce. Part of this will take place through the upskilling of people via, for instance, the company’s learning and development (L&D) programs. But creating an L&D program that meets your organization’s specific training needs entails more than just buying a learning management system (LMS).
                        <Typography variant='string' sx={{ fontStyle: 'italic' }}> © aihr.com</Typography>
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
                        <StyledLink href='/library/develop/programming'>
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
                        <StyledLink href='/library/develop/database'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <StorageIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Базы данных
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/architecture'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <DynamicFeedIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Архитектура
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/deploy'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <LocalShippingIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Деплой
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

export default Develop;