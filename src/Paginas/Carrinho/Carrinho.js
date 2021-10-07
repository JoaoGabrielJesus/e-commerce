import {useEffect, useState } from 'react';
import {Container} from './Carrinho.styled';



function Carrinho(){

  const [ listaProdutos, setListaProdutos] = useState ([]);
  useEffect(()=>{
    setListaProdutos(JSON.parse(localStorage.getItem('produtosSelecionados')))
  },[]);   
    
    return( 
        <div>
        <h2>Produtos Selecionados</h2>           
        {
        listaProdutos.map((produto)=>{
          return(
            <Container>
            <div>          
            <span>{produto.nome}</span>              
            </div>
            <div>
            <span>{produto.valor}</span>                
            </div>      
            </Container>        
            )
        }       
        )
        }
        </div>
    )
}

export default Carrinho;