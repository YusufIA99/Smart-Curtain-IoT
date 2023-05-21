import React from 'react';
import '@testing-library/jest-dom'
import { render, screen} from '@testing-library/react';
import Hero from '../Components/Hero';

test('LukkeTekstErIHeroSektionen', () => {
    render(<Hero />);
    const LukkeTekst = screen.getByText('Lukke');
    expect(LukkeTekst).toBeInTheDocument();
});

test('ÅbenTekstErIHeroSektionen', () => {
    render(<Hero />);
    const ÅbenTekst = screen.getByText('Åben');
    expect(ÅbenTekst).toBeInTheDocument();
});


test('ÅbenKnapIHeroSektionen', () => {
    render(<Hero />);
    const ÅbenKnap = screen.getByRole('button', { name: 'Åben' });
    expect(ÅbenKnap).toBeInTheDocument();
  });
  
  test('LukkeKnapIHeroSektionen', () => {
    render(<Hero />);
    const lukkeKnap = screen.getByRole('button', { name: 'Lukke' });
    expect(lukkeKnap).toBeInTheDocument();
  });