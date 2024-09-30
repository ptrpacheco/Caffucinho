import { gatos, paw, gatopegando } from "../assets";

const Servicos = () => {
  return (
    <>
      <img src={gatos} alt="Cinco gatos sentados" className="mx-auto" />
      <section id="servicos" className="bg-color-brown-300 mt-[-8rem] py-8">
        <div className="w-[1440px] mx-auto mt-20">
          <h1 className="text-center font-cherry text-5xl text-color-brown-100">
            Serviços
          </h1>
          <h2 className="my-8 text-center text-2xl font-semibold text-color-white leading-10">
            Nosso catcafe oferece diversos serviços, indo de adoções <br /> a
            compras on-line entregues diratamente na sua residência!
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">adoção</span>
                <img src={paw} width={72} height={72} alt="Pata de gato" />
              </div>
              <div className="flex items-center gap-4">
                <img src={paw} width={72} height={72} alt="Pata de gato" />
                <span className="text-3xl font-bold">produtos tematizados</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">abrigo</span>
                <img src={paw} width={72} height={72} alt="Pata de gato" />
              </div>
            </div>
            <img src={gatopegando} alt="Gato pegando algo" />
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <img src={paw} width={72} height={72} alt="Pata de gato" />
                <span className="text-3xl font-bold">assistência</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">comidas tematizadas</span>
                <img src={paw} width={72} height={72} alt="Pata de gato" />
              </div>
              <div className="flex items-center gap-4">
                <img src={paw} width={72} height={72} alt="Pata de gato" />
                <span className="text-3xl font-bold">reservas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
