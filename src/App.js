import Logo from './components/logo'
import './App.css'
import Carousel from './components/carousel'

function App() {
  return (
    <><header>
      <div className='cabecalho'> 
        <Logo></Logo>
      
      <ul className='link-menu'>
          <li><a href='#'>Link1</a></li>
          <li><a href='#'>Link2</a></li>
          <li><a href='#'>Link3</a></li>
      </ul>
      </div>
    </header>
    <body>
      <Carousel></Carousel>
    </body>
    </>
  );
}

export default App;
