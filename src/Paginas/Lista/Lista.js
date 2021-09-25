import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Container, Header, Button} from './Lista.style.js'

function Lista() {

  const [nome, setNome] = useState([]);
  const [valor, setValor] = useState('');

  let lista =[]
  
  
  useEffect(()=>{
    setNome(JSON.parse(localStorage.getItem('inventario')))
    console.log(nome)
  },[])
   
return(
  
  <div>
    <Button>
    Carrinho
    </Button>
    <Header>      
    <h2>Produtos Disponíveis</h2>
    </Header>
    
  {
    nome.map((data)=>{
      return(
        <Container>
        <div>
          
        <span>{data.nome}</span>
              
        </div>
        <div>
        <span>{data.valor}</span>
        <button onClick={()=>{{console.log()}}}>Adicionar ao Carrinho</button>
        
        </div>
      
        </Container>
        
      )
    })
  }
  


  {console.log('qualquer coisa',nome)}
  </div>
  
)
}


export default Lista;