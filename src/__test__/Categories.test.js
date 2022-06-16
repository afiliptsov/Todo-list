import {render, screen} from '@testing-library/react'
import Categories from '../components/Categories/Categories'
import mockState from '../state/mockState'
import renderer from 'react-test-renderer'

describe('Categories page elements are displayed', () => {
  it('renders Categories  items component', () => {
    render(<Categories categoriesList={mockState} />)
    const getCategoryComponent = screen.getByTestId('categoriesComponent')
    expect(getCategoryComponent).toBeInTheDocument()
  })
  it('intro is displayed from mock state', () => {
    render(<Categories categoriesList={mockState} />)
    const getCategoryComponent = screen.getByTestId('intro')
    expect(getCategoryComponent.innerHTML).toBe('intro')
  })
})

describe('Categories component snapshot validation', () => {
  it('categories should match snapshot', () => {
    const component = renderer
      .create(<Categories categoriesList={mockState} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
