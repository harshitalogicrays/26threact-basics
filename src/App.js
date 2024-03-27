import logo from './logo.svg';
import './App.css';
import FirstComopent from './components/FirstComponent';

function App() {
  let a=10
  return (
    <div className='App'>
      <h1 style={{color:'red',backgroundColor:'yellow'}}>Hello React</h1>
      <h3 className='text-primary' style={{background:'aqua'}}>javascript variable: {a}</h3>

      <FirstComopent></FirstComopent>
      <FirstComopent/>
      <hr/>
        <button
          type="button"
          class="btn btn-primary"
        >
          Button
        </button>
        

    </div>
  );
}

export default App
