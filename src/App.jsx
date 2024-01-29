import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Flex from './components/pages/flex'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Flex/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
