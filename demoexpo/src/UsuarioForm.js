import React from "react";
import { useForm } from "react-hook-form";

export const UsuarioForm = ({ usuario, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: usuario ? usuario.text : "" },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler} >
      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input
          className="form-control"
          {...register("nome")}
          type="text"
          name="nome"
          id="nome"
        /><br/>
        <label htmlFor="apelido">Apelido:</label>
        <input
          className="form-control"
          {...register("apelido")}
          type="text"
          name="apelido"
          id="apelido"
        /><br/>
        <label htmlFor="text">Ano de nacemento:</label>
        <input
          className="form-control"
          {...register("anoNacemento")}
          type="number"
          name="anoNacemento"
          id="anoNacemento"
        />
      </div><br/>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Gardar usuario
        </button>
      </div>
    </form>
  );
};