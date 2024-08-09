import { Container, Feature, Icon, Title, Description } from './FeaturesStyles';

const featuresData = [
  {
    icon: '📝', // Replace with your actual icon or SVG
    title: 'PERMITS',
    description:
      'Every truck we book has its relevant State required paperwork and County Health Department permits. We ensure they are always up to date on all their necessary inspections.',
  },
  {
    icon: '🛡️',
    title: 'INSURANCE',
    description:
      'All trucks provide state-mandated insurance. Our compliance team ensures that these policies are always in good standing for your peace of mind.',
  },
  {
    icon: '🔍',
    title: 'HEALTH INSPECTIONS',
    description:
      'From start to finish we promise to make you look like a rock star with minimal effort. You will have the best food trucks in Sacramento working your event and our team is on top of every detail.',
  },
  {
    icon: '🏅',
    title: 'SERVICE & QUALITY',
    description:
      'The SactoMoFo team has over 40 years of combined experience. We’re quick, friendly, and helpful ensuring that your booking process will be fast and easy. We want your event to go flawlessly.',
  },
];

const Features: React.FC = () => {
  return (
    <Container>
      {featuresData.map((feature, index) => (
        <Feature key={index}>
          <Icon>{feature.icon}</Icon>
          <Title>{feature.title}</Title>
          <Description>{feature.description}</Description>
        </Feature>
      ))}
    </Container>
  );
};

export default Features;