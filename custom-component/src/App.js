import './App.css';
import Toggle from './component/Toggle';
import ClickToEdit from './component/ClickToEdit';
import Modal from './component/Modal';
import Tab from './component/Tab';

function App() {
  return (
    <div className="App">
      <Toggle />
      <ClickToEdit />
      <Modal />
      <Tab />
    </div>
  );
}

export default App;
