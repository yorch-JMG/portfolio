import {Navbars} from '../components/navbars';
import {MainHero} from '../components/mainHero';
import {SummarySection} from '../components/summarySection';

export default function Welcome() {
  return (
    <div className="max-w-3xl mx-auto z-20">
      <Navbars />
      <MainHero />
      <SummarySection />
    </div>
  );
}
