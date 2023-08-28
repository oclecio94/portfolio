import Image, { StaticImageData } from "next/image";
import web1 from "../../public/images/web1.png";
import web2 from "../../public/images/web2.png";
import web3 from "../../public/images/web3.png";
import web4 from "../../public/images/web4.png";
import web5 from "../../public/images/web5.png";
import web6 from "../../public/images/web6.png";
import Link from "next/link";

interface IPropJob {
  Url: string;
  Title: string;
  Description: string;
  StaticImage: StaticImageData;
}

const Job: React.FC<IPropJob> = ({ Url, Title, Description, StaticImage }) => {
  return (
    <div className="basis-1/3 flex-1 hover:scale-105 flex flex-col">
      <Link href={Url} target="_blank">
        <Image
          className="rounded-lg object-cover shadow-2xl w-40"
          // width={80}
          // height={80}
          layout="responsive"
          src={StaticImage}
          alt="image"
        />
      </Link>
      <span>{Title}</span>
      <span>{Description}</span>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="">
      <div className="mx-4">
        <h3 className="text-3xl py-1 font-bold text-teal-600">Portofólio</h3>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap mx-2 mb-4">
        <Job
          Title="Organo Alimentos"
          Description="Página inicial para loja de alimentos orgânicos."
          Url="https://organo-three-green.vercel.app/"
          StaticImage={web1}
        />

        <Job
          Title="Pets"
          Description="Loja especializada em serviços de cuidados de pets, tosa e banho."
          Url="https://landingpage-pets.vercel.app/"
          StaticImage={web2}
        />

        <Job
          Title="Autenticação e Cadastro"
          Description="Interface dinâmica e agradável para telas de login e cadastro."
          Url="https://oclecio94.github.io/Login-e-Cadastro/"
          StaticImage={web3}
        />
        <Job
          Title="Horti-Fruti Online"
          Description="Páginas de Horti-fruti online."
          Url="https://oclecio94.github.io/Lojinha-Horti-Fruti/"
          StaticImage={web4}
        />

        <Job
          Title="Delivery Legal"
          Description="Site de entrega de alimentos prontos para consumo."
          Url="https://food-delivery-next-teal.vercel.app/"
          StaticImage={web5}
        />

        <Job
          Title="Infotec Devs"
          Description="Página pública da empresa Infotec Devs. Trata-se de uma empresa startup que produz
                    soluções de software para as mais diferentes demandas do mercado."
          Url="https://infotec-devs.vercel.app/"
          StaticImage={web6}
        />
      </div>
    </section>
  );
};

export default Portfolio;
