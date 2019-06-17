import React from 'react';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import reduxStore from './store';
import { TodosContainer } from './modules/todos';
import Dialogs from './dialogs';

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <ToastContainer autoClose={2000} />
        <TodosContainer />
        <Dialogs />
      </div>
    </Provider>
  );
}

export default App;
