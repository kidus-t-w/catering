import { motion } from "framer-motion";
import {
  EventsContainer,
  EventsTitle,
  EventGrid,
  EventItem,
  EventImage,
  EventTitle,
  EventDescription,
} from "./Events.styles";

const Events = () => {
  const events = [
    {
      title: "Wedding",
      description:
        "We will be providing you very elegant and memorable service for one of the most memorable days of your life",
      image: "/assets/events/wedding.png",
    },
    {
      title: "Conferences",
      description:
        "We offer a variety of catering services for your company’s periodic conferences that add value to your conference.",
      image: "/assets/events/conference.jpg",
    },
    {
      title: "Large Gatherings",
      description:
        "Serving large crowds is difficult for everyone, why don’t you focus on your event, let’s manage your participant’s needs.",
      image: "/assets/events/large_gathering.jpg",
    },
    {
      title: "Diplomatic Events",
      description:
        "We will serve you with your nation’s cuisine with the highest quality of service, whether it is your National Day or another event for the nation you represent.",
      image: "/assets/events/diplomat_event.jpg",
    },
    {
      title: "Personal Events",
      description:
        "Make a day out of the graduation, birthday, bridal shower, or any private event with your loved ones with epic service, let’s help you do achieve that.",
      image: "/assets/events/personal_event.jpg",
    },
    {
      title: "Corporate Events",
      description:
        "For business events such as employee days, training, company anniversaries, and product or service launches, we deliver excellent service.",
      image: "/assets/events/corporate_event.jpg",
    },
  ];

  return (
    <EventsContainer>
      <EventsTitle>What is your next event?</EventsTitle>
      <EventGrid>
        {events.map((event, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <EventItem key={index}>
              <EventImage src={event.image} alt={event.title} />
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
            </EventItem>
          </motion.div>
        ))}
      </EventGrid>
    </EventsContainer>
  );
};

export default Events;
