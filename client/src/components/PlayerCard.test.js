import React from 'react';
import PlayerCard from './PlayerCard';

import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup)

test('renders without crashing!', () => {
    const simulatedDOM = rtl.render(<PlayerCard />)
})

test('Name renders', () => {
    const wrapper = rtl.render(
       <div className='name'>Name:</div> 
    )
    const element = wrapper.queryByText(/name/i);
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible()
})

test('Country renders', () => {
    const wrapper = rtl.render (
        <div className='country'>Country:</div>
    )
    const element = wrapper.queryByText(/country/i);
    expect(element).toBeVisible()
})

test('Search exists', () => {
    const wrapper = rtl.render(
        <div className='searches'>Searches: </div>
    );
    const element = wrapper.queryByText(/searches/i);
    expect(element).toBeTruthy()
    
})

