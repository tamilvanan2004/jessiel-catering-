import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import StepConnector from '@mui/material/StepConnector';
import Paper from '@mui/material/Paper';

import { motion } from 'framer-motion';
import { process } from '../data/content';

const CustomConnector = (props) => (
  <StepConnector
    {...props}
    sx={{
      display: {
        xs: 'none',
        md: 'block',
      },

      '&.MuiStepConnector-alternativeLabel': {
        top: 24,
        left: 'calc(-50% + 24px)',
        right: 'calc(50% + 24px)',
      },

      '& .MuiStepConnector-line': {
        borderColor: 'rgba(207,194,212,0.5)',
        borderTopWidth: 2,
        borderRadius: 1,
      },
    }}
  />
);

const CustomStepIcon = (props) => {
  const { active, completed, icon } = props;

  return (
    <Box
      sx={{
        width: 52,
        height: 52,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        fontSize: '18px',
        fontWeight: 700,
        color: active || completed ? 'common.white' : 'text.secondary',
        bgcolor:
          active || completed
            ? 'primary.main'
            : 'background.paper',
        border: '2px solid',
        borderColor:
          active || completed
            ? 'primary.main'
            : 'rgba(207,194,212,0.7)',
        boxShadow: active
          ? '0 0 0 8px rgba(80,0,136,0.10)'
          : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {icon}
    </Box>
  );
};

export default function Process() {
  return (
    <Box
      id="process"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'surfaceContainerLow.main',
      }}
    >
      <Container maxWidth="xl">
        {/* Section heading */}
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 720,
            mx: 'auto',
            mb: { xs: 6, md: 9 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            How We Work
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Our proven process for delivering exceptional service experiences
            from the first conversation to successful completion.
          </Typography>
        </Box>

        {/* Desktop and mobile stepper */}
        <Stepper
          alternativeLabel
          orientation="vertical"
          connector={<CustomConnector />}
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          {process.map((step, index) => (
            <Step
              key={step.num}
              active
              expanded
            >
              <StepLabel
                StepIconComponent={CustomStepIcon}
                sx={{
                  '& .MuiStepLabel-label': {
                    mt: 0.5,
                    fontWeight: 700,
                    color: 'text.primary',
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                  }}
                >
                  {step.title}
                </Typography>
              </StepLabel>

              <StepContent
                sx={{
                  ml: 1.25,
                  borderColor: 'rgba(207,194,212,0.5)',
                  pb: index === process.length - 1 ? 0 : 4,
                }}
              >
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  elevation={0}
                  sx={{
                    p: 3,
                    mt: 1,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'rgba(207,194,212,0.35)',
                    bgcolor: 'background.paper',
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Paper>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        <Stepper
          alternativeLabel
          activeStep={process.length - 1}
          connector={<CustomConnector />}
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            alignItems: 'stretch',
          }}
        >
          {process.map((step, index) => (
            <Step
              key={step.num}
              completed
              sx={{
                flex: 1,
                px: 1,
              }}
            >
              <StepLabel
                StepIconComponent={CustomStepIcon}
                sx={{
                  '& .MuiStepLabel-label': {
                    mt: 1.5,
                    color: 'text.primary',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {step.title}
                </Typography>
              </StepLabel>

              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                elevation={0}
                sx={{
                  mt: 2,
                  p: 3,
                  minHeight: 150,
                  borderRadius: 3,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'rgba(207,194,212,0.35)',
                  bgcolor: 'background.paper',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  {step.desc}
                </Typography>
              </Paper>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Box>
  );
}