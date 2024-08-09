import About from "../components/AboutUs/AboutUs";
import Content from "../components/Content/Content";
import { contentData } from "../data/ContentData";
export default function AboutUs() {
  return (
    <div>
      <About />
      {contentData.map((item, key) => (
        <Content item={item} key={key}/>
      ))}
    </div>
  );
}
