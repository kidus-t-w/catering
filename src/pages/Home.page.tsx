import Events from "../components/Events/Events.component";
import EventTypes from "../components/EventTypes/EventTypes.component";
import GetToKnowUs from "../components/GetToKnowUs/GetToKnowUs.component";
import Hero from "../components/Hero/Hero.component";
import Services from "../components/OurServices/Services.components";

function Home() {
  return (
    <>
      <Hero />
      <GetToKnowUs />
      <Services />
      <Events/>
      <EventTypes/>
    </>
  );
}

export default Home;
