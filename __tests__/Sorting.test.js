import { expect, test, jest } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'
import { Sorting } from '../src/components/Sorting/Sorting.jsx'

test('render Sorting component', () => {
   const onChange = jest.fn()

   const { unmount } = render(<Sorting selected="date" onChange={onChange} />)

   const sortingItem = screen.getByRole('combobox')
   expect(sortingItem).toBeInTheDocument()

   const options = screen.getAllByRole('option')
   expect(options).toHaveLength(4)
   expect(options[0]).toHaveValue('date')
   expect(options[1]).toHaveValue('title')
   expect(options[2]).toHaveValue('text')
   expect(options[3]).toHaveValue('lesson_num')

   expect(sortingItem).toHaveValue('date')
   fireEvent.change(sortingItem, { target: { value: 'title' } })
   expect(onChange).toHaveBeenCalledWith('title')

   unmount()

   render(<Sorting selected="date" onChange={onChange} disabled={true} />)
   expect(sortingItem).not.toBeInTheDocument()
})


