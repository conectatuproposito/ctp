import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendSubscripcion } from "./email";

import ArrowRight from "assets/images/arrow-right.svg";

export type FormData = {
  email: string;
};

const Subscription = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit(data: FormData) {
    setEnviando(true);

    sendSubscripcion(data)
      .then(() => {
        setEnviado(true);
        setValue("email", "Bienvenido ahora estas conectado");
      })
      .catch((err) => {
        setError(true);
        setValue("email", "Algo salio mal, algo salio mal", err);
      });
  }

  return (
    <form className="max-w-3xl m-auto" onSubmit={handleSubmit(onSubmit)}>
      {error && <div>{error}</div>}

      <div className="text-center md:text-left flex">
        <div className="mt-4 items-center">
          <div className="text-purple-500 mb-2">
            * Registráte para obtener beneficios y contenido de valor
          </div>
          <input
            type="email"
            placeholder="ejemplo@dominio.com"
            className={`
              h-8 w-full border border-gray-300 bg-white py-3 px-6 text-base font-medium  outline-none focus:border-purple-500 focus:shadow-md rounded-s-[30px] 
              ${!(enviado || error) ? "text-gray-700" : ""}
              ${enviado ? "text-[#3ABBED] uppercase" : ""} ${
              error ? "text-[#E73D5C] uppercase" : ""
            } 
              transition-all
            `}
            {...register("email", { required: true })}
          />
        </div>

        <button
          disabled={enviando}
          className={` p-0
            h-8 w-8 self-end rounded-e-[30px] flex items-center text-white hover:bg-sky-400 transition-all 
            ${!(enviado || error) ? "bg-[#6D2EA3]" : ""}
            ${enviando ? "opacity-50 hover:bg-[#6D2EA3]" : ""}
             ${enviado ? "bg-[#3ABBED]" : ""} ${error ? "bg-[#E73D5C]" : ""}
          `}
        >
          <img
            className="pt-[1px] ml-2 w-3 h-3"
            src={ArrowRight}
            alt="Arrow Right"
          />
        </button>
      </div>
    </form>
  );
};

export default Subscription;
