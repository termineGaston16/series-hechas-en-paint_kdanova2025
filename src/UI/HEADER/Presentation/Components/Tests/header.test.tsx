import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';


import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
    it('Renderizar el Logo Principal', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const logo = screen.getByRole('img', {
            name: 'Logo Principal de Series Hechas en Paint (SHenP)',
        });
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '/Logo_Web.png')
        expect(logo).toHaveAttribute('alt', 'Logo Principal de Series Hechas en Paint (SHenP)');
    })

    it('Evaluar que el Logo Principal redireccione al Home', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const link = screen.getByRole('link', {
            name: 'Logo Principal de Series Hechas en Paint (SHenP)',
        });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
    })

    it(('Renderizar la lista de Navegación'), () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        expect(screen.getByRole('navigation')).toBeInTheDocument();
    })

    it(('Renderizar el Copyright'), () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        expect(screen.getByText('© SHenP 2025'));
        expect(screen.getByText('© KDA/NOVA 2025'));
    })
});

