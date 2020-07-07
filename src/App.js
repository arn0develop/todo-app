import React from 'react';
import TodoList from './components/TodoList';
import {createStore} from 'redux'
import reducer from './redux/store/store'
import {Provider} from 'react-redux'
import './App.css';

const store=createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
