import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import { useDispatch } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer></HooksCakeContainer>
        
      </div>
    </Provider>
  );
}

export default App;
