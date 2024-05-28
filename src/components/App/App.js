import './App.css';
import React, { useEffect, useState } from 'react';



function App() {

const TrickList = () => {
  const [tricks, setTricks] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => setTricks(data))
      .catch(error => console.error('Error fetching tricks:', error));
  }, []);



  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
