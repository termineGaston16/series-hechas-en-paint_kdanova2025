import { RiSettingsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function NavbarHeader() {
    return (<nav>
        <Link
            aria-label="Ir a Configuración"
            to={'/configuración=ajustes-generales'}>
            <RiSettingsFill data-testid="settings-icon" />
        </Link>

        <ul>
            <li>
                <Link to={'/categoría-proyectos=libros'}>
                    <span>Libros</span>
                </Link>
            </li>
            <li>
                <Link to={'/categoría-proyectos=series'}>
                    <span>Series</span>
                </Link>
            </li>
            <li>
                <Link to={'/categoría-proyectos=juegos'}>
                    <span>Juegos</span>
                </Link>
            </li>
        </ul>
    </nav>)
}