import {useState} from 'react';

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

function Cadastro() {

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  return (
    <div>
      <h1>Cadastro de Produtos</h1> <br/>

      <div className="container">

        <label>Nome do Produto</label> <br/>
        <input type="text" value={nome} onChange={ (e) => setNome(e.target.value)}/> <br/>

        <label>Preço</label> <br/>
        <input type="text" value={valor} onChange={ (e) => setValor(e.target.value)}/> <br/>
        <br/>
        <button onClick={()=>cadastrar(nome, valor)}>Cadastrar</button>

      </div>

    
    </div>   

  );

}

export default Cadastro;