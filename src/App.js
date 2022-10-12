import logo from './logo.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Items from './components/fetch/getItems';

function Animaciones (){
  return( <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />)
} 
function App() {

  return (
    <>
    
  {Animaciones}
    <Navbar></Navbar>
  
  <Items></Items>
    </>
  );
}

export default App;
