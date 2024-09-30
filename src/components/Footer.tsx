import { navigation } from "../constants";
import { logocaffucinho } from "../assets";

const Footer = () => {
  return (
    <>
      <section className="bg-color-brown-100 py-8">
        <div className="w-[1440px] mx-auto">
          <div className="flex justify-between items-center">
            <a href="">
              <img
                src={logocaffucinho}
                alt="Logo caffucinho"
                className="h-48"
              />
            </a>
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="text-center text-color-white text-xl hover:underline"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
