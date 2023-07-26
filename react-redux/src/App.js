import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import { useDispatch } from 'react-redux';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <UserContainer></UserContainer>  
      </div>
    </Provider>
  );
}

export default App;
