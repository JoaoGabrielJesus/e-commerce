import {useState} from 'react';
import {Container,Header,FormWraper} from './Cadastro.style.js';
import { Link } from 'react-router-dom';



function Cadastro() {

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  
  return (
    <div>
      <Header>Cadastro de Produtos</Header> <br/>
      <FormWraper>
      <Container>        
        
        <label>PRODUTO:</label>
        <input type="text" value={nome} onChange={ (e) => setNome(e.target.value)}/> <br/>

        <label>VALOR:</label>
        <input type="text" value={valor} onChange={ (e) => setValor(e.target.value)}/>
        
        <button className='botao2'onClick={()=>cadastrar(nome, valor)}>Cadastrar</button>        
        
      </Container>
    <br/>
      
      <Link to='/lista' className='botao'><button onClick={()=>{}}>Produtos</button></Link>
      
      </FormWraper>
    </div>   

  );

}



function cadastrar(nome, valor) {  
  let inventario = []  
  if(localStorage.getItem('inventario')) {
    inventario = JSON.parse(localStorage.getItem('inventario'))
  }
  localStorage.setItem('inventario',
  JSON.stringify([...inventario,
  {
    nome : nome,
    valor : parseInt(valor).toLocaleString('pt-br',{style:'currency', currency:'BRL'}),
  }
  
  ])
  );
}

export default Cadastro;