import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import NavbarHeader from '../NavbarHeader'
import { MemoryRouter } from 'react-router-dom'

describe('NavBarHeader', () => {
    it('Renderizar el Ancla de Configuraciones', () => {
        render(
            <MemoryRouter>
                <NavbarHeader />
            </MemoryRouter>
        )

        const icon = screen.getByTestId('settings-icon')
        expect(icon).toBeInTheDocument();
    })

    it('Evaluar que el anlca redirecciona a las Configuraciones', () => {
        render(
            <MemoryRouter>
                <NavbarHeader />
            </MemoryRouter>
        )

        const link = screen.getByRole('link', {
            name: 'Ir a Configuración'
        })
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/configuración=ajustes-generales')
    })

    it('Renderizar otras anclas', () => {
        render(
            <MemoryRouter>
                <NavbarHeader />
            </MemoryRouter>
        )

        const anclas = [
            { text: 'Libros', href: '/categoría-proyectos=libros' },
            { text: 'Series', href: '/categoría-proyectos=series' },
            { text: 'Juegos', href: '/categoría-proyectos=juegos' }
        ];

        for (const ancla of anclas) {
            const { text, href } = ancla;

            const link = screen.getByRole('link', { name: text });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', href);
        };
    })
})
