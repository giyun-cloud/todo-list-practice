import React from 'react'
import styled from 'styled-components'
import { useStateContext } from './TodoContext'

const TodoHeadBlcok = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #555;
  h1 {
    // 이렇게 안에 들어가는 h1의 스타일을 정할 수 있다.

    margin: 0;
    font-size: 36px;
    color: #2b8a3e;
  }
  .day {
    margin-top: 4px;
    color: #ebfbee;
    font-size: 21px;
  }
  .tasks-left {
    color: #555;
    font-size: 18px;
    margin-top: 40px;
    font-weight: 700;
  }
`

function TodoHead() {
  const state = useStateContext()
  const count = state.todos.filter((todo) => !todo.done).length

  const today = new Date()
  // today에 Date 부여

  const dateString = today.toLocaleDateString('ko-KR', {
    //today의 능력중하나 toLocaleDateString사용

    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  })
  return (
    <TodoHeadBlcok>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">남은 할 일 : {count}개</div>
    </TodoHeadBlcok>
  )
}

export default TodoHead
