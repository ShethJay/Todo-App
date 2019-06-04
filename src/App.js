import React from 'react';
import {Provider} from 'react-redux';
import reduxStore from './store';
import Todo from './modules/todos/components/Todo';


function App() {
  return (
    <Provider store={reduxStore}>
    <div className="App">
      <Todo />
    </div>
    </Provider>
  );
}

export default App;
