import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Header = ({ toggleSidebar }: any) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const renderThemeCurrentButton = (): JSX.Element => {
    let currentButtonTheme: JSX.Element =
      currentTheme === "dark" ? <SunButton /> : <MoonButton />;

    return currentButtonTheme;
  };

  const MoonButton = (): JSX.Element => {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="bg-slate-100 p-2 rounded-xl"
      >
        <RiMoonFill size={25} color="black" />
      </button>
    );
  };

  const SunButton = (): JSX.Element => {
    return (
      <button
        onClick={() => setTheme("light")}
        className="p-2 rounded-xl light:bg-gray-600  dark:bg-teal-600 "
      >
        <RiSunLine size={25} color="black" />
      </button>
    );
  };

  const NetworkIcons = (): JSX.Element => {
    return (
      <nav className="text-xl flex justify-between gap-1 p-2 light:text-gray-600  dark:text-teal-600 w-full">
        <Link
          href={"https://www.linkedin.com/in/oclecio-alves-34417b260/"}
          target="_blanck"
        >
          <AiFillLinkedin size={32} />
        </Link>
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=5511943038652&text&type=phone_number&app_absent=0"
          }
          target="_blanck"
        >
          <AiOutlineWhatsApp size={32} />
        </Link>
      </nav>
    );
  };

  // return (
  //     <header className=" md:px-20 lg:px-40 flex justify-center py-4">
  //         <div className="text-center">
  //             <strong className="text-5xl font-extralight text-teal-600">Oclecio Alves Sousa</strong>
  //         </div>
  //         <nav className="flex flex-1 absolute right-10 gap-20">
  //             <NetworkIcons />
  //             {renderThemeCurrentButton()}
  //         </nav>
  //     </header>
  // );
  return (
    <nav className="light:bg-gray-50 dark:bg-gray-800 fixed top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href={"/"} className="text-[24px] font-bold">
          Oclecio Alves Sousa
        </Link>
        <div className="hidden md:flex gap-6 font-bold">
          <Link href={"/"} className="hover:text-gray-200">
            Inicio
          </Link>
          <Link href={"/curriculo"} className="hover:text-gray-200">
            Currículo
          </Link>
          <Link href={"/portfolio"} className="hover:text-gray-200">
            Portfolio
          </Link>
          <Link href={"/contato"} className="hover:text-gray-200">
            Contato
          </Link>
        </div>
        {renderThemeCurrentButton()}

        <div className="md:hidden text-[24px]" onClick={toggleSidebar}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
