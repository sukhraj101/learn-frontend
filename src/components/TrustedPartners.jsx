import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const partnerLogosGroup1 = [
  { src: '/logos/01.png', alt: 'NVIDIA' },
  { src: '/logos/02.png', alt: 'Coca Cola' },
  { src: '/logos/03.png', alt: 'Apple' },
  { src: '/logos/04.png', alt: 'GitLab' },
  { src: '/logos/05.png', alt: 'OpenAl' },
  { src: '/logos/06.png', alt: 'Google' },
  { src: '/logos/07.png', alt: 'DATADOG' },
  { src: '/logos/09.png', alt: 'stripe' },
  { src: '/logos/10.png', alt: 'Shopify' },
];

const partnerLogosGroup2 = [
  { src: '/logos/11.svg', alt: 'Canva' },
  { src: '/logos/12.png', alt: 'NASA' },
  { src: '/logos/13.png', alt: 'Figma' },
  { src: '/logos/14.png', alt: 'Tesla' },
  { src: '/logos/15.png', alt: 'Spotify' },
  { src: '/logos/16.png', alt: 'Nike' },
  { src: '/logos/17.png', alt: 'Palantir' },
  { src: '/logos/18.png', alt: 'airbnb' },
  { src: '/logos/19.png', alt: 'NESPRESSO' },
];

const TrustedPartners = () => {
  return (
    <Container className="custom" sx={{ marginTop: 'auto', marginBottom: '2rem' }}>
      <Typography
        variant="body"
        component="p"
        sx={{ marginBottom: 1.5, color: '#8d8d8d', fontSize: '12px' }}
      >
        Trusted partners:
      </Typography>
      <Box>
        <div className="client-logos-wrapper">
          <div className="client-logos">
            {partnerLogosGroup1.map(({ src, alt }, index) => (
              <img
                key={index}
                loading="lazy"
                src={src}
                alt={alt}
                className="partner__logo"
              />
            ))}
          </div>
          <div className="client-logos">
            {partnerLogosGroup2.map(({ src, alt }, index) => (
              <img
                key={index}
                loading="lazy"
                src={src}
                alt={alt}
                className="partner__logo"
              />
            ))}
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default TrustedPartners;
