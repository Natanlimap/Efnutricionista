function Consulta() {


  return (
    <div class="fluid-container" id="backgroundConsulta" id="contato">
      <div class="row no-gutters reverse" >
        <div class="col-lg">
          <div class="menu-image h-100 d-flex align-items-end">
            <img id="consultaImage" src="Consulta.png" class="img-fluid" alt="menu" />
          </div>
        </div>

        <div class="col-lg d-flex flex-column align-items-center color-background">
          <div className="py-5 px-4 whiteBackground w-100"> </div>

          <div class="menu-text flex-grow-1 pr-5">
            <div className="color-background w-75 consultaP " >
              <div className="py-5 mt-5 px-5 ">
                <h3 className="w-75 pb-4">CONTATO</h3>
                <h4> Espaço Fisio Comfort Tirol</h4>
                <p>Av.Rodrigues Alves, 1272. | Natal/RN 08 ás 18h | 59020-255</p>
                <h4> Espaço Fisio Comfort Lagoa Nova</h4>
                <p>Av.Amintas Barros, 2537 - Lagoa Nova | Natal/RN | 08h às 22h | 59025-250 </p>
                <div className="row">
                  <img src="WhatsApp-icone.png" style={{ width: "8%", height: "8%", maxHeight: "40px", maxWidth: "40px", marginRight: "10px", alignSelf: "start" }}></img>
                  <p>(84) 2030-5181</p>
                  <p >@espacofisiocomfort</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consulta;
