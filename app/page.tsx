import Image from "next/image";
import clecio from "../public/images/clecio.jpg";

export default function Home(): JSX.Element {
  const HomeApresentation = (): JSX.Element => {
    return (
      <div className="text-center w-3/5 h-96 flex flex-col justify-center gap-5">
        <h2 className="text-3xl py-1 text-teal-600 font-medium md:text-3xl">
          Desenvolvedor Full Stack.
        </h2>

        <p className="text-md py-3 leading-8 ligth:text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
          Transformando ideias em realidade digital através da magia do código:
          Explore meu mundo como desenvolvedor full stack e descubra como dou
          vida a projetos com inovação e paixão.
        </p>
      </div>
    );
  };

  const HomeImageProfile = () => {
    return (
      <figure className="w-2/5">
        <Image
          src={clecio}
          alt="clecio"
          className="object-cover mx-auto rounded-full w-full h-full overflow-hidden md:h-96 md:w-96 shadow-lg shadow-green-900"
          width={800}
          height={800}
        />
      </figure>
    );
  };

  return (
    <section className="p-6 h-full flex flex-col items-center justify-center md:flex px-0 md:px-10 light:bg-gray-50 dark:bg-gray-800">
      <HomeImageProfile />
      <HomeApresentation />
    </section>
  );
}
