import { socials } from "../constants/";
import { gato } from "../assets/";

const Inicio = () => {
  return (
    <>
      <section id="inicio" className="w-[1440px] mx-auto mt-[6.375rem]">
        <div className="flex justify-between items-center gap-10">
          <img src={gato} alt="Gato" />
          <div className="flex flex-col gap-10">
            <p className="w-140 text-color-brown-100 font-cherry text-center text-6xl">
              Você não pode comprar amor, mas pode{" "}
              <i className="not-italic text-color-brown-200">resgatar</i>!
            </p>
            <div className="flex justify-between text-2xl">
              <a
                href=""
                className="w-60 pt-2 pb-1 rounded-full bg-color-brown-100 text-color-white font-extrabold text-center uppercase hover:bg-color-brown-200 duration-200"
              >
                Entrar
              </a>
              <a
                href=""
                className="w-60 pt-2 pb-1 rounded-full bg-color-brown-100 text-color-white font-extrabold text-center uppercase hover:bg-color-brown-200 duration-200"
              >
                Cadastrar
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-color-brown-100 w-8 h-8 rounded-full"></div>
            <div className="bg-color-brown-200 w-8 h-8 rounded-full"></div>
            <div className="bg-color-brown-300 w-8 h-8 rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-2">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex w-12 h-12 items-center justify-center border-solid border-2 border-color-brown-100 rounded-full"
            >
              <img src={item.icon} width={24} height={24} alt={item.title} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Inicio;
