import CallToAction from "../components/CallToAction/CallToAction.component";
import Events from "../components/Events/Events.component";
// import EventTypes from "../components/EventTypes/EventTypes.component";
import GetToKnowUs from "../components/GetToKnowUs/GetToKnowUs.component";
import Hero from "../components/Hero/Hero.component";
import Services from "../components/OurServices/Services.components";
import Pictures from "../components/Pictures/Pictures.component";

function Home() {
  return (
    <>
      <Hero />
      <GetToKnowUs />
      <Services />
      <Events/>
      {/* <EventTypes/> */}
      <Pictures/>
      <CallToAction/>
    </>
  );
}

export default Home;
