import './index.css'
import Logo from '../logo'
import sacola from './img/bolsa-de-compras.png'
import userImg from './img/rede.png'

function Cabecalho(){
    return(
     <header>
        <div className='cabecalho'> 
            <Logo></Logo>
            <input className='search-bar' placeholder='Pesquisar...'></input>
            <div className='section'>
                <ul className='link-menu'>
                    <li><a href='#'>Link1</a></li>
                    <li><a href='#'>Link2</a></li>
                    <li><a href='#'>Link3</a></li>
                    <div id = 'user-menu'>
                        <li><img src={sacola} width='50px' height='50px'></img></li>
                        <li><img src={userImg} width='50px' height='50px'></img></li>
                    </div>
                </ul>
            </div>
                
      </div>
    </header>


    )
}

export default Cabecalho