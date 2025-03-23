import { Link } from "react-router-dom";

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

            <nav></nav>

            <p>
                <span>© SHenP 2025</span>
                <span>© KDA/NOVA 2025</span>
            </p>
        </header>
    )
}