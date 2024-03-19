import { Container } from "@mantine/core";
import { ImageActionBanner } from "./ImageActionBanner";
import { FeaturesCards } from "./FeaturesCards";
import React from 'react';
import { EmailBanner } from "./EmailBanner";

const Landing = () => {
  return (
    <Container>
      <ImageActionBanner />
      <FeaturesCards />
    </Container>
  );
};

export default Landing;
