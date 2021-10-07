import {useState, useEffect} from 'react';
import {Container, Header, Btn} from './Lista.style.js'
import { BrowerRouter as Router, Route, Link } from "react-router-dom";

function Lista() {

  const [ infoProdutos, setInfoProdutos] = useState ([]);
  useEffect(()=>{
    setInfoProdutos(JSON.parse(localStorage.getItem('inventario')))
  },[]);

  function adicionaProdutos(produtoSelecionado){
    console.log(produtoSelecionado)
    let produtosSelecionados = [];
    if(localStorage.getItem('produtosSelecionados')) {
      produtosSelecionados = JSON.parse(localStorage.getItem('produtosSelecionados'))
    }
    localStorage.setItem('produtosSelecionados',
    JSON.stringify([... produtosSelecionados, produtoSelecionado]));
}

return(
  
  <div>      
    <Link to ="/Carrinho"><Btn>Carrinho</Btn></Link>    
    <Header>      
    <h2>Produtos Disponíveis</h2>
    </Header>    
  {    
    infoProdutos.map((produto)=>{
      return(
        <Container>
        <div>          
        <span>{produto.nome}</span>              
        </div>
        <div>
        <span>{produto.valor}</span>
        <button onClick={ ()=> {adicionaProdutos(produto)}}>Adicionar ao Carrinho</button>        
        </div>      
        </Container>        
      )
    })
  }  
  </div>  
)
}
export default Lista;