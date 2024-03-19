import React from 'react';
import { Card, Overlay, Button, Text } from '@mantine/core';
import classes from './ImageActionBanner.module.css';

export function ImageActionBanner() {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
        Every picture tells a story
        </Text>

        <Text size="sm" className={classes.description}>
        Life is like a camera. Focus on what's important, capture the good times, develop from the negatives, and if things don't work out, take another shot.
        </Text>

        {/* <Button className={classes.action} variant="white" color="dark" size="xs">
          Book now
        </Button> */}
      </div>
    </Card>
  );
}
