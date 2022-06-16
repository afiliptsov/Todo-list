import {render, screen} from '@testing-library/react'
import Categories from '../components/Categories'
import mockState from './mockState'

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
