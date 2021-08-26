import React, { useState, useEffect } from "react";
import { UsuarioForm } from "./UsuarioForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getUsuario, updateUsuario } from "./api";

export const EditUsuario = () => {
  const match = useRouteMatch()
  const [usuario, setUsuario] = useState();
  const history = useHistory()

  useEffect(() => {
    const fetchUsuario = async () => {
      const usuario = await getUsuario(match.params.id) 
      setUsuario(usuario)
    }
    fetchUsuario()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data) => {
    await updateUsuario(data, match.params.id)
    history.push("/")
  }

  return usuario ? (
    <div className="container">
      <div className="mt-5">
        <h3>Editar datos do usuario</h3>
        <UsuarioForm usuario={usuario} onSubmit={onSubmit}/>
      </div>
    </div>
  ) : (
    <div>Cargando...</div>
  );
};