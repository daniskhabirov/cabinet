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
import routes from '/routes';

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

const VerticalRouteStepper = () => {
    const router = useRouter();
    const [routesState, setRoutesState] = useState([]);
    // const [pages, setPages] = useState([]);
    const [steps, setSteps] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        fetchRoutes();
        function fetchRoutes() {
            let routes = [];
            const currentPathname = router.pathname;
            console.log(currentPathname);
            const pages = currentPathname.split('/');
            pages.forEach(page => {
                routes.push(currentPathname.split(page)[0]);
            });
            setRoutesState(routes);
            setActiveStep(routes.length);
        };
    }, [router]);

    useEffect(() => {
        fetchSteps();
        function fetchSteps() {
            let route = '';
            console.log(routes);
            console.log(routesState);
            // let steps = [];
            // routesState.forEach(routeState => {
            //     route = routes.find(route => route.pathname === routeState);
            //     steps.push({
            //         route: route.pathname,
            //         name: route.name
            //     });
            // });
            setSteps(steps);
        };
    }, [routesState])


    if (steps.length < 2) return null;
    return (
        <Box sx={{
            display: { xl: 'flex', xs: 'none' },
            width: '200px'
        }}>
            <Stepper activeStep={activeStep} orientation='vertical'>
                {steps.map((step, index) => (
                    <Step key={step.route} completed={false} active={index === steps.length - 1}>
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