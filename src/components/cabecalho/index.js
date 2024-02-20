import './index.css'
import Logo from '../logo'
function Cabecalho(){
    return(
     <header>
        <div className='cabecalho'> 
            <Logo></Logo>
            <input className='search-bar' placeholder='Pesquisar...'></input>
            <ul className='link-menu'>
                <li><a href='#'>Link1</a></li>
                <li><a href='#'>Link2</a></li>
                <li><a href='#'>Link3</a></li>
            </ul>
      </div>
    </header>


    )
}

export default Cabecalho