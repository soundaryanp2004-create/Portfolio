import Hero from '../components/Hero';
import CapabilityStrip from '../components/CapabilityStrip';
import SelectedWork from '../components/SelectedWork';
import OtherProjects from '../components/OtherProjects';
import About from '../components/About';
import MyApproach from '../components/MyApproach';
import DesignProcess from '../components/about/DesignProcess';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <SelectedWork />
      <OtherProjects />
      <About />
      <MyApproach />
      <DesignProcess />
      <Contact />
    </>
  );
}
