import React from 'react'
import styled, { css } from 'styled-components'
import { MdDone, MdDelete } from 'react-icons/md'
import { useDispatchContext } from './TodoContext'

const CheckCircleIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a9e34b;
  background-color: #d8f5a2;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.4s;
  ${(prop) =>
    // 이 변수로 넣어준 prop받아와서
    prop.done &&
    // done 이 true면
    css`
      /*이변수의 스타일을 이렇게하겠다 라는뜻 css``를 사용해야함 */
      background-color: #a9e34b;
      color: #d8f5a2;
    `}
`

const Text = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
  font-size: 21px;
  font-weight: 700;
  flex-grow: 1;
  ${(prop) =>
    prop.done &&
    css`
      color: #d8f5a2;
      text-decoration: line-through;
    `}
`

const DeleteIcon = styled.div`
  display: flex;
  opacity: 0;
  align-items: center;
  font-size: 24px;
  color: #999;
  cursor: pointer;
  &:hover {
    color: #f06595;
  }
`

const TodoItemBlock = styled.div`
  display: flex;
  align-content: center;
  padding: 5px 0;
  padding-left: 5px;
  &:hover {
    ${DeleteIcon} {
      opacity: 1;
    }
    // 이렇게 변수넣고 그 변수의 스타일을 바로  {}로 정해줄 수 있음.
  }
`

function TodoItem({ todo }) {
  const dispatch = useDispatchContext()

  return (
    <TodoItemBlock>
      <CheckCircleIcon done={todo.done}>
        <MdDone />
      </CheckCircleIcon>
      <Text done={todo.done}>{todo.text}</Text>
      <DeleteIcon>
        <MdDelete />
      </DeleteIcon>
    </TodoItemBlock>
  )
}

export default TodoItem
