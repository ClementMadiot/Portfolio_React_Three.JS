import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Header,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-main">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center mb-20">
          <Navbar />
          <Header />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
