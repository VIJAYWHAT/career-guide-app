import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import DepartmentDetail from "./pages/DepartmentDetail";
import JobOpportunities from "./pages/JobOpportunities";
import Resources from "./pages/Resources";
import CareerQuiz from "./pages/CareerQuiz";
import Contact from "./pages/Contact";

function App() {
  return (
<<<<<<< HEAD
    <Router basename={import.meta.env.BASE_URL}>
=======
    <Router basename='/'>
>>>>>>> a0a939aa4988a5751decda98a91d4a37ef0cc8c5
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/departments' element={<Departments />} />
            <Route path='/department/:id' element={<DepartmentDetail />} />
            <Route path='/jobs' element={<JobOpportunities />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/quiz' element={<CareerQuiz />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
