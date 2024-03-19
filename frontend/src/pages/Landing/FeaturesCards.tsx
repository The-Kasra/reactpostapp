import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from "./FeaturesCards.module.css";

const mockdata = [
  {
    title: 'High-Quality Images',
    description:
      'Experience stunning visuals with high-resolution images that capture every detail and moment beautifully.',
    icon: IconGauge,
  },
  {
    title: 'Collections and Galleries',
    description:
      'Explore curated collections and galleries showcasing a diverse range of themes, styles, and subjects to suit every taste and need.',
    icon: IconUser,
  },
  {
    title: 'Regular Updates and New Content',
    description:
      'Stay up-to-date with the latest additions and updates to our collection, featuring fresh and inspiring content regularly to keep your creativity flowing.',
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
        A picture is worth a thousand words
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
      Capture the moment, cherish the memories.
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      Photography is the only language that can be understood anywhere in the world.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
      <div style={{marginBottom: "150px"}}></div>
    </Container>
  );
}
