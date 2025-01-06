import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import FirstPage from "./Componets/FirstPage";
import SecondPage from "./Componets/SecondPage";


export default function App() {
  const [formData, setFormData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage setFormData={setFormData} />} />
        <Route path="/second" element={<SecondPage formData={formData} setFormData={setFormData}/>} />
      </Routes>
    </Router>
  );
}
