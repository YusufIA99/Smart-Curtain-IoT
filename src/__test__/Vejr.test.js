import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor} from '@testing-library/react';;
import Vejr from '../Components/Vejr';
import axios from 'axios';


test('TekstIPlaceholder', () => {
    render(<Vejr />);
    const Søgefunktion = screen.getByPlaceholderText('Søg efter by eller sted');
    expect(Søgefunktion).toBeInTheDocument();
  });

//respons 200 = succes 
 test('ApiRespons', async () => {
    render(<Vejr />);
    const API = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f9de4a24900764d24efc22786a7284db';
    const response = await axios.get(API);
    expect(response.status).toBe(200);
  });
  
