
import './App.css'
import Carousel from './components/carousel'
import Card from './components/cards';
import Cabecalho from './components/cabecalho';



function App() {

    
  return (
    <>
    <Cabecalho></Cabecalho>
    <body>
      <Carousel></Carousel>
      <div className='card-container'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </body>
    </>
  );
}

export default App;
