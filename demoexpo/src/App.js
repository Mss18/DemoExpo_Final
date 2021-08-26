import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { UsuarioList } from './UsuarioList'
import { CreateUsuario } from './CreateUsuario'
import { EditUsuario } from './EditUsuario'

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Usuarios</Link>
          </li>
          <li className="navbar-item">
            <Link to="/crear" className="nav-link">Rexistrar usuario</Link>
          </li>
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={UsuarioList}/>
      <Route path="/editar/:id" component={EditUsuario}/>
      <Route path="/crear" component={CreateUsuario}/>
    </Switch>
    </div>
  );
}

export default App;