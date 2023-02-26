import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
} from '@mui/material';

const VerticalRouteStepper = () => {
    const router = useRouter();
    const [pages, setPages] = useState([]);
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


    if (pages.length < 3) return null;
    return (
        <Box>
            <Stepper activeStep={activeStep} orientation='vertical'>
                {pages.slice(1).map((page, index) => (
                    <Step key={page} completed={false} active={index === pages.slice(1).length - 1}>
                        <StepLabel>
                            {page}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box >
    );
};

export default VerticalRouteStepper;