import styled from 'styled-components';


export const Header = styled.h1`
  display: flex;  
  justify-content: center;
  font-size: 50px;
  color: black;
    
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 140px;
  width: 208px;
  background-color: gray;
  box-sizing: border-box;
  border-radius: 3px;

input{
width: 200px;
align-items: center;
}

.botao2{  
  margin: auto
}
`;

export const FormWraper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.botao button{
  margin-top: -10px;
  font-size: 20px;
}
`;