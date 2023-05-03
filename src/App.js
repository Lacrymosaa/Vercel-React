import Relogio from "./Components/Relogio";
import Letreiro from "./Components/Letreiro";
import ContadorPessoas from "./Components/Contador";
import Gallery from "./Components/Gallery";
import { Profile } from "./Components/Gallery";
import TodoList from "./Components/TodoList";
import AProfile from './Components/Avatar';
import PackingList from './Components/PackingList';
import List from './Components/ListComponent';
import TeaGathering from './Components/tea-gathering';
function App() {
  return (
    <div className="App">
      <Letreiro />
      <Relogio />
      <ContadorPessoas />
      <Gallery />
      <Profile />
      <TodoList />
      <AProfile />
      <PackingList />
      <List />
      <TeaGathering />
    </div>
  );
}

export default App;
