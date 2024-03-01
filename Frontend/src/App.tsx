import './App.css'
import { Toaster } from './components/ui/toaster'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {

  return (
    <>
      <div className='max-h-screen h-screen p-4 flex flex-col justify-center items-center'>
        <Login />
        <Register />
      </div>
      <Toaster />
    </>
  )
}

export default App
