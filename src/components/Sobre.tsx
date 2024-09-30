import { catcafe, timeline } from "../assets/";

const Sobre = () => {
  return (
    <>
      <section id="sobre" className="w-[1440px] mx-auto mt-20">
        <h1 className="font-cherry text-5xl text-color-brown-100">
          O Caffucinho
        </h1>
        <div className="flex gap-8">
          <img src={catcafe} alt="Cat-café" />
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-cherry text-color-brown-200">
              o que é um cat café?
            </h2>
            <p className="text-2xl font-semibold leading-10 text-justify">
              Os chamados cat cafés são cafeterias que unem amor ao café e,
              também, afeição pelos gatos, colocando os frequentadores para
              interagirem com os felinos enquanto consomem a bebida. Apesar de o
              conceito ter ganho popularidade recentemente, ele já existe há
              pelo menos 20 anos.
            </p>
          </div>
        </div>
      </section>
      <section className="w-[1440px] mx-auto mt-20">
        <h1 className="font-cherry text-5xl text-color-brown-100 text-center">
          Como funciona?
        </h1>
        <img src={timeline} alt="Linha do Tempo" className="mx-auto mt-12" />
        <div className="flex justify-between mt-6 mx-auto w-[1140px]">
            <div className="w-44">
                <h2 className="text-center text-color-brown-100 font-extrabold text-lg">Ache seu amigo</h2>
                <p className="text-center text-color-brown-400 font-bold text-lg">escolha um gatinho da nossa lista</p>
            </div>
            <div className="w-44">
                <h2 className="text-center text-color-brown-100 font-extrabold text-lg">Conheça ele</h2>
                <p className="text-center text-color-brown-400 font-bold text-lg">agende uma visita</p>
            </div>
            <div className="w-44">
                <h2 className="text-center text-color-brown-100 font-extrabold text-lg">Leve para o seu lar</h2>
                <p className="text-center text-color-brown-400 font-bold text-lg">continue o processo de adoção</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
