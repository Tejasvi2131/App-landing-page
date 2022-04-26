import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import aboutimage from './images/Frame.png';
import aboutimage1 from './images/download.png';
import Presentation from './components/Presentation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes with All You Need For Daily Life' button='Get The App'/>
      <About image={aboutimage1} title='Download And Get The App Now' button='Download'/>
      <Presentation/>
      <Contact/>
    </div>
  );
}

export default App;
