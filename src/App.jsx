import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Flex from './components/pages/flex'
import Cbt from './components/pages/cbt'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Flex />} />
        <Route path='/cbt' element={<Cbt />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
