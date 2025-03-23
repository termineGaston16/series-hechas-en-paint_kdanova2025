import { Link } from "react-router-dom";
import NavbarHeader from "../../../NAVBAR_HEADER/Presentation/Components/NavbarHeader";

export default function Header() {
    return (
        <header>
            <Link
                to={'/'}>
                <img
                    style={{ width: '50%' }}
                    src="/Logo_Web.png"
                    alt="Logo Principal de Series Hechas en Paint (SHenP)"
                    loading="lazy"
                />
            </Link>

            <NavbarHeader />

            <p>
                <span>© SHenP 2025</span>
                <span>© KDA/NOVA 2025</span>
            </p>
        </header>
    )
}