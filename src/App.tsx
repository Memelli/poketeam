import './App.css'
import { Toaster } from './components/ui/toaster'
import Router from './utils/routers'

function App() {
  return (
    <>
      <div className="mb-8 h-20 w-full border text-black">TEste</div>
      <Router />
      <Toaster />
    </>
  )
}

export default App
