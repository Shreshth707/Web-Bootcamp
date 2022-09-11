import './App.css';
import rootReducer from './redux/reducers';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import Users from './Users';
let store = createStore(rootReducer, 
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()));

function App() {
  return (
    <Provider store={store}>
      <h1> Thunk Example </h1>
      <Users />
    </Provider>
  );
}

export default App;
