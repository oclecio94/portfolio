import Image from "next/image";
import web1 from "../public/images/web1.png";
import web2 from "../public/images/web2.png";
import web3 from "../public/images/web3.png";
import web4 from "../public/images/web4.png";
import web5 from "../public/images/web5.png";
import web6 from "../public/images/web6.png";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="md:px-20 lg:px-40 mt-10">
      <div className="mx-4">
        <h3 className="text-3xl py-1 font-bold text-teal-600">Portofólio</h3>
        {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Projetos feitos com as tecnologias HTML, CSS, JAVASCRIPT, TYPESCRIPT,
          C#, ASPNET, NODE, REACT E NEXT.
        </p> */}
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap mx-2 mb-4">
        <div className="basis-1/3 flex-1 hover:scale-125">
          <Link href={"https://organo-three-green.vercel.app/"} target="_black">
            <Image
              className="rounded-lg object-cover shadow-2xl"
              width={"100"}
              height={"100"}
              layout="responsive"
              src={web1}
              alt="image"
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-125">
          <Link href={"https://landingpage-pets.vercel.app/"} target="_black">
            <Image
              className="rounded-lg object-cover shadow-2xl"
              width={"100"}
              height={"100"}
              layout="responsive"
              src={web2}
              alt="image"
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-125">
          <Link
            href={"https://oclecio94.github.io/Login-e-Cadastro/"}
            target="_black"
          >
            <Image
              className="rounded-lg object-cover shadow-2xl"
              width={"100"}
              height={"100"}
              layout="responsive"
              src={web3}
              alt="image"
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-125">
          <Link
            href={"https://oclecio94.github.io/Lojinha-Horti-Fruti/"}
            target="_black"
          >
            <Image
              className="rounded-lg object-cover shadow-2xl"
              width={"100"}
              height={"100"}
              layout="responsive"
              src={web4}
              alt="image"
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-125">
          <Link
            href={"https://food-delivery-next-teal.vercel.app/"}
            target="_black"
          >
            <Image
              className="rounded-lg object-cover shadow-2xl"
              width={"100"}
              height={"100"}
              layout="responsive"
              src={web5}
              alt="image"
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-125">
          <Link href={"https://infotec-devs.vercel.app/"} target="_black">
            <Image
              className="rounded-lg object-cover shadow-2xl"
              width={"100"}
              height={"100"}
              layout="responsive"
              src={web6}
              alt="image"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
