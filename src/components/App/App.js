import './App.css';
import React, { useEffect, useState } from 'react';



function App() {

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
      <ul>
        {tricks.map(trick => (
          <li key={trick.id}>
            <p>Stance:{trick.stance}</p>
            <p>Name:{trick.name}</p>
            <p>Obstacle:{trick.obstacle}</p>
            <p>Tutorial: <a href={trick.tutorial} target="_blank" rel="noopener noreferrer">{trick.tutorial}</a></p>


          </li>
        ))}
        </ul>
    </div>
  );
}

export default App; 
