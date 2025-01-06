import { CounterApp } from "./components/Counter";
import { One } from "./components/One";
import { AmericanExpressCard } from "./components/AmericalExpressCard";
import { ShopItemApp } from "./components/ShopItems";
import { Toogleapp } from "./components/Toggleapp";
import { PortFolioApp } from "./components/Portfolio";
import { TopBar } from "./components/Topbar";
import { HomePage } from "./components/HomePage";
import { MainTopBar } from "./components/MainTopbar";
import { TopBar2 } from "./components/Topbar2";
import { Screen1 } from "./components/Screen1";
import {APICompApp} from "./components/APIComApp"
import {CountDownerApp} from "./components/CountDown"
import {TodoApp} from "./components/TodoApp"
function App() {
  return (
    <div>
      <One />
      <CounterApp />
      <AmericanExpressCard />
      <ShopItemApp />
      <PortFolioApp />
      <MainTopBar />
      <Screen1 />
      <TopBar2 />
      <TopBar />
      <HomePage />
      <PortFolioApp />
      <CountDownerApp />
      <TodoApp/>

    </div>
  );
}

export default App;
