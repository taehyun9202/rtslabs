import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import SearcbBar from './components/SearchBar'
import Result from './components/Result';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <SearcbBar />
        <Result />
      </div>
    </Provider>
  );
}

export default App;
