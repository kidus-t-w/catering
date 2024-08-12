import {
  EventTypesContainer,
  SectionTitle,
  EventGrid,
  EventItem,
  EventImage,
  EventOverlay,
  EventTitle,
  LearnMoreButton
} from './EventTypes.styles';

const EventTypes = () => {
  const events = [
    {
      title: 'Weddings',
      image: '/assets/eventTypes/events.png'
    },
    {
      title: 'Parties & Social Events',
      image: '/assets/eventTypes/events.png'
    },
    {
      title: 'Corporate Events',
      image: '/assets/eventTypes/events.png'
    }
  ];

  return (
    <EventTypesContainer>
      <SectionTitle>Event Types</SectionTitle>
      <EventGrid>
        {events.map((event, index) => (
          <EventItem key={index}>
            <EventImage src={event.image} alt={event.title} />
            <EventOverlay>
              <EventTitle>{event.title}</EventTitle>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </EventOverlay>
          </EventItem>
        ))}
      </EventGrid>
    </EventTypesContainer>
  );
};

export default EventTypes;
