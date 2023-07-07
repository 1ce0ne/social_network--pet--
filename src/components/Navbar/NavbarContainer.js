import StoreContext from '../../StoreContext';
import Navbar from './Navbar';


const NavbarContainer = (props) => {
  return (
    <StoreContext.Consumer >
      {store => <Navbar state={store.getState().navbarPage} />}
    </StoreContext.Consumer>
  )
}

export default NavbarContainer;