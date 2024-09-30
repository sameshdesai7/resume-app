import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography, Tooltip } from '@mui/material';

const steps = [
  {
    label: 'Start at WVU',
    tooltip: 'Starting my journey at West Virginia University'
  },
  {
    label: 'Learned General Programming concepts & practices',
    tooltip: ''
  },
  {
    label: 'InTech Solutions Internship',
    tooltip: 'My first internship experience'
  },
  {
    label: 'First Angular Web Application',
    tooltip: 'My first web development project'
  },
  {
    label: 'Travel Abroad',
    tooltip: 'Spent two weeks traveling in the Amafi Coast. This included Italy, Spain, and France.'
  },
  {
    label: '\'SuggesTunes\' React Web Application',
    tooltip: 'Developed a web application for music suggestions'
  },
  {
    label: 'Eagle Research Internship',
    tooltip: 'Spent the summer migrating a Visual Basic Web Application to a React/.NET stack.'
  },
  {
    label: 'PRT Telematics System Capstone Project',
    tooltip: 'Developed a telematics system for the PRT'
  },
  {
    label: 'Graduate WVU',
    tooltip: 'Planned graduation from West Virginia University December 2024.'
  }
];

export default function customTimeline() {
  return (
    <Box sx={{ width: '100%'}}>
      <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px'}}>Timeline</Typography>
      <Stepper activeStep={steps.length-2} alternativeLabel sx={{ p: 0 }}>
        {steps.map((step) => (
          <Step key={step.label}>
            <Tooltip title={""}>
              <StepLabel>{step.label}</StepLabel>
            </Tooltip>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
