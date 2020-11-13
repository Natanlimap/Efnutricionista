import { Link } from 'react-scroll'



function Navbar(props) {

  return (
    <div className="navbackground" >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars" ></i>
          </span>
                  </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pr-5 mr-5 pt-5 mt-5">
            <li className="nav-item pr-5 mr-5">
              <Link to="serviços" spy={true} smooth={true} offset={50} duration={500}><a className="nav-link" href="/">Serviços</a></Link>
            </li>

            <li className="nav-item pr-5 mr-5">
              <Link to="atendimento" spy={true} smooth={true} offset={50} duration={500}><a className="nav-link" href="/">Atendimento</a></Link>
            </li>
            <li className="nav-item pr-5 mr-5">
              <Link to="contato" spy={true} smooth={true} offset={50} duration={500}><a className="nav-link" href="/">Contato</a></Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex flex-row flex-wrap justify-content-center pt-5 mt-5" id="navbarPadding">
        <div className="w-75 mt-5 pt-5 ml-auto">
          <p className="w-50 mb-4 pb-4 mt-5 pt-5" id="congregando">Congregando tecnologia de última geração, infraestrutura apropriada e profissionais especializados, garantimos a qualidade de um atendimento humanizado com foco exclusivo nas necessidades do paciente</p>
          <h1 className="w-75 pb-5 mb-5" id="title">REFERÊNCIA EM NUTRIÇÃO</h1>
          <h1 className="w-75 pb-5 mb-5" id="subtitle">SAÚDE E BEM-ESTAR</h1>
        </div>
      </div>
      <div className="d-flex flex-row flex-nowrap justify-content-end pr-5 mr-5">
        <a target="_blank" href="https://www.instagram.com/espacofisiocomfort/?hl=pt-br">
          <img id="insta" src="./insta.png"></img>
        </a>
      </div>
    </div >
  );
}

export default Navbar;
