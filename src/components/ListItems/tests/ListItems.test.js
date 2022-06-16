import {render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer'
import ListItems from '../../ListItems/ListItems'
import mockState from '../../../state/mockState'

describe('ListItems page elements are displayed', () => {
  it('renders List Items component from mock data', () => {
    render(<ListItems todoListItems={mockState} />)
    const getListItemElements = screen.getByTestId('tomatoes')
    expect(getListItemElements.innerHTML).toBe('tomatoes')
  })
})

describe('list item snapshot validation', () => {
  it('list item shoulld match snapshot', () => {
    const component = renderer
      .create(<ListItems todoListItems={mockState} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
