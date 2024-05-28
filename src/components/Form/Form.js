import React, { useState } from "react";

const Form = ({ addTrick }) => {  
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrick = { stance, name, obstacle, tutorial, id: Date.now() };
    addTrick(newTrick);
    
    setStance('');
    setName('');
    setObstacle('');
    setTutorial('');
  };

  return (
    <form onSubmit={handleSubmit}>
       <select
        value={stance}
        onChange={(e) => setStance(e.target.value)}
      >
        <option value="">Choose your Stance</option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Obstacle"
        value={obstacle}
        onChange={(e) => setObstacle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tutorial"
        value={tutorial}
        onChange={(e) => setTutorial(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );

}

export default Form;