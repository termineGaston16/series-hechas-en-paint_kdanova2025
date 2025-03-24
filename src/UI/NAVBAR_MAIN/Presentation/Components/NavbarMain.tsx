import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarMain() {
    return (
        <nav aria-label="Navegador Principal">
            <ul>
                <li>
                    <Link to={'/'}>
                        <span>¿Quiénes somos?</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/géneros-disponibles'}>
                        <span>Nuestros géneros</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/proyectos-perdidos'}>
                        <span>Proyectos perdidos</span>
                    </Link>
                </li>
                <li>
                    <Link
                        aria-label="Botón para buscar proyectos"
                        to={'/buscar-proyectos='}>
                        <FaSearch aria-label="Logotipo del botón para buscar proyectos" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}