import {Navbars} from '../components/navbars';
import {MainHero} from '../components/mainHero';
import {SummarySection} from '../components/summarySection';
import {ContactMeButtonSection} from '../components/contactMeButton';

export default function Welcome() {
  return (
    <div className="max-w-3xl mx-auto z-20 font-main">
      <Navbars />
      <div className='pt-20'>
        <MainHero />
        <SummarySection />
        <ContactMeButtonSection />
      </div>
    </div>
  );
}
