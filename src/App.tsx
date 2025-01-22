import './App.css'
import { IPOModuleProvider } from './context/useIPOModuleContext';
import MainScreen from './pages';

function App() {
  return (
    <IPOModuleProvider>

      <div className="bg-stone-100">
         <MainScreen />
    </div>
    </IPOModuleProvider>
  )
}

export default App
