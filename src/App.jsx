import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Stylists from './pages/Stylists';
import Gallery from './pages/Gallery';
import JoinUs from './pages/JoinUs';
import BookAppointment from './pages/BookAppointment';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/stylists" element={<Stylists />}>
              <Route path="join" element={<JoinUs />} />
            </Route>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
