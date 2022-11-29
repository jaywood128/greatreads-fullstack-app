import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Greeting from './components/Greeting';
import axios from 'axios'
import config from './config';
import LogInOut from './components/LogInOut';

function App() {
  const [body, setBody] = useState({
  });

  const loadApp = async () => {
    try {
      const response = await axios.get(`http://localhost:${config.serverPort}/user`, {
        credentials: 'include', // fetch won't send cookies unless you set credentials
      });

      // if (response.status === 403) {
      //   isLoggedIn(false);
      // } else {
      //   isLoggedIn(true);
      console.log(response.data);
      if (response.status === 200) {
        console.log(response.data);
        setBody(response.data);
      }

      // }
    } catch (e) {
      console.error('Error hitting root');
    }
  };

  useEffect(() => {


loadApp()

  }, [])
  return (
    <div className="App">
      <h1>FusionAuth Example: React</h1>
      <Greeting body={body} />
      <LogInOut body={body} uri={`http://localhost:${config.serverPort}`}/>
    </div>
  );
}

export default App;
