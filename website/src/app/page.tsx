'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hero from '@/components/Hero';
import LogoCollection from '@/components/LogoCollection';
import Features from '@/components/Features';
import { Divider } from '@mui/material';
import Testimonials from '@/components/Testimonials';
import Highlights from '@/components/Highlights';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import type {} from '@mui/material/themeCssVarsAugmentation';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Hero />
        <div>
          <LogoCollection />
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
        </div>
      </Box>
    </Container>
  );
}
