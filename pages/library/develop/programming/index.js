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
import ProgrammingSchoolboyImage from '/public/images/programming-schoolboy.jpg';

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
                    Программирование
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
                        src={ProgrammingSchoolboyImage}
                        alt='Picture of the old books'
                        priority
                    />
                </Box>
                <Box sx={{
                    color: '#111111',
                    lineHeight: '1.5rem'
                }}>
                    <Typography paragraph>
                        Originally launched in 2013 by brothers Hadi and Ali Partovi, the Hour of Code was designed as a way to get students interested in computer science by providing a basic introduction to coding during Computer Science Education Week. Since its launch, the Hour of Code has grown into an annual international event with hundreds of partners and hundreds of thousands of educators and students taking part. The Hour of Code engages students of all ages in computer programming and computer science, showing them that coding is accessible to everyone. This year, Computer Science Education week takes place from December 4 through December 10, but students and teachers can participate in the Hour of Code at any time throughout the year.
                    </Typography>
                    <Typography paragraph>
                        Companies from all over the world design activities for the Hour of Code so students can experience an hour of computer science. From skating with Ana and Elsa to building a galaxy with Star Wars, there are Hour of Code activities to pique every student’s interest. In addition to the more than 200 tutorials and lesson plans available on hourofcode.com, there are many apps for tablets and phones as well as unplugged activities and a number of games and products you can use with students to help teach basic computer science concepts. Computer science is not just about programming and coding; it requires students to think logically and build problem-solving and critical thinking skills. Here are some of the many options available for educators to bring Hour of Code activities into their classrooms.
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic' }}>https://www.techlearning.com/resources/products-perfect-for-the-hour-of-code.com</Typography>
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