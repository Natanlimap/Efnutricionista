function Cards() {
    return (
        <div className="d-flex flex-row flex-wrap justify-content-center mb-2" id="serviços">
            <div className="card mx-2 mb-2" id="card">
                <div className="card-body d-flex flex-column">
                        <h4 className="card-title order-1" id="avaliacao">AVALIAÇÃO</h4>
                    <p className="card-text order-2">Para dar início ao atendimento clínico personalizado, se efetua a avaliação física em
                    conjunto com a anamnese alimentar, ambas realizadas para que o profissional consiga
                    compreender de forma exata a composição corporal e os hábitos alimentares do paciente. </p>
                    <img className="ml-auto mr-auto order-3" src="humor.png"></img>
                </div>
            </div>
            
            <div className="card mx-2 mb-2" id="card">
                <div className="card-body d-flex flex-column">
                        <h4 className="card-title order-1">CONDUTA NUTICIONAL INDIVIDUALIZADA</h4>
                    <p className="card-text order-2">A conduta nutricional acontece a partir dos horários, objetivos e possíveis patologias do paciente. É durante essa etapa que ocorre a avaliação bioquímica, tendo como base
                    exames laboratoriais, checando os aspectos sobre saúde física, digestiva e emocional.
 </p>
                    <img className="ml-auto mr-auto order-3" src="estomago.png" id="estomago"></img>

                </div>

            </div>
            <div className="card mx-2 mb-2" id="card">
                <div className="card-body d-flex flex-column">
                        <h4 className="card-title order-1" id="intervencao">INTERVENÇÃO NUTRICIONAL</h4>
                    <p className="card-text order-2">O plano alimentar é construído de acordo com o diagnostico obtido através das
                    avaliações anteriores, levando em consideração os hábitos do paciente, histórico clínico,
equando preciso, a suplementação para o alcance das metas. </p>
                    <img className="ml-auto mr-auto order-3" id="garfo" src="garfo.png"></img>

                </div>
            </div>
            <div className="card mx-2 mb-2" id="card">
                <div className="card-body d-flex flex-column">
                        <h4 className="card-title order-1" id="acompanhamento">ACOMPANHAMENTO</h4>
                    <p className="card-text order-2">O monitoramento é realizado para garantir o apoio durante a mudança de hábitos,
                    melhoria de possíveis sintomas ocasionados por patologias e adequação ao plano
alimentar proposto.  </p>
                    <img className="ml-auto mr-auto order-3" id="msg" src="msg.png"></img>

                </div>
            </div>
        </div>
    )
}
export default Cards;