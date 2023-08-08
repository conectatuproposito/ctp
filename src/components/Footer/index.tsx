import Subscription from "../Subscription";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Instagram from "../svgs/Instagram";
import Facebook from "../svgs/Facebook";
import Twitter from "../svgs/Twitter";
import Linkedin from "../svgs/Linkedin";

import { Link, useLocation } from "react-router-dom";

import logoSvg from "assets/images/logo.svg";

import mensajeImage from "assets/images/mensaje.png";
import whatImage from "assets/images/what.png";
import locationImage from "assets/images/location.png";

import whatsappImage from "assets/images/whatsapp.png";

const Footer = () => {
  const [reloadAnimation, setReloadAnimation] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setReloadAnimation(false);
    setReloadAnimation(true);
  }, [pathname]);

  return (
    <>
      <motion.footer
        initial={reloadAnimation ? "hidden" : "visible"}
        animate={reloadAnimation ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            transition: {
              velocity: 10,
            },
          },
          visible: {
            opacity: 1,
            transition: {
              velocity: 10,
            },
          },
        }}
        className="xl:max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between gap-6 pt-16 lg:pt-24 px-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold">
              <img
                src={logoSvg}
                alt="Instagram Logo"
                className="pointer m-auto"
                width={300}
                height={90}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-0">
            <div>
              <div className="text-md text-purple-700 uppercase">Website</div>
              <div className="flex flex-col">
                <Link to="/" className=" hover:text-purple-700">
                  Inicio
                </Link>
                <Link to="/nosotros" className=" hover:text-purple-700">
                  Nosotros
                </Link>
                <Link to="/conectate" className=" hover:text-purple-700">
                  Conéctate
                </Link>
                <Link to="/contacto" className=" hover:text-purple-700">
                  Contacto
                </Link>
              </div>
            </div>

            <div>
              <div className="text-md text-purple-700 uppercase">Pronto</div>
              <div>
                <div className="">Blog</div>
                <div className="">Escuela conecta</div>
                <div className="">Bootcamp</div>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="text-md  text-purple-700 uppercase">Aliados</div>

              <Link
                to="https://www.iopenerinstitute.com/happiness-at-work-what"
                className=" hover:text-purple-700"
              >
                IOpener Institute
              </Link>

              <Link
                to="https://www.instagram.com/nutriologopablosalda/"
                className=" hover:text-purple-700"
              >
                @nutriologopablosalda
              </Link>

              <Link
                to="https://www.instagram.com/peninsulacol/"
                className=" hover:text-purple-700"
              >
                @peninsulacol
              </Link>

              <Link
                to="https://www.instagram.com/medicinadeportivamedellin/"
                className=" hover:text-purple-700"
              >
                @medicinadeportivamedellin
              </Link>
            </div>
          </div>

          <div className=" md:text-left">
            <div className="text-md text-purple-700 uppercase">Contacto</div>
            <div className="flex flex-col gap-1 w-max">
              <div className="flex gap-2 items-center">
                <img
                  src={mensajeImage}
                  alt="Mensaje"
                  className="pointer w-5 h-5"
                  width={100}
                  height={14}
                />
                info@conectatuproposito.com
              </div>

              <div className="flex gap-2 items-center">
                <img
                  src={whatImage}
                  alt="Whastapp Logo"
                  className="pointer w-5 h-5"
                  width={100}
                  height={14}
                />
                (+57) 310 767 52 03
              </div>

              <div className="flex gap-2 items-center">
                <img
                  src={locationImage}
                  alt="Whastapp Logo"
                  className="pointer w-[1.2rem] h-[1.4rem]"
                  width={100}
                  height={14}
                />
                Envigado - Colombia
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4 md:pt-8 pb-9 md:pb-16 px-4 lg:px-8 ">
          <div></div>
          <div></div>

          <Subscription />

          <div className="mt-8 md:mt-0">
            <div className="mb-2 uppercase text-purple-500">
              Síguenos en redes sociales
            </div>

            <div className="flex flex-row gap-12 text-black transition-all">
              <Link
                to="https://www.instagram.com/conecta.tuproposito/"
                target="_blank"
                className="hover:text-gray-200 w-6"
              >
                <Instagram className="fill-black hover:fill-pink-300" />
              </Link>

              <Link
                to="https://www.facebook.com/profile.php?id=100093252828696"
                target="_blank"
                className="hover:text-gray-200 w-6"
              >
                <Facebook className="fill-black hover:fill-pink-300" />
              </Link>

              <Link
                to="https://twitter.com/ConectaTP"
                target="_blank"
                className="hover:text-gray-200 w-6"
              >
                <Twitter className="fill-black hover:fill-pink-300" />
              </Link>

              <Link
                to="https://www.linkedin.com/in/conecta-tu-propósito-7a2095266/"
                target="_blank"
                className="hover:text-gray-200 w-6"
              >
                <Linkedin className="fill-black hover:fill-pink-300" />
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="flex items-center justify-center h-20 w-full  bg-gradient-to-r from-blue-200 via-blue-400 to-purple-700
          p-2
        "
      >
        ©2023 Conecta tu propósito. All rights reserved
      </motion.div>

      <div className="fixed bottom-5 right-2 w-16">
        <motion.div
          {...{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Link
            target="_blank"
            to="https://wa.me/573107675203?text=Estoy%20interesado%20en%20su%20contacto"
          >
            <img
              src={whatsappImage}
              alt="Whastapp Logo"
              className="pointer m-auto"
              width={300}
              height={90}
            />
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
