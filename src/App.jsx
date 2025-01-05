import { CounterApp } from "./components/Counter";
import { One } from "./components/One";
import { AmericanExpressCard } from "./components/AmericalExpressCard";
import { ShopItemApp } from "./components/ShopItems";
import {Toogleapp} from "./components/Toggleapp"
import {PortFolioApp} from "./components/Portfolio"
import {TopBar} from "./components/Topbar"
import {HomePage} from "./components/HomePage"
import {MainTopBar} from "./components/MainTopbar"
import { TopBar2 } from "./components/Topbar2";
import {Screen1} from "./components/Screen1"
function App() {
  return (
    // <div className="h-max-screen w-max-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col justify-center items-center p-10 space-y-8">
    //   <div className="flex flex-row gap-8">
    //     <div className="max-w-sm rounded-lg shadow-lg bg-gray-800 p-6">
    //       <One />
    //     </div>
    //     <div className="max-w-sm rounded-lg shadow-lg bg-gray-800 p-6">
    //       <CounterApp />
    //     </div>
    //   </div>
    //   <div className=" min-h-sm  flex flex-row gap-8">
    //     <div className="max-w-lg rounded-lg shadow-lg bg-gray-800 p-8">
    //       <h2 className="text-white text-2xl font-semibold mb-4">American Express Card</h2>
    //       <AmericanExpressCard />
    //     </div>
    //     <div className="max-w-lg rounded-lg shadow-lg bg-gray-800 p-8">
    //       <h2 className="text-white text-2xl font-semibold mb-4">Shop Items</h2>
    //       <ShopItemApp />
    //     </div>
    //     <div>
    //     <PortFolioApp />
    //     </div>
    //   </div>
    // </div>

    <div>

        <MainTopBar/>
        <Screen1/>

        <TopBar2/>
        <TopBar/>
        <HomePage/>
      <PortFolioApp />
    </div>
  );
}

export default App;
