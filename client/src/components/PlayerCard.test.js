import React from 'react';
import PlayerCard from './PlayerCard';

import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup)

test('renders without crashing!', () => {
    const simulatedDOM = rtl.render(<PlayerCard />)
})