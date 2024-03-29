import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./Pages/Header/Header";
import {Home} from "./Pages/Home/Home"
import {Services} from "./Pages/Home/components/Services/Services";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Footer} from "./Pages/Footer/Footer";


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
                        <Route path='/services' element={<Services />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;