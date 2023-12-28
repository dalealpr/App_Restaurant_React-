import './NavBar.scss'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  return (
    <div className='navBarCont'>
        <MenuIcon />
        <div className='buscadorCont'>
            <SearchIcon/>
            <input type="text" name='search' 
            placeholder='Buscar...' 
            className='inputSearch' autoComplete='off' />
        </div>
    </div>
  )
}

export default NavBar
