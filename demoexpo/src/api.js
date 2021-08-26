export const getUsuarios = () => fetch("http://localhost:4000/").then(res => res.json())

export const createUsuario = (usuario) => fetch("http://localhost:4000/crear", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(usuario)
})  

export const updateUsuario = (usuario, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(usuario)
})  

export const getUsuario = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())