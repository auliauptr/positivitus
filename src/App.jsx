import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Logotypes from './components/logotypes/Logotypes';
import Services from './components/services/Services';
import CallToAction from './components/callToAction/CallToAction';
import CaseStudies from './components/caseStudies/CaseStudies';
import WorkingProcess from './components/workingProcess/WorkingProcess';
import Team from './components/team/Team';
import Testi from './components/testi/Testi';
import './app.scss';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <>
            <div className='app'>
                <Navbar />
                <Header />
                <Logotypes />
                <Services />
                <CallToAction />
                <CaseStudies />
                <WorkingProcess />
                <Team />
                <Testi />
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default App;
