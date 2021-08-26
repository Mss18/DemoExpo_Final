import React from "react";
import { UsuarioForm } from "./UsuarioForm";
import { createUsuario } from "./api";
import { useHistory } from "react-router-dom";

export const CreateUsuario = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    await createUsuario(data)
    history.push("/")
  };

  return (
    <div className="container">
      <div className="mt-5">
        <h3>Rexistro de usuario</h3>
        <UsuarioForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};