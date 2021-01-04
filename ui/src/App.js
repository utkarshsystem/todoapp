import logo from './logo.svg';
import './App.css';
import AppRouter from './routes'
function App() {
  const a = <div style={{color:'red'}}>Hello World</div>;
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          {a}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
<AppRouter />
      </header>
    </div>
  );
}

export default App;
