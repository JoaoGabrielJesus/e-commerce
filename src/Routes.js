import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from './Paginas/Cadastro/Cadastro.js';
import Carrinho from './Paginas/Carrinho/Carrinho.js';
import Lista from './Paginas/Lista/Lista.js';
// import Erro from './paginas/erro/erro.js';



const Routes = () => {
  return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Cadastro} />
      <Route exact path="/carrinho" component={Carrinho} />
      <Route exact path="/lista" component={Lista} />
      {/* <Route path="*" component={Erro} /> */}
    </Switch>
  </BrowserRouter>
  )
}

export default Routes;