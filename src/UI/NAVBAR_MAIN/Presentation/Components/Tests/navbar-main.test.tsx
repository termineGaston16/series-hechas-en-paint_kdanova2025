import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react'
import NavbarMain from '../NavbarMain';
import { MemoryRouter } from 'react-router-dom';

describe('NavbarMain', () => {
    it('Evaluar las distintas navegaciones', () => {
        render(
            <MemoryRouter>
                <NavbarMain />
            </MemoryRouter>
        )

        const navBarRef = screen.getByRole('navigation', { name: 'Navegador Principal' });
        const routes = [
            { text: '¿Quiénes somos?', href: '/' },
            { text: 'Nuestros géneros', href: '/géneros-disponibles' },
            { text: 'Proyectos perdidos', href: '/proyectos-perdidos' }
        ]

        for (const route of routes) {
            const { text, href } = route;

            const link = within(navBarRef).getByRole('link', { name: text })
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', href)
        };
    })

    it('Renderizar el botón del Buscador', () => {
        render(
            <MemoryRouter>
                <NavbarMain />
            </MemoryRouter>
        )

        const btnLink = screen.getByRole('link', { name: 'Botón para buscar proyectos' })
        expect(btnLink).toBeInTheDocument()
        expect(btnLink).toHaveAttribute('href', '/buscar-proyectos=')

        const icon = within(btnLink).getByLabelText('Logotipo del botón para buscar proyectos')
        expect(icon).toBeInTheDocument()
    })

    it('Evaluar el Logotipo del Botón del Buscador', () => {
        render(
            <MemoryRouter>
                <NavbarMain />
            </MemoryRouter>
        )

        const btnLink = screen.getByRole('link', { name: 'Botón para buscar proyectos' })
        const icon = within(btnLink).getByLabelText('Logotipo del botón para buscar proyectos')
        expect(icon).toBeInTheDocument()
    })

})