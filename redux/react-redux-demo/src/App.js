import CakeContainer from './component/cakeContainer';
import HooksCakeContainer from './component/HooksCakeContainer';
import IcecreamContainer from './component/icecreamContainer';
import {Provider} from 'react-redux';
import store from './redux/store';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <CakeContainer/> 
        <HooksCakeContainer/>  
        <IcecreamContainer/>  
      </div>
    </Provider>
  );
}

export default App;
