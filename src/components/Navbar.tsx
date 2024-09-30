import { navigation } from "../constants/";
import { caffucinho } from "../assets/";

const Navbar = () => {
  return (
    <>
      <div className="fixed flex items-center justify-between top-0 left-0 w-full h-[6.375rem] bg-white drop-shadow-xl">
        <div className="w-[1440px] mx-auto flex items-center justify-between">
          <a href="#" className="flex flex-col items-center">
            <img src={caffucinho} alt="Caffucinho" />
            <h1 className="text-xl font-bold text-color-brown-400">Cat Café</h1>
          </a>
          <nav className="flex gap-1">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="px-4 pt-2 pb-1 border-solid border-2 font-extrabold text-xl border-color-brown-100 rounded-full hover:bg-color-brown-100 hover:text-color-white duration-200"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
