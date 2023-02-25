import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import HistoryTextCroppedImage from '/public/images/history-text-cropped.jpg';

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

const History = () => (
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
                    История языков программирования
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
                        src={HistoryTextCroppedImage}
                        alt='Picture of the old books'
                        priority
                    />
                </Box>
                <Box sx={{
                    color: '#111111',
                    lineHeight: '1.5rem'
                }}>
                    <Typography paragraph>
                        Первыми императивными языками были машинные инструкции (коды) — команды, готовые к исполнению компьютером сразу (без каких-либо преобразований). В дальнейшем были созданы ассемблеры, и программы стали записывать на языках ассемблеров. Ассемблер — компьютерная программа, предназначенная для преобразования машинных инструкций, записанных в виде текста на языке, понятном человеку (языке ассемблера), в машинные инструкции в виде понятном компьютеру (машинный код). Одной инструкции на языке ассемблера соответствовала одна инструкция на машинном языке. Разные компьютеры поддерживали разные наборы инструкций. Программы, записанные для одного компьютера, приходилось заново переписывать для переноса на другой компьютер. Были созданы языки программирования высокого уровня и компиляторы — программы, преобразующие текст с языка программирования на язык машины (машинный код). Одна инструкция языка высокого уровня соответствовала одной или нескольким инструкциям языка машины, и для разных машин эти инструкции были разными. Первым распространённым высокоуровневым языком программирования, получившим применения на практике, стал язык Fortran, разработанный Джоном Бэкусом в 1954 году. Fortran является компилируемым языком программирования, позволяет использовать именованные переменные, составные выражения, подпрограммы и многие другие элементы, распространённые в императивных языках. Для упрощения выражения математических алгоритмов в конце 1950‑х годов был разработан язык Algol. В дальнейшем Algol послужил базой для написания операционных систем для некоторых моделей компьютеров. Языки COBOL (1960 год) и Basic (1964 год) стали первыми языками, разработчики которых пытались сделать языки похожими на английский язык. В 1970-х годах Никлаус Вирт разработал язык Pascal. Денис Ритчи создал язык C. В 1978 году команда разработчиков из фирмы Honeywell начала разработку языка Ada, через четыре года опубликовала требования для его работы; спецификация языка увидела свет в 1983 году, была обновлена в 1995 и 2005-2006 годах.
                    </Typography>
                    <Typography paragraph>
                        В 1980-х годах возрос интерес к объектно-ориентированному программированию (ООП). В 1980 году сотрудники исследовательского центра Xerox PARC на основе языка Smalltalk, разработанного Аланом Кэем в 1969 году, создали язык Smalltalk-80. Бьёрн Страуструп на основе языка C и по образу и подобию языка Simula (предположительно, первого в мире ООП-языка, разработанного ещё в 1960-х годах) разработал язык C++. Первая реализация C++ была создана в 1985 году. В 1987 году Ларри Уолл выпустил язык Perl и интерпретатор для него. В 1990 году Гвидо ван Россум выпустил язык Python. В 1994 году в фирме Sun Microsystems был разработан язык Java. В 1995 году Расмус Лердорф разработал язык PHP. Язык Ruby был выпущен в 1995 году. Язык C# был выпущен в 2002 году вместе с программной платформой (фреймворком) .NET Framework, поддерживающей несколько языков.
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic' }}>
                        © wikipedia.com
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
                        <StyledLink href='/library/develop/programming/languages/history/assembler'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemText>
                                        Язык ассемблера
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/languages/history/c'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemText>
                                        С
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/languages/history/c++'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemText>
                                        С++
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/languages/history/c#'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemText>
                                        С#
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/languages/history/java'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemText>
                                        Java
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/languages/history/python'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemText>
                                        Python
                                    </ListItemText>
                                </StyledListItemButton>
                            </StyledListItem>
                        </StyledLink>
                        <StyledLink href='/library/develop/programming/languages/history/js'>
                            <StyledListItem>
                                <StyledListItemButton>
                                    <ListItemText>
                                        JavaScript
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

export default History;