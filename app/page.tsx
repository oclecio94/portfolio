import Image from "next/image";
import clecio from "../public/images/clecio.jpg";

export default function Home() {
  return (
    <section>
      <div className="text-center p-1">
        <h2 className="text-3xl py-1 text-teal-600 font-medium md:text-3xl">
          Desenvolvedor Full Stack.
        </h2>

        <p className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
          Transformando ideias em realidade digital através da magia do código:
          Explore meu mundo como desenvolvedor full stack e descubra como dou
          vida a projetos com inovação e paixão.
        </p>
      </div>
      <Image
        src={clecio}
        alt="clecio"
        className="object-cover object-top mx-auto rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96"
      />
    </section>
  );
}
