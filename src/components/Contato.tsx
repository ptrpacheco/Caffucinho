import { whitesocials } from "../constants";
import { pin, phone } from "../assets";

const Contato = () => {
  return (
    <>
      <section id='contato' className="pt-8 bg-color-brown-300">
        <div className="w-[1440px] mx-auto">
          <h1 className="text-center font-cherry text-color-brown-100 text-5xl">
            Nos contate
          </h1>
          <div className="flex justify-between py-12">
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={pin}
                  width={72}
                  className="fill-color-brown-100"
                  alt="Alfinete de localização"
                />
                <span className="text-2xl font-semibold text-color-white">
                  Rua Galvão Bueno, 707,
                  <br /> Liberdade, São Paulo - SP
                </span>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={phone}
                  width={72}
                  className="fill-color-brown-100"
                  alt="Alfinete de localização"
                />
                <span className="text-2xl font-semibold text-color-white">
                  ** *****-****
                </span>
              </div>
              <div className="flex gap-4">
                {whitesocials.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    className="flex w-16 h-16 items-center justify-center border-solid border-2 border-color-white rounded-full"
                  >
                    <img
                      src={item.icon}
                      width={32}
                      height={32}
                      alt={item.title}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="w-[28rem] flex flex-col gap-4 py-4 px-2 bg-color-white rounded-3xl items-center">
              <input
                type="text"
                id="emailNome"
                placeholder="Nome"
                className="h-16 w-full p-2 border-solid border-2 border-color-brown-200 rounded-3xl text-2xl font-semibold placeholder:text-color-brown-300 placeholder:font-bold placeholder:text-2xl"
              />
              <input
                type="email"
                id="emailEmail"
                placeholder="Email"
                className="h-16 w-full p-2 border-solid border-2 border-color-brown-200 rounded-3xl text-2xl font-semibold placeholder:text-color-brown-300 placeholder:font-bold placeholder:text-2xl"
              />
              <textarea
                id="emailTexto"
                placeholder="Mensagem"
                className="min-h-44 w-full p-2 border-solid border-2 border-color-brown-200 rounded-3xl text-2xl font-semibold placeholder:text-color-brown-300 placeholder:font-bold placeholder:text-2xl resize-none"
              />
              <button
                id="emailEnviar"
                className="px-6 py-2 bg-color-brown-100 rounded-full text-color-white text-2xl font-bold"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
