import './index.css';
import Item from "../../component/Item/Item"
import Item2 from "../../component/Item/Item2"
import Enlace from "../../component/Enlace/Enlace"
import Carrito from "../../component/CardWidget/CardWidget"

const Header = () => {
    return (
            <header className = "header trans_300">
                <Enlace estilo="menuHamburguesa" icono="fas fa-bars"/>
                <a href="#" className = "logo">Vape<span>Shop</span></a>
                <nav className="navbar">
                    <ul className="navbar_menu">
                        <Item valor="Inicio"/>
                        <Item valor="Tienda"/>
                        <Item valor="Promociones"/>
                        <Item valor="Nosotros"/>
                        <Item valor="Contacto"/>
                    </ul>
                    <ul className="navbar_user">
                        <Item2 icono="fa fa-search" />
                        <Item2 icono="fa fa-user" />
                        <Carrito estiloLista = "checkout" estiloEnlace = "enlace" icono = "fa fa-shopping-cart" estiloSpan = "checkout_items" valor = "8" />
                    </ul>
                </nav>
            </header>
    )
}

export default Header
