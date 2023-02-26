import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link'
import {
    Box,
    Stepper,
    Step,
    StepLabel,
} from '@mui/material';

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

const VerticalRouteStepper = () => {
    const router = useRouter();
    const [pages, setPages] = useState([]);
    const [steps, setSteps] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        fetchPages();
        function fetchPages() {
            const pathname = router.pathname.slice(1);
            const pages = pathname.split('/');
            setPages(pages);
            setActiveStep(pages.length);
        };
    }, [router]);

    useEffect(() => {
        fetchSteps();
        function fetchSteps() {
            let steps = [];
            pages.forEach(page => {
                switch (page) {
                    case ('develop'):
                        return steps.push({
                            id: page,
                            name: 'Разработка',
                            route: '/library/develop'
                        })
                    case ('programming'):
                        return steps.push({
                            id: page,
                            name: 'Программирование',
                            route: '/library/develop/programming'
                        })
                    case ('languages'):
                        return steps.push({
                            id: page,
                            name: 'Языки программирования',
                            route: '/library/develop/programming/languages'
                        })
                    case ('history'):
                        return steps.push({
                            id: page,
                            name: 'История языков программирования',
                            route: '/library/develop/programming/languages/history'
                        })
                    default:
                        return null
                };
            });
            setSteps(steps);
        };
    }, [pages])


    if (steps.length < 2) return null;
    return (
        <Box sx={{ width: '200px' }}>
            <Stepper activeStep={activeStep} orientation='vertical'>
                {steps.map((step, index) => (
                    <Step key={step.id} completed={false} active={index === steps.length - 1}>
                        <Box sx={{
                            pl: '5px',
                            '&:hover': { bgcolor: '#e9e9e9' }
                        }}>
                            <StyledLink href={step.route}>
                                <StepLabel sx={{ wordWrap: 'break-word' }}>
                                    {step.name}
                                </StepLabel>
                            </StyledLink>
                        </Box>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default VerticalRouteStepper;