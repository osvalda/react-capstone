import Hero from "./Hero";
import About from "./About";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function HomePage() {
    return (
        <div>
          <Hero />
          <Specials />
          <Testimonials />
          <About />
        </div>
      );
    };

export default HomePage;