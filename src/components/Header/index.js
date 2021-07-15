import logoImg from '../../assets/images/logo.svg';
import { Nav } from './styles';

export default function Header() {
    return (
        <Nav>
            <img src={logoImg} alt="Logo"/>
                        
            <a href="#">Produtos</a>
            <a href="#">Arquiteturas</a>
            <a href="#">Clientes</a>
            <a href="#">Parceiros</a>
            <a href="#">Empresa</a>
            <a href="#">Recuros</a>
            <a href="#">Planos</a>

        </Nav>
    )
}
