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



}