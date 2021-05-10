import { createGlobalStyle } from 'styled-components'
import TodoButton from './components/TodoButton'
import TodoContext from './components/TodoContext'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoTemplate from './components/TodoTemplate'

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #d8f5a2;
  }
`

function App() {
  return (
    <TodoContext>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoButton />
      </TodoTemplate>
    </TodoContext>
    // TodoContext로 감싸줌으로써 TodoContext에 있는 Provide가 작동함. useContext사용가능
  )
}

export default App
