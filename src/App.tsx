import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div style={{ margin: '100px 0' }}> {/* Add margin-top equal to the height of the Navbar */}
        <Outlet />
      </div>  
      <Footer />
    </>
  );
}

export default App;
