import { CTAContainer, CTATitle, CTAText, Button } from "./CallToAction.styles";

const CallToAction = () => {
  return (
    <CTAContainer>
      <CTATitle>Are you looking to plan an event out of state?</CTATitle>
      <CTAText>
        Look no further! A planner for an out of town group looking for an
        authentic local event experience could do no better than reaching out to
        the AA member in their destination city. Food is a key to enjoying the
        convention travel experience, and as the top caterers in their
        respective markets the AA members are supremely well suited to create a
        superb locally or regionally themed event.
      </CTAText>
      <Button to='/contact_us'>Request Catering</Button>
    </CTAContainer>
  );
};

export default CallToAction;
