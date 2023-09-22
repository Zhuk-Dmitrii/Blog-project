import { expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Title } from '../src/components/Title/Title.jsx'

test('renders Title component', () => {
   render(<Title>Test</Title>)
   expect(screen.getByText('Test')).toBeInTheDocument()
})