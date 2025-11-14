import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Summary from './Components/Summary';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setCvData(data.cv))
      .catch(error => console.error('Error loading CV data:', error));
  }, []);

  if (!cvData) return (
    <div className="min-h-screen bg-black  flex items-center justify-center">
      <div className="text-xl">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black
background-color: var(--color-black) p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Header name={cvData.name} title={cvData.title} image={cvData.image}/>
        <Summary summary={cvData.summary} />
        <Experience experience={cvData.experience} />
        <Education education={cvData.education} />
        <Skills skills={cvData.skills} />
        <Contact contact={cvData.contact} />
      </div>
    </div>
  );
}

export default App;
