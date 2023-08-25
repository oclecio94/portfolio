import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <header className="px-10 md:px-20 lg:px-40">
        <nav className="py-10 flex justify-between items-center">
          <h1 className="text-xl font-bold">Oclecio Alves Sousa</h1>
          <ul className="flex items-center">
            <li>
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </li>
            <li>
              <div className="text-xl flex justify-between gap-1 p-2 text-gray-600">
                {/* <AiFillInstagram size={32} /> */}
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
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
