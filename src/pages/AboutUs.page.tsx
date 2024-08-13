import AboutUsSection from "../components/AboutUs/AboutUs.component"
import CallToAction from "../components/CallToAction/CallToAction.component"
import Events from "../components/Events/Events.component"
import ItemsSection from "../components/Items/Items.component"

function AboutUs() {
  return (
    <div>
      <AboutUsSection/>
      <Events/>
      <ItemsSection/>
      <CallToAction/>
    </div>
  )
}

export default AboutUs