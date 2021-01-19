const initialState = {
  todolist: [
    {
      id: 1,
      title: 'Task 1',
      project: 'project-1',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      priority: 2,
      isOpen: true
    },
    {
      id: 2,
      title: 'Task 5',
      project: 'project-2',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      priority: 5,
      isOpen: true
    },
    {
      id: 3,
      title: 'Task 123',
      project: 'project-23',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      priority: 8,
      isOpen: true
    },
    {
      id: 4,
      title: 'Task 7',
      project: 'project-22',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      priority: 3,
      isOpen: true
    }
  ],
  priorityList: null
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_COMPLETE":
      return {...state, todolist: state.todolist.map(el => el.id === action.id ? {...el, isOpen: false } : el) }
    case "TODO_PRIORITY": {
      const todos = [...state.todolist].sort((a, b) => b.priority - a.priority)
      console.log(action.status)
      return {...state, priorityList: action.status ? todos : null}
    }
    default:
      return state
  }
}