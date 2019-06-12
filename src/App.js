import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './store';
import { TodosContainer } from './modules/todos';
import Dialogs from './dialogs';

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <TodosContainer />
        <Dialogs />
      </div>
    </Provider>
  );
}

export default App;
