import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './store';
import { TodosContainer } from './modules/todos';

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <TodosContainer />
      </div>
    </Provider>
  );
}

export default App;
