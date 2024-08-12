import {
  EventsContainer,
  EventsTitle,
  EventGrid,
  EventItem,
  EventImage,
  EventTitle,
  EventDescription,
} from './Events.styles';

const Events = () => {
  const events = [
    {
      title: 'Wedding',
      description: 'We will be providing you very elegant and memorable service for one of the most memorable days of your life',
      image: '/assets/events/events.png'
    },
    {
      title: 'Conferences',
      description: 'We offer a variety of catering services for your company’s periodic conferences that add value to your conference.',
      image: '/assets/events/events.png'
    },
    {
      title: 'Large Gatherings',
      description: 'Serving large crowds is difficult for everyone, why don’t you focus on your event, let’s manage your participant’s needs.',
      image: '/assets/events/events.png'
    },
    {
      title: 'Diplomatic Events',
      description: 'We will serve you with your nation’s cuisine with the highest quality of service, whether it is your National Day or another event for the nation you represent.',
      image: '/assets/events/events.png'
    },
    {
      title: 'Personal Events',
      description: 'Make a day out of the graduation, birthday, bridal shower, or any private event with your loved ones with epic service, let’s help you do achieve that.',
      image: '/assets/events/events.png'
    },
    {
      title: 'Corporate Events',
      description: 'For business events such as employee days, training, company anniversaries, and product or service launches, we deliver excellent service.',
      image: '/assets/events/events.png'
    }
  ];

  return (
    <EventsContainer>
      <EventsTitle>What is your next event?</EventsTitle>
      <EventGrid>
        {events.map((event, index) => (
          <EventItem key={index}>
            <EventImage src={event.image} alt={event.title} />
            <EventTitle>{event.title}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
          </EventItem>
        ))}
      </EventGrid>
    </EventsContainer>
  );
};

export default Events;
