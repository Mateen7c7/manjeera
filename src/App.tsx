import './App.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Doctors from './sections/Doctors';
import Specialities from './sections/Specialities';
import Pharmacy from './sections/Pharmacy';
import WhyChooseUs from './sections/WhyChooseUs';
import VisitHospital from './sections/VisitHospital';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Doctors />
        <Specialities />
        <Pharmacy />
        <WhyChooseUs />
        <VisitHospital />
      </main>
      <Footer />
    </div>
  );
}

export default App;
