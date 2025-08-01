

function Main(){

    return (

        <>
            <div className="main">
                <div className="titleAndPresentation">
                    <h2>Innovación y Calidad de Telas!</h2>
                    <p>
                        Expertos en la creación de telas en distintos tipos de algodón. Nuestra empresa se dedica a ofrecer productos de alta calidad, combinando tecnología avanzada y procesos sostenibles para garantizar telas resistentes, suaves y versátiles. Nos comprometemos con la excelencia en cada etapa de producción, brindando soluciones textiles que se adaptan a las necesidades de nuestros clientes y al mercado actual.
                    </p>
                </div>
                <div className="textil__image-container">
                    <div className="cube__form">
                        <img src={`${import.meta.env.BASE_URL}images/maquina_image.jpg`} alt="Logo" />
                    </div>
                </div>
            </div>
            <div className="div__linea-para-hacer-un-corte-lol"></div>
        </>

    )

}


export default Main
