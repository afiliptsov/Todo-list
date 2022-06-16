import {render, screen} from '@testing-library/react'
import ListItems from '../components/ListItems'
import mockState from './mockState'

describe('ListItems page elements are displayed', () => {
  it('renders List Items component from mock data', () => {
    render(<ListItems todoListItems={mockState} />)
    const getListItemElements = screen.getByTestId('tomatoes')
    expect(getListItemElements.innerHTML).toBe('tomatoes')
  })
})
