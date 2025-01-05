import { CounterApp } from "./components/Counter"
import { One } from "./components/One"
import { AmericanExpressCard } from "./components/AmericalExpressCard"



function App() {

  return (
    <div className="h-screen w-screen bg-[#0f172a] flex justify-center items-center">
          <One />
         <CounterApp />
        <AmericanExpressCard />

    </div>
  )
}

export default App
