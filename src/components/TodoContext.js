  import React, { createContext, useContext, useReducer, useRef } from 'react'

  const initialState = {
    todo: {
      text: '',
    },
    todos: [],
  }

  function reduce(state, action) {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          todo: { text: action.value },
        }
      case 'CREATE':
        return {
          todos: state.todos.concat(state.todo),
          todo: initialState.todo,
        }
      case 'TOGGLE':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.id ? { ...todo, done: !todo.done } : todo,
          ),
        }
      case 'REMOVE':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.id),
        }
      default:
        throw new Error('Unhandled type')
    }
  }

  const TodoStateContext = createContext()
  // createContext로 능력부여하고
  const TodoDispatchContext = createContext()
  const TodoNextIdContext = createContext()

  function TodoContext({ children }) {
    const nextId = useRef(0)
    const [state, dispatch] = useReducer(reduce, initialState)
    return (
      <TodoStateContext.Provider value={state}>
        {
          // value를 통해 Context능력 부여된 변수에 데이터 넣음
        }
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoNextIdContext.Provider value={nextId}>
            {children}
          </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    )
  }

  export function useStateContext() {
    // 데이터를 쓰려는곳에서 useContext와 TodoStateContext를 둘다 불러내서 써도되지만
    // 이렇게하면 이 function 하나만 불러냄으로서 사용가능
    // 취향에따라 하면됨.
    if (!useContext(TodoStateContext)) {
      throw new Error('Cannot find TodoContext')
    }
    // 혹시라도 Provider가 안걸려있으면 value로 받는값이없기에 if에 걸려져 에러를 내보냄
    return useContext(TodoStateContext)
  }

  export function useDispatchContext() {
    if (!useContext(TodoDispatchContext)) {
      throw new Error('Cannot find TodoContext')
    }
    return useContext(TodoDispatchContext)
  }
  export function useNextIdContext() {
    if (!useContext(TodoNextIdContext)) {
      throw new Error('Cannot find TodoContext')
    }
    return useContext(TodoNextIdContext)
  }

  export default TodoContext
