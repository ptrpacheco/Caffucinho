import { gatos2 } from "../assets";

const Adote = () => {
  return (
    <section id="adote" className="w-[1440px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start gap-8">
          <h1 className="w-[26rem] font-extrabold text-5xl leading-relaxed">
            Você pode nos ajudar a encontrar uma família?
          </h1>
          <a
            href=""
            className="px-12 pt-2 pb-1 border-solid border-2 border-color-brown-100 rounded-full hover:bg-color-black hover:text-color-white duration-200 uppercase font-extrabold text-3xl"
          >
            Ver mais
          </a>
        </div>
        <img src={gatos2} alt="" />
      </div>
    </section>
  );
};

export default Adote;
