import Contact from "./Contact";
import AnimationMain from "components/AnimationDiv";

import IconPerson from "assets/images/icon-person.png";
import ContactoImage from "assets/images/contacto.png";
import IsotipoImage from "assets/images/isotipo-ctp.png";

export default function Contacto() {
  return (
    <AnimationMain className="flex flex-col xl:max-w-screen-xl m-auto p-4 xl:p-0 ">
      <div
        className="grid grid-cols-1  mt-16 
          md:grid-cols-2
        "
      >
        <div className="order-2 md:order-1 lg:max-w-lg">
          <div>
            <img src={IconPerson} alt="icon person" />
            <h2
              className="text-5xl font-bold mb-2
                bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent
              "
            >
              Hablemos...
            </h2>
            <div className="mb-4 text-[22px] font-semibold">
              Ven y descubre que no existen cambios radicales, <br />
              ni realidades terminadas.
            </div>
            <div>
              En conecta tu propósito, marcamos la diferencia con un enfoque
              humano y personalizado.
            </div>
          </div>
        </div>
        <img
          src={ContactoImage}
          alt="Contacto"
          className="m-auto order-1 md:oder-2 w-full"
        />
      </div>

      <div className="text-center relative mt-12 md:mt-0  lg:-top-24">
        <img
          src={IsotipoImage}
          alt="isotipo"
          width={116}
          height={96}
          className="m-auto mb-3"
        />
        <h3
          className="text-5xl font-bold mb-4
            bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent
          "
        >
          Contáctanos
        </h3>
        <div className="text-2xl font-semibold mb-2">
          En breve nos comunicaremos contigo.
        </div>
      </div>

      <Contact />

      <div className="linea-gradient-card" />
    </AnimationMain>
  );
}
