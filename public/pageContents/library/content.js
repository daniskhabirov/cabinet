import styled from 'styled-components';
import Image from 'next/image';
import {
    Box,
    Typography
} from '@mui/material';
import oldBooksImage from '/public/images/old-books.webp';

const StyledImage = styled(Image)`
    width: 100%;
    height: calc(100% / 2);
`;

const Content = () => (
    <>
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
                <StyledImage
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
    </>
);

export default Content;