import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { motion } from 'framer-motion';
import video from '../assets/videos/dish.mp4'
// Dummy/sample video for preview — replace with your real dish-making/catering footage later
// For production, self-host this (e.g. put a file in /public/videos/ and use '/videos/hero-dish.mp4')
const heroVideo =video;
const heroVideoPoster =
  'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop';

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
        bgcolor: '#000',
      }}
    >
      {/* Background video */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroVideoPoster}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </Box>

      {/* Dark gradient overlay so text stays readable over the video */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)',
        }}
      />

      {/* Decorative color blobs, dimmed to sit on top of the darkened video */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.15,
          zIndex: 1,
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
            mixBlendMode: 'screen',
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
            mixBlendMode: 'screen',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={7}>
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
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(8px)',
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
                sx={{
                  fontSize: { xs: '32px', md: '48px' },
                  lineHeight: { xs: '40px', md: '56px' },
                  color: '#fff',
                }}
              >
                Professional Services{' '}
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    background: 'linear-gradient(135deg, #c084fc, #7dd3fc)',
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
                sx={{ maxWidth: 560, color: 'rgba(255,255,255,0.85)' }}
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
                  sx={{
                    borderColor: 'rgba(255,255,255,0.6)',
                    color: '#fff',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#fff' },
                  }}
                >
                  Explore Our Services
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Floating stat card now sits on its own, over the video, instead of over an image */}
          <Grid item xs={12} lg={5}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'flex-start', lg: 'flex-end' },
                mt: { xs: 4, lg: 0 },
              }}
            >
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}