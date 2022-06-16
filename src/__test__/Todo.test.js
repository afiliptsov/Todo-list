import {fireEvent, render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer'
import Todo from '../components/Todo/Todo'

describe('Todo page elements display', () => {
  it('should render Todo page Header', async () => {
    render(<Todo />)
    const getTitle = screen.getByTestId('todoListHeader')
    expect(getTitle).toBeVisible()
  })
  it('should display Add Category Submit button', async () => {
    render(<Todo />)
    const getCategorySubmitButton = screen.getByTestId('categorySubmit')
    expect(getCategorySubmitButton).toHaveTextContent('Add Category')
  })
  it('should display Add List Item Submit button', async () => {
    render(<Todo />)
    const getListItemSubmitButton = screen.getByTestId('listItemSubmit')
    expect(getListItemSubmitButton).toHaveTextContent('Add item')
  })
  it('should display user input field', async () => {
    render(<Todo />)
    const getTextInput = screen.getByTestId('textInput')
    expect(getTextInput).toBeVisible()
  })
})

describe('Input field', () => {
  it('should be able to type input', async () => {
    render(<Todo />)
    const inputElement = screen.getByTestId('textInput')
    fireEvent.change(inputElement, {target: {value: 'sports'}})
    expect(inputElement.value).toBe('sports')
  })

  it('input should be cleared after submission', async () => {
    const testCategory = 'sport'
    render(<Todo />)
    const inputElement = screen.getByTestId('textInput')
    const categoryButton = screen.getByTestId('categorySubmit')
    fireEvent.change(inputElement, {target: {value: testCategory}})
    expect(inputElement.value).toBe(testCategory)
    fireEvent.click(categoryButton)
    expect(inputElement.value).toBe('')
  })

  it('should display new list item when added', async () => {
    render(<Todo />)
    const getListItemInput = screen.getByTestId('textInput')
    const addItemButton = screen.getByTestId('listItemSubmit')
    fireEvent.change(getListItemInput, {target: {value: 'Ham'}})
    fireEvent.click(addItemButton)
    const addedListItem = await screen.findAllByText('Ham')
    expect(addedListItem).toHaveLength(1)
  })

  it('should display category when added', async () => {
    render(<Todo />)
    const getCategoryInput = screen.getByTestId('textInput')
    const addCategoryButton = screen.getByTestId('categorySubmit')
    fireEvent.change(getCategoryInput, {target: {value: 'sports'}})
    fireEvent.click(addCategoryButton)
    const addedListItem = await screen.findAllByText('sports')
    expect(addedListItem).toHaveLength(1)
  })
})

describe('Todo snapshot validation', () => {
  it('Todo should match snapshot', () => {
    const component = renderer.create(<Todo />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
