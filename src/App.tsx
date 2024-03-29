import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App
