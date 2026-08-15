import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { motion } from 'framer-motion';
import { heroImage } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 10 },
        pb: { xs: 8, md: 10 },
        overflow: 'hidden',
        bgcolor: 'surface.main',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.2,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            bgcolor: '#6b21a8',
            filter: 'blur(120px)',
            mixBlendMode: 'multiply',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '-10%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            bgcolor: '#7bc2ff',
            filter: 'blur(100px)',
            mixBlendMode: 'multiply',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box
              component={motion.div}
              initial="hidden"
              animate="visible"
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 3 }}
            >
              <Box
                component={motion.div}
                variants={fadeUp}
                custom={0}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: 999,
                  bgcolor: 'rgba(80,0,136,0.05)',
                  color: 'primary.main',
                  border: '1px solid rgba(80,0,136,0.1)',
                }}
              >
                <StarIcon sx={{ fontSize: 16 }} />
                <Typography variant="overline">Excellence in Motion</Typography>
              </Box>

              <Typography
                component={motion.h1}
                variants={fadeUp}
                custom={1}
                variant="h1"
                sx={{ fontSize: { xs: '32px', md: '48px' }, lineHeight: { xs: '40px', md: '56px' } }}
              >
                Professional Services{' '}
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    background: 'linear-gradient(135deg, #500088, #006399)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Designed Around Your Business
                </Box>
              </Typography>

              <Typography
                component={motion.p}
                variants={fadeUp}
                custom={2}
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 560 }}
              >
                From corporate and healthcare catering to event management and customized service
                solutions, Jaasiel helps organizations deliver better experiences through reliable,
                professional, and scalable services.
              </Typography>

              <Box
                component={motion.div}
                variants={fadeUp}
                custom={3}
                sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, width: { xs: '100%', sm: 'auto' }, mt: 1 }}
              >
                <Button variant="contained" color="primary" size="large" href="#contact">
                  Request a Service
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#services"
                  sx={{ borderColor: 'outline.main', color: 'text.primary', '&:hover': { bgcolor: 'surfaceVariant' } }}
                >
                  Explore Our Services
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              sx={{ position: 'relative', mt: { xs: 6, lg: 0 } }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px -2px rgba(30,41,59,0.05)',
                  aspectRatio: '4 / 3',
                }}
              >
                <Box
                  component="img"
                  src={heroImage}
                  alt="Corporate catering event setup"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(80,0,136,0.2), transparent)',
                    mixBlendMode: 'overlay',
                  }}
                />
              </Box>

              <Paper
                elevation={3}
                sx={{
                  position: 'absolute',
                  bottom: -32,
                  left: -32,
                  p: 3,
                  borderRadius: 3,
                  maxWidth: 240,
                  display: { xs: 'none', md: 'block' },
                  bgcolor: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.4)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      bgcolor: 'secondary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#004f7b',
                    }}
                  >
                    <TrendingUpIcon />
                  </Box>
                  <Box>
                    <Typography variant="overline" color="text.secondary">
                      Service Quality
                    </Typography>
                    <Typography variant="h3">99.8%</Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
