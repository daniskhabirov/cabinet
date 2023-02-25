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
import ProgramminngLanguagesForAiScaledImage from '/public/images/programminng-languages-for-ai-scaled.jpg';

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
                    Языки программирования
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
                        src={ProgramminngLanguagesForAiScaledImage}
                        alt='Picture of the old books'
                        priority
                    />
                </Box>
                <Box sx={{
                    color: '#111111',
                    lineHeight: '1.5rem'
                }}>
                    <Typography paragraph>
                        Язык программирования — формальный язык, предназначенный для записи компьютерных программ. Язык программирования определяет набор лексических, синтаксических и семантических правил, определяющих внешний вид программы и действия, которые выполнит исполнитель (обычно — ЭВМ) под её управлением.
                    </Typography>
                    <Typography paragraph>
                        Со времени создания первых программируемых машин человечество придумало более восьми тысяч языков программирования (включая эзотерические, визуальные и игрушечные). Каждый год их число увеличивается. Некоторыми языками умеет пользоваться только небольшое число их собственных разработчиков, другие становятся известны миллионам людей. Профессиональные программисты могут владеть несколькими языками программирования.
                    </Typography>
                    <Typography paragraph>
                        Язык программирования предназначен для написания компьютерных программ, которые представляют собой набор правил, позволяющих компьютеру выполнить тот или иной вычислительный процесс, организовать управление различными объектами, и т. п. Язык программирования отличается от естественных языков тем, что предназначен для управления ЭВМ, в то время как естественные языки используются, прежде всего, для общения людей между собой. Большинство языков программирования использует специальные конструкции для определения и манипулирования структурами данных и управления процессом вычислений.
                    </Typography>
                    <Typography paragraph>
                        Как правило, язык программирования определяется не только через спецификации стандарта языка, формально определяющие его синтаксис и семантику, но и через воплощения (реализации) стандарта — программные средства, обеспечивающие трансляцию или интерпретацию программ на этом языке; такие программные средства различаются по производителю, марке и варианту (версии), времени выпуска, полноте воплощения стандарта, дополнительным возможностям; могут иметь определённые ошибки или особенности воплощения, влияющие на практику использования языка или даже на его стандарт.
                    </Typography>
                    <Typography variant='string' sx={{ fontStyle: 'italic' }}> © wikipedia.org</Typography>
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
                        <StyledLink href='/library/develop/programming/languages/history'>
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
                    </List>
                </Box>
            </Box>
        </Box>
    </Box>
);

export default Programming;