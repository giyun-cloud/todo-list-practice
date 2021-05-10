import React from 'react'
import styled from 'styled-components'
import { useStateContext } from './TodoContext'
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
  flex-grow: 1;
  // 아까 이야기한 flex-grow가 이거임.
`

function TodoList() {
  const todos = useStateContext().todos
  console.log(todos.length)
  return (
    <TodoListBlock>
      {
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))
        //map함수를 이용해서 변동하는 배열을 모두 나오게함.
      }
    </TodoListBlock>
  )
}

export default TodoList
