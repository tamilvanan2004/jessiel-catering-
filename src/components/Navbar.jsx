import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navLinks, logoUrl } from '../data/content';

const NAV_HEIGHT = 88;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => (e) => {
    e.preventDefault();
    setActive(href);
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? 'rgba(255,247,254,0.95)' : 'rgba(255,247,254,0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(207,194,212,0.3)',
          transition: 'all 0.3s',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 2, justifyContent: 'space-between' }}>
            <Box
              component="a"
              href="#home"
              onClick={handleNav('#home')}
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}
            >
              <Box component="img" src={logoUrl} alt="Jaasiel Logo" sx={{ height: 40, width: 'auto' }} />
              <Typography
                variant="h2"
                sx={{ fontSize: '24px', color: 'primary.main', display: { xs: 'none', sm: 'block' } }}
              >
                Jaasiel
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navLinks.map((link) => (
                <Typography
                  key={link.href}
                  component="a"
                  href={link.href}
                  onClick={handleNav(link.href)}
                  variant="overline"
                  sx={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: active === link.href ? 'primary.main' : 'text.secondary',
                    fontWeight: active === link.href ? 700 : 600,
                    borderBottom: active === link.href ? '2px solid' : '2px solid transparent',
                    borderColor: active === link.href ? 'primary.main' : 'transparent',
                    pb: 0.5,
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                href="#contact"
                onClick={handleNav('#contact')}
                sx={{ display: { xs: 'none', md: 'inline-flex' } }}
              >
                Request a Service
              </Button>
              <IconButton
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                sx={{ display: { xs: 'inline-flex', lg: 'none' }, color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton onClick={handleNav(link.href)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ mt: 2, px: 2 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                href="#contact"
                onClick={handleNav('#contact')}
              >
                Request a Service
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
