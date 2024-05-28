import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./Pages/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Services } from "./Pages/Home/components/Services/Services";
import { Footer } from "./Pages/Footer/Footer";
import { ContactUs } from "./Pages/Home/components/Contact Us/ContactUs";
import { Login } from "./Pages/Login/Login";
import { Profile } from "./Pages/Profile/Profile";
import { Dashboard } from "./Pages/Dashboard/Dashboard";

function App() {

  return (
    <Router>
      <div className='App'>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
