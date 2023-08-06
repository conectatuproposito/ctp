import { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import Hamburg from "components/Hamburg";
import { motion } from "framer-motion";

import "./style.css";
import Instagram from "../svgs/Instagram";
import Facebook from "../svgs/Facebook";
import Twitter from "../svgs/Twitter";
import Linkedin from "../svgs/Linkedin";
import Arrow from "../svgs/Arrow";

import logoSvg from "assets/images/logo.svg";

import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <motion.header
      {...{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
      className="
        bg-gradient-to-r from-[#D4EBF1] via-[#3ABBED] to-[#6D2EA3] md:h-20
      "
    >
      <div
        className="
          flex flex-col  items-center justify-between w-full uppercase p-5
          md:pl-[7%] md:pr-[5%] md:flex-row md:h-20 sm:p-0
          "
      >
        <div className="flex justify-between md:justify-around w-full items-center md:w-auto">
          <Link className="h-fit" to="/">
            <img
              src={logoSvg}
              alt="Logo"
              className="pointer"
              width={140}
              height={40}
            />
          </Link>

          <div className="md:hidden">
            <Hamburg onChange={setIsMenuOpen} />
          </div>
        </div>

        <nav
          className={` flex flex-row flex-wrap  text-black content-center 
            gap-4 gap-y-2 
            md:justify-end md:gap-y-0.5 
            lg:gap-10 
           ${!isMenuOpen && "hidden md:flex"} mt-4 md:mt-0 transition-all`}
        >
          {[
            { name: "inicio", link: "/" },
            { name: "nosotros", link: "/nosotros" },
            { name: "conéctate", link: "/conectate" },
            { name: "blog", link: "//" },
            { name: "contacto", link: "/contacto" },
          ].map((item, i) => {
            if (item.name === "blog") {
              return (
                <div key={i} className="cursor-default">
                  {item.name}
                </div>
              );
            }

            return (
              <div
                key={i}
                className={` ${
                  item.name === "conéctate" && "conectate relative"
                } transition-all`}
              >
                <Link
                  to={item.link}
                  className={`hover:text-pink-300 ${
                    pathname === item.link && "text-pink-300"
                  } flex items-center transition-all`}
                >
                  {item.name}
                  {item.name === "conéctate" && (
                    <Arrow
                      className={`ml-1 ${
                        pathname === item.link && "fill-pink-300"
                      }`}
                    />
                  )}
                </Link>

                {item.name === "conéctate" && <OtroMenu />}
              </div>
            );
          })}

          <div className={`flex flex-row gap-5 text-black transition-all`}>
            <Link
              to="https://www.instagram.com/conecta.tuproposito/"
              target="_blank"
              className="hover:text-gray-200 w-6"
            >
              <Instagram className="fill-sky-300 hover:fill-pink-300 transition-all" />
            </Link>

            <Link
              to="https://www.facebook.com/profile.php?id=100093252828696"
              target="_blank"
              className="hover:text-gray-200 w-6"
            >
              <Facebook className="fill-sky-300 hover:fill-pink-300 transition-all" />
            </Link>

            <Link
              to="https://twitter.com/ConectaTP"
              target="_blank"
              className="hover:text-gray-200 w-6"
            >
              <Twitter className="fill-sky-300 hover:fill-pink-300 transition-all" />
            </Link>

            <Link
              to="https://www.linkedin.com/in/conecta-tu-propósito-7a2095266/"
              target="_blank"
              className="hover:text-gray-200 w-6"
            >
              <Linkedin className="fill-sky-300 hover:fill-pink-300 transition-all" />
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

const OtroMenu = () => (
  <div
    className="
      otro-menu absolute z-10 text-black w-60 hidden lg:block 
    "
  >
    <div className="h-2 bg-pink-300 rounded-t-xl " />
    <div className="flex flex-col gap-4 bg-[#D4EBF170] p-3">
      <HashLink
        className="hover:text-pink-300 cursor-pointer"
        to="/conectate#modelo"
      >
        Modelo de desempeño
      </HashLink>

      <HashLink
        className="hover:text-pink-300 cursor-pointer"
        to="/conectate#familia"
      >
        Salud en familia
      </HashLink>

      <HashLink
        className="hover:text-pink-300 cursor-pointer"
        to="/conectate#ejecutivos"
      >
        Ejecutivo
      </HashLink>

      <HashLink
        className="hover:text-pink-300 cursor-pointer"
        to="/conectate#psicoterapia"
      >
        Psicoterapia
      </HashLink>
      <div className="cursor-default">Bootcamp</div>
    </div>
  </div>
);
