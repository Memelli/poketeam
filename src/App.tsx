import './App.css'
import Navbar from './components/global/Navbar'
import { Toaster } from './components/ui/toaster'
import Router from './utils/routers'

function App() {
  return (
    <>
      <div className="mb-8 flex h-20 w-full items-end justify-end text-black">
        <Navbar />
      </div>
      <Router />
      <Toaster />
    </>
  )
}

export default App
