import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from './Paginas/Home';
import Produtos from './Paginas/Produtos';
import Servicos from './Paginas/Servicos';
import Page404 from './Paginas/Page404';
import Produto from "./Paginas/Produto";
import Servico from "./Paginas/Servico";
import Cadastro from "./Paginas/Cadastro/index.jsx";
import Login from "./Paginas/Login/index.jsx";

import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/produtos">
          <Produtos />
        </Route>
        <Route path="/produto/:id">
          <Produto />
        </Route>
        <Route exact path="/servicos">
          <Servicos />
        </Route>
        <Route path="/servico/:id">
          <Servico />
        </Route>
        <Route path="/cadastrar">
          <Cadastro />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
