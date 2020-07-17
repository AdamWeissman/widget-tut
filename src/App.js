import React from 'react';
import Accordion from './components/Accordion';


const items = [
  { 
    title: "What is React?",
    content: "React is a front end JS framework"
  },
  { 
    title: "Why React?",
    content: "It's a favorite"
  },
  { 
    title: "How do you use it?",
    content: "With component"
  }
]


export default () => {
  return(
    <div>
      <Accordion items={items} />
    </div>)
};