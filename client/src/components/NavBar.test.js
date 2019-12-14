import React from 'react';
import NavBar from './NavBar';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup)

test('NavBar renders without crashing!', () => {
    const simulateDOM = rtl.render(<NavBar />)
})

test('Button exists', () => {
    const simulateDOM = rtl.render(<NavBar />)

    const darkButton = document.querySelector('div.toggle_dark-mode button')
    expect(darkButton).toBeInTheDocument();
})