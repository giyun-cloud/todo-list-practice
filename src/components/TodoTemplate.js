import React from 'react'
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
  width: 500px;
  height: 700px;

  position: relative;
  margin: 0 auto;
  // margin: auto헤도 위아래 가운데는안된다 좌우만된다.

  margin-top: 30px;

  background-color: #a9e34b;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  // 본문의 크기를 나머지공간을 flex-grow:1로 다채우게 하기위해 flex이용
`

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>
  // children : 안에 다른태그들이 들어감 그 태그들을 보여주기위해
}

export default TodoTemplate
