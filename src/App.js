
import Header from './components/Header/Header';
import './App.css';
import Section from './components/Section/Section';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contacts from './components/Contacts/Contacts';



function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Projects /> 
      <Technologies />
      <Contacts />
    </div>
  );
}

export default App;
