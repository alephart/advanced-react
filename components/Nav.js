import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>


   <Link href="items">
    <a>Items</a>
   </Link>
    <Link href="vender">
      <a>Vender</a>
    </Link>
    <Link href="registro">
      <a>Regístrarse</a>
    </Link>
    <Link href="pedido">
      <a>Pedidos</a>
    </Link>
  <Link href="cuenta">
    <a>Cuenta</a>
  </Link>
  </NavStyles>
);

export default Nav;