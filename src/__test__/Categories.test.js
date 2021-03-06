import {render, screen} from '@testing-library/react'
import Categories from '../components/Categories/Categories'
import mockState from '../state/mockState'
import renderer from 'react-test-renderer'

describe('Categories page elements', () => {
  it('should render Categories component with mock data', () => {
    render(<Categories categoriesList={mockState} />)
    const getCategoryComponent = screen.getByTestId('categoriesComponent')
    expect(getCategoryComponent).toBeInTheDocument()
  })
  it('should display intro category', () => {
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
