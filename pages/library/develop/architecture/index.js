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
import ArchitectureOfAncientGreeceImage from '/public/images/architecture-of-ancient-greece.jpg';

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
                    Архитектура
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
                        src={ArchitectureOfAncientGreeceImage}
                        alt='Picture of the old books'
                        priority
                    />
                </Box>
                <Box sx={{
                    color: '#111111',
                    lineHeight: '1.5rem'
                }}>
                    <Typography paragraph>
                    Архитектуру древней Греции очень часто сравнивают с египетской. По внешнему величию греческие архитектурные традиции уступают архитектуре Египта. Однако, несмотря на это, строения, а также конструктивные элементы в Греции сложнее. Крыши храмов Египта чаще всего имеют плоские перекрытия. В то время как у греков перекрытие заменяется двухскатной крышей, которая имеет четырехугольные фронтальные части на строении. Греков можно благодарить за создание ордера – логичного и твердого порядка, когда отдельные части строения соразмерны и правильно располагаются. При этом данный порядок порождает ритм. В греческой архитектуре именно ритмом определяется красота того или иного здания. Грекам удается своими архитектурными шедеврами «трогать» струны души всех гостей
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic' }}>discount-house.ru</Typography>
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