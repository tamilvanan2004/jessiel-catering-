import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedIcon from '@mui/icons-material/Verified';
import SettingsIcon from '@mui/icons-material/Settings';
import SyncIcon from '@mui/icons-material/Sync';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { motion } from 'framer-motion';
import { aboutHighlights, aboutImage } from '../data/content';

const iconMap = { work: WorkIcon, verified: VerifiedIcon, settings: SettingsIcon, sync: SyncIcon };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'surface.main' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, lg: 5 }} sx={{ order: { xs: 2, lg: 1 } }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              sx={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  aspectRatio: '3 / 4',
                  boxShadow: '0 4px 20px -2px rgba(30,41,59,0.05)',
                }}
              >
                <Box
                  component="img"
                  src={aboutImage}
                  alt="Jaasiel manager reviewing operations in a modern kitchen"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 7 }} sx={{ order: { xs: 1, lg: 2 } }}>
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <Typography variant="h2">We Make Business Services Simple</Typography>
              <Typography variant="body2" color="text.secondary">
                At Jaasiel, we understand that exceptional service is the backbone of any successful
                operation. We combine deep industry expertise with innovative approaches to deliver
                tailored solutions that exceed expectations.
              </Typography>

              <Grid container spacing={3} sx={{ mt: 1 }}>
                {aboutHighlights.map((h) => {
                  const Icon = iconMap[h.icon];
                  return (
                    <Grid size={{ xs: 12, sm: 6 }} key={h.title}>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            bgcolor: 'rgba(80,0,136,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {Icon && <Icon sx={{ color: 'primary.main', fontSize: 20 }} />}
                        </Box>
                        <Box>
                          <Typography variant="h3" sx={{ fontSize: '16px', mb: 0.5 }}>
                            {h.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {h.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>

              <Paper
                variant="outlined"
                sx={{ mt: 3, p: 3, borderRadius: 3, borderColor: 'rgba(207,194,212,0.3)' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <PsychologyIcon sx={{ color: 'secondary.main' }} />
                  <Typography variant="h3" sx={{ fontSize: '18px' }}>
                    Building a Smarter Future with AI
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  We are actively exploring how the intersection of human expertise and artificial
                  intelligence can elevate service delivery, streamline operations, and create more
                  predictive, responsive environments.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}