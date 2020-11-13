import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Descricao from './Components/Descrição';
import Abordagens from './Components/Abordagens';
import Atendimento from './Components/Atendimento';
import Consulta from './Components/Consulta';
import React, { useRef } from 'react';


function App() {

  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=558420305181"><img src="WhatsApp-icone.png" id="fixedbutton" /></a>
      <a href="tel:8420305181"><img src="telefone-icon-27.jpg" id="fixedbuttonTel" /></a>
      <header>
        <Navbar ></Navbar>
      </header>
      <section className="pt-2 mt-2" key="teste">
        <Descricao id="melhorFormaSection"> </Descricao>
      </section >
      <section className="pb-5 mb-5">
        <Abordagens></Abordagens>
      </section>
      <section >
        <Atendimento></Atendimento>
      </section>

      <section>
        <Consulta></Consulta>
      </section>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
