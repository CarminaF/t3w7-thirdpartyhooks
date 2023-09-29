import { useLocalStorage } from 'react-use';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NumberGrabber from './NumberGrabber';

function App() {
  
  const [storedMessage, setStoredMessage] = useLocalStorage('message', '');

  const [message, setMessage] = useState("");
  
  // component is loaded
  // component is rendered
  // componentDidMount aka useEffect(() => {}, [])
  // componentWillUpdate sks useEffect(() => {}, [message])
  useEffect(() => {
    setMessage(storedMessage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // do something whenever message updates
    setStoredMessage(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])

  return (
    <div className="App">

      {message && <h1>{message}</h1>}
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/1/2/3">Page 1</Link>
        </li>
        <li>
          <Link to="/2">Page 2</Link>
        </li>
      </ul>
     

      <Routes>
        <Route path="/:banana" element={<NumberGrabber />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
