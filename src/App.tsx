import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar.component";
import Footer from "./components/common/Footer/Footer.component";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div style={{marginTop: '80px'}}></div>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
