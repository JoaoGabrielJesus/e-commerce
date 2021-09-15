import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from './paginas/cadastro/cadastro.js';
// import Carrinho from './paginas/carrinho/carrinho.js';
// import Lista from './paginas/lista/lista.js';
// import Erro from './paginas/erro/erro.js';



const Routes = () => {
  return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Cadastro} />
      {/* <Route exact path="/carrinho" component={Carrinho} />
      <Route exact path="/lista" component={Lista} />
      <Route path="*" component={Erro} /> */}
    </Switch>
  </BrowserRouter>
  )
}

export default Routes;