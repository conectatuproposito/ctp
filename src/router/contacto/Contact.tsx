import { useState } from "react";
import { useForm } from "react-hook-form";

import CheckSVG from "assets/images/check.svg";
import ArrowSVG from "assets/images/arrow-right.svg";
import { sendContact } from "./email";

export type FormData = {
  nombres: string;
  apellidos: string;
  telefono: string;
  email: string;
  mensaje: string;
};

const inputClassName = `
  border-gradient
  w-full rounded-full
  border-2 bg-white 
  border-blue-400
  py-3 px-4
  text-base font-medium text-gray-700 
  outline-none focus:border-purple-500 
  focus:shadow-md
  focus:border-purple-700 
  trasition-all
`;

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit(data: FormData) {
    setEnviando(true);

    sendContact(data)
      .then(() => {
        setEnviado(true);
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <form
      className="max-w-4xl w-full m-auto mb-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <div>{error}</div>}

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            Nombre
          </label>
          <input
            type="text"
            className={inputClassName}
            {...register("nombres", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="last-name"
            className="mb-3 block text-base font-medium text-black"
          >
            Apellido
          </label>
          <input
            type="text"
            className={inputClassName}
            {...register("apellidos", { required: true })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Telefono
          </label>
          <input
            type="text"
            className={inputClassName}
            {...register("telefono", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="ejemplo@dominio.com"
            className={inputClassName}
            {...register("email", { required: true })}
          />
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="mensaje"
          className="mb-3 block text-base font-medium text-black"
        >
          Dejanós tu mensaje
        </label>
        <textarea
          rows={4}
          placeholder="Cuéntanos cual es tu principal interés..."
          className="
            w-full resize-none rounded-[25px] border-2 
            border-purple-500 bg-white py-3 px-6 text-base font-medium 
            text-gray-700 outline-none focus:border-blue-400 focus:shadow-md 
            transition-all md:h-[225px]
          "
          {...register("mensaje", { required: true })}
        ></textarea>
      </div>

      <button
        className={`
      flex items-center justify-center  sm:w-[354px] h-11
      text-white rounded-full p-2 px-6
      hover:bg-[#3ABBED]
      ${!(enviado || error) ? "bg-[#6D2EA3]" : ""}
      ${enviado ? "bg-[#3ABBED]" : ""} ${error ? "bg-[#E73D5C]" : ""}
      transition-all m-auto`}
        disabled={enviando}
      >
        {enviado ? "Enviado" : "Enviar"}
        <img
          src={enviado ? CheckSVG : ArrowSVG}
          alt="Arrow Right"
          className={`pt-[2px] ml-2 w-4 h-4  ${enviado ? "-mt-1" : ""} `}
          width={18}
          height={18}
        />
      </button>
    </form>
  );
};

export default Contact;
