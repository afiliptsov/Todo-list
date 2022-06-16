const mockState = [
  {
    key: 'intro',
    active: true,
    id: 1,
    list: [
      {
        id: 1,
        description: 'Hi there ',
        checked: false,
      },
      {
        id: 2,
        description: '<--- You can check items by clicking checkbox',
        checked: true,
      },
      {
        id: 3,
        description: 'You can delete items too --->',
        checked: false,
      },
      {
        id: 4,
        description: 'You can display multiple categories at the same time',
        checked: false,
      },
    ],
  },
  {
    key: 'groceries',
    active: false,
    id: 2,
    list: [
      {
        id: 10,
        description: 'potatoes ',
        checked: false,
      },
      {
        id: 11,
        description: 'tomatoes',
        checked: false,
      },
    ],
  },
]

export default mockState
