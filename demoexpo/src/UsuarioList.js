import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getUsuarios } from "./api"

export const UsuarioList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const usuarios = await getUsuarios()
      setItems(usuarios)
    }
    fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
      <div className="mt-5">
        <h3>Lista de usuarios rexistrados</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Apelido</th>
              <th>Ano de nacemento</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(usuario => (
                <tr key={usuario._id}>
                  <td>
                    {usuario.text}
                  </td>
                  <td>
                    <Link to={`/edit/${usuario._id}`}>Editar</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};