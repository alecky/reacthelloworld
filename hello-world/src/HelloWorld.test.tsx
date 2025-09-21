import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';
import React from 'react';

describe('HelloWorld component', () => {
    it('renders "Hello, World!" heading', () => {
        render(<HelloWorld />);
        const heading = screen.getByRole('heading', { name: /hello, world!/i });
        expect(heading).toBeInTheDocument();
    });
});