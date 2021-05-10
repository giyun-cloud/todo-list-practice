import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { MdAdd } from 'react-icons/md'
import {
  useDispatchContext,
  useNextIdContext,
  useStateContext,
} from './TodoContext'

const TodoButtonBlock = styled.div`
  background-color: #ffd43b;
  &:hover {
    background-color: #ffe066;
  }
  &:active {
    background-color: #fcc419;
  }

  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 52px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  // 이걸안하면 왼쪽위를 기준으로 위치가되서 가운데위치가 기준으로 되게하는 코드임.
  transition: 0.175s ease-in;

  ${(props) =>
    props.toggle &&
    css`
      transform: translate(-50%, 50%) rotate(135deg);
      background-color: #ff8787;
      &:hover {
        background-color: #ffa8a8;
      }
      &:active {
        background-color: #ff6b6b;
      }
    `}
`

const InputForm = styled.form`
// onSubmit이라는 Enter누르면 데어터보내주는거 쓰기위해 form으로함
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 32px 32px 72px;
  box-sizing: border-box;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: 20px;
  border-radius: 5px;
  padding: 5px 0 5px 5px;
  border: 1px solid #555;
`

function TodoButton() {
  const [button, setButton] = useState(false)
  const onToggle = () => {
    setButton(!button)
  }
  const state = useStateContext()
  const dispatch = useDispatchContext()
  const nextId = useNextIdContext()
  const onChange = (e) => {
    dispatch({
      type: 'CHANGE',
      value: e.target.value,
    })
  }
  const onCreate = (e) => {
    e.preventDefault()
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId,
        text: state.todo.text,
      },
    })
  }
  return (
    <>
      {button && (
        <InputForm onSubmit={onCreate}>
          <Input
            onChange={onChange}
            placeholder="할 일을 입력하고 Enter를 누르세요."
            value={state.todo.text}
          />
        </InputForm>
      )}
      <TodoButtonBlock onClick={onToggle} toggle={button}>
        <MdAdd />
      </TodoButtonBlock>
    </>
  )
}

export default TodoButton
