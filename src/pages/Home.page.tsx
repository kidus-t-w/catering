import Hero from "../components/Hero/Hero";
import AboutUs from '../components/AboutUs/AboutUs';
import Content from '../components/Content/Content'
import Recommended from "../components/Recommended/Recommended";
import WhyUs from "../components/Features/Features";
import { contentData } from "../data/ContentData";
import Catering from "../components/Catering/Catering";
import ProductGrid from "../components/ProductGrid/ProductGrid";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      {contentData.map((item, key) => (
        <Content item={item} key={key}/>
      ))}
      <Recommended/>
      <WhyUs/>
      <Catering/>
      <ProductGrid/>
    </>
  );
}
