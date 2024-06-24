import logo from './logo.svg';
import styled  from "styled-components";
import './App.css';


const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Header = styled.div`
display: flex;
flex-direction: row;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 25px;
    font-weight: bold;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
;`
function App() {
  return (
    <Container>

   <Header>MOVIE APP</Header>
      hiiii
    </Container>
  );
}

export default App;
