import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';
import './App.css';
import Main from './components/Main.js';
import './css/fontawesome-all.min.css';

// const store = ConfigureStore();

function App() {
  return (
      // <Provider store={store}>
      // </Provider>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>

  );
}

export default App;