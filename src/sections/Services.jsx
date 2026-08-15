import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/content';

export default function Services() {
  return (
    <Box id="services" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: 8 }}
        >
          <Typography variant="h2" sx={{ mb: 2 }}>
            Our Core Services
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Comprehensive service solutions designed to elevate your organizational standards and
            provide exceptional experiences for your people.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, i) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.title}>
              <ServiceCard service={service} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}