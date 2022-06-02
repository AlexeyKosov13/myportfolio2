
import { useContext } from 'react';
import Header from './components/Header/Header'
import './App.css';
import Section from './components/Section/Section';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Toggle from './components/Toggle/Toggle';
import { ThemeContext } from './context';



function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{background:darkMode? 'radial-gradient( #113279, #010101)':'radial-gradient( #ffffff, #cfdaff)', color:darkMode && 'white'}}>
      <Toggle />
      <Header />
      <Section />
      <Projects /> 
      <Technologies />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
